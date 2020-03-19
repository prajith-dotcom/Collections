import {BPMNode, BPMProcessInstance, BPMTask, BPMVariable, inputVariableTypes, processStates} from "../models/bpm-case";

export class PamModelConversorService {

  static bpmProcessInstance(src): BPMProcessInstance {
    let bpmPI = new BPMProcessInstance();
    if (!src) {
      return bpmPI;
    }
    bpmPI.processInstanceId = src['process-instance-id'];
    bpmPI.processId = src['process-id'];
    bpmPI.processName = src['process-name'];
    bpmPI.processVersion = src['process-version'];
    bpmPI.processInstanceState = src['process-instance-state'];
    bpmPI.containerId = src['container-id'];
    bpmPI.startDate = src['start-date'] ? src['start-date']['java.util.Date'] : null;
    bpmPI.processInstanceDesc = src['process-instance-desc'];

    if (src['active-user-tasks']) {
      bpmPI.currentTask = PamModelConversorService.bpmTasks(src['active-user-tasks']['task-summary'] ? src['active-user-tasks']['task-summary'] : []);
    } else {
      bpmPI.currentTask = [];
    }

    return bpmPI;
  }

  static bpmTasks(arr): BPMTask[] {
    let ret: BPMTask[] = [];
    for (let bpmt of arr) {
      let bpmTask = new BPMTask();
      bpmTask.taskId = bpmt['task-id'];
      bpmTask.taskName = bpmt['task-name'];
      bpmTask.taskSubject = bpmt['task-subject'];
      bpmTask.taskDescription = bpmt['task-description'];
      bpmTask.taskStatus = bpmt['task-status'];
      bpmTask.taskPriority = bpmt['task-priority'];
      bpmTask.taskIsSkipable = bpmt['task-is-skipable'];
      bpmTask.taskActualOwner = bpmt['task-actual-owner'];
      bpmTask.taskCreatedBy = bpmt['task-created-by'];
      bpmTask.taskCreatedOn = bpmt['task-created-on'] ? bpmt['task-created-on']['java.util.Date'] : null;
      bpmTask.taskActivationTime = bpmt['task-activation-time'] ? bpmt['task-activation-time']['java.util.Date'] : null;
      bpmTask.taskExpirationTime = bpmt['task-expiration-time'] ? bpmt['task-expiration-time']['java.util.Date'] : null;
      bpmTask.taskProcessInstanceId = bpmt['task-proc-inst-id'];
      bpmTask.taskProcessDefinitionId = bpmt['task-proc-def-id'];
      bpmTask.taskContainerId = bpmt['task-container-id'];
      bpmTask.taskParentId = bpmt['task-parent-id'];
      ret.push(bpmTask);
    }

    return ret;
  }

  static bpmVariables(arr, isInputVariable?: boolean): BPMVariable[] {
    let ret: BPMVariable[] = [];
    if (isInputVariable) {
      for (let bpmv in arr) {
        if (bpmv.substr(0, 2) === 'xv') {
          let bpmVariable = new BPMVariable();
          bpmVariable.name = bpmv.substr(2);
          bpmVariable.type = arr[bpmv];

          if (bpmVariable.type != null && bpmVariable.type === inputVariableTypes.BOOLEAN) {
            bpmVariable.inputVariableOpts = getInputVariableOptsByName(bpmVariable.name);
          }

          ret.push(bpmVariable);
        }
      }
    }
    else {
      for (let bpmv in arr) {
        let name = arr[bpmv]['name'];
        if (name.substr(0, 2) === 'xv') {
          let bpmVariable = new BPMVariable();
          bpmVariable.name = name.substr(2);
          bpmVariable.value = arr[bpmv]['value'];
          bpmVariable.modificationDate = arr[bpmv]['modification-date'] ? arr[bpmv]['modification-date']['java.util.Date'] : null;

          let names = Object.keys(InputVariableBoolNames);
          for (let name of names) {
            if (bpmVariable.name === name) {
              bpmVariable.inputVariableOpts = getInputVariableOptsByName(bpmVariable.name);
              break;
            }
          }

          ret.push(bpmVariable);
        }
      }
    }

    return ret;
  }

  static bpmNodes(arr): BPMNode[] {
    let ret: BPMNode[] = [];
    for (let bpmn of arr) {
      if (bpmn['node-type'] === "EventNode" || bpmn['node-type'] === "HumanTaskNode") {
        let bpmNode = new BPMNode();
        bpmNode.nodeInstanceId = bpmn['node-instance-id'];
        bpmNode.nodeName = bpmn['node-name'];
        bpmNode.processInstanceId = bpmn['process-instance-id'];
        bpmNode.containerId = bpmn['container-id'];
        bpmNode.startDate = bpmn['start-date'] ? bpmn['start-date']['java.util.Date'] : null;
        bpmNode.nodeId = bpmn['node-id'];
        bpmNode.nodeType = bpmn['node-type'];
        bpmNode.nodeCompleted = bpmn['node-completed'];

        ret.push(bpmNode);
      }
    }

    return ret;
  }

}

export function getInputVariableOptsByName(name: string): {value: boolean, name: string}[] {
  let options: { value: boolean, name: string }[] = [];
  switch (name) {
    case InputVariableBoolNames.IsValid:
      options = [{value: true, name: 'Completed'}, {value: false, name: 'Not Completed'}];
      break;
    case InputVariableBoolNames.IsApproved:
      options = [{value: true, name: 'Approved'}, {value: false, name: 'Not Approved'}];
      break;
    case InputVariableBoolNames.IsAccepted:
      options = [{value: true, name: 'Accepted'}, {value: false, name: 'Not Accepted'}];
      break;
    default:
      options = [{value: true, name: 'Valid'}, {value: false, name: 'Not Valid'}];
  }
  return options;
}

export enum InputVariableBoolNames {
  IsValid = 'IsValid',
  IsApproved = 'IsApproved',
  IsAccepted = 'IsAccepted'
}


