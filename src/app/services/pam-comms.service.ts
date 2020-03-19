import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {UFNotification, UserFeedbackService} from "./user-feedback.service";
import {UFSeverity} from "./ufseverity";
import {GlobalStateService} from "./global-state.service";
import {BPMCase, BPMNode, BPMProcessInstance, BPMTask, BPMVariable} from "../models/bpm-case";
import {PamModelConversorService} from "./pam-model-conversor";

let ufs: UserFeedbackService = null;
let gss: GlobalStateService = null;

const urls = {
  general: {
    containers: "containers/",
    processes: "processes/",
    process: "process/",
    instances: "instances/",
    signals: "signals",
    signal: "signal/",
    tasks: "tasks/",
    completedStates: "states/completed",
    tsIEKey: "tsie",
    definitions: "definitions/",
    inputs: "inputs",
    images: "images/",
    page: "page",
    pageSize: "pageSize",
    status: "status",
    sort: "sort",
    sortOrder: "sortOrder"
  },
  processesInstances: {url: "processes/instances/"},
  processesDefinitions: {url: "processes/definitions/"},
  completeTask: {
    user: "user",
    autoProgress: "auto-progress"
  },
  pcStatus: {
    withVars: "withVars"
  },
  tasks: {
    users: "tasks/users/"
  },
  qtinstances: {url: "queries/tasks/instances/"},
  taskList: {
    owners: "owners",
    potOwners: "pot-owners",
    user: "user",
    groups: "groups"
  },
  variablesInstance: {url: "variables/instances"},
  nodesInstances: {url: "nodes/instances"}
};

@Injectable({
  providedIn: 'root'
})
export class PamCommsService {

  constructor(private _http: HttpClient) {
  }

  createCase(containerId: string, processId: string): Promise<number> {
    let options = {
      headers: this.getHeaderWithAuth()
    };
    const url = PamCommsService.getCompleteUrl(
      urls.general.containers + containerId + '/' + urls.general.processes + processId + '/' + urls.general.instances
    );
    return this._http.post<any>(url, {}, options)
      .toPromise()
      .then(val => {
        return val;
      })
      .catch(this.handleError);
  }

  completeTask(task: BPMTask, inputVariables: BPMVariable[], containerId: string, account: string): Promise<number> {
    let paramsBody = {};
    for (let v in inputVariables) {
      paramsBody['xv' + inputVariables[v].name] = inputVariables[v].value;
    }
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.completeTask.user, account);
    params = params.set(urls.completeTask.autoProgress, "true");
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.put<any>(
      PamCommsService.getCompleteUrl(
        urls.general.containers + containerId + '/' + urls.general.tasks + task.taskId + '/' + urls.general.completedStates
      ),
      paramsBody,
      options
    )
      .toPromise()
      .then(val => {
        return val;
      })
      .catch(this.handleError);
  }

  doSignal(containerId: string, instanceId: number, signal: string): Promise<number> {
    let options = {
      headers: this.getHeaderWithAuth().set('Content-Type', 'application/json')
    };
    return this._http.post<any>(
      PamCommsService.getCompleteUrl(
        urls.general.containers + containerId + '/' + urls.processesInstances.url + instanceId + '/' + urls.general.signal + signal
      ),
      null,
      options
    )
      .toPromise()
      .then(val => {
        return val;
      })
      .catch(this.handleError);
  }

  getProcessCurrentStatus(containerId: string, instanceId: number): Promise<BPMProcessInstance> {
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.pcStatus.withVars, "true");
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<BPMProcessInstance>(PamCommsService.getCompleteUrl(
      urls.general.containers + containerId + '/' + urls.processesInstances.url + instanceId
    ), options)
      .toPromise()
      .then(val => {
        if (!val) {
          console.log("No case found");
          return null;
        }

        return PamModelConversorService.bpmProcessInstance(val);
      })
      .catch(this.handleError);
  }

  getInputVariables(containerId: string, definitionId: string, taskName: string): Promise<BPMVariable[]> {
    let params = this.getParamsWithIETimestamp();
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<Object>(PamCommsService.getCompleteUrl(
      urls.general.containers + containerId + '/' + urls.processesDefinitions.url + definitionId + '/' +
      urls.tasks.users + taskName + '/' + urls.general.inputs
      ), options)
      .toPromise()
      .then(val => {
        if (!val || !val['taskInputs']) {
          console.log("No input variables found");
          return [];
        }

        return PamModelConversorService.bpmVariables(val['taskInputs'], true);
      })
      .catch(this.handleError);
  }

  getDueDate(taskId: number): Promise<Object> {
    let params = this.getParamsWithIETimestamp();
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(PamCommsService.getCompleteUrl(urls.qtinstances.url + taskId), options)
      .toPromise()
      .then(val => {
        return val['task-expiration-time'] ? val['task-expiration-time']['java.util.Date'] : null;
      })
      .catch(this.handleError);
  }

  getSignals(containerId: string, instanceId: number): Promise<string[]> {
    let params = this.getParamsWithIETimestamp();
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(PamCommsService.getCompleteUrl(
      urls.general.containers + containerId + '/' + urls.processesInstances.url + instanceId + '/' + urls.general.signals
    ), options)
      .toPromise()
      .then(val => {
        return val ? val : [];
      })
      .catch(this.handleError);
  }

  // Recursive function to control we are receiving all completed tasks even if there are more than 100 tasks completed
  getCompletedTasks(containerId: string, instanceId: number, page?: number, historicTasks: BPMNode[] = []): Promise<BPMNode[]> {
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.general.page, page ? page.toString() : '0');
    params = params.set(urls.general.pageSize, '100');
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<BPMNode[]>(PamCommsService.getCompleteUrl(
        urls.general.containers + containerId + '/' + urls.processesInstances.url + instanceId + '/' + urls.nodesInstances.url)
    , options)
      .toPromise()
      .then(val => {
        if ((!page || page == 0) && (!val || !val['node-instance'] || val['node-instance'].length == 0)) {
          console.log("No completed tasks found");
          return [];
        }

        if (!val || !val['node-instance'] || val['node-instance'].length == 0) {
          return historicTasks.filter(ht => ht.nodeCompleted == true);
        }

        historicTasks = historicTasks.concat(PamModelConversorService.bpmNodes(val['node-instance']));
        return this.getCompletedTasks(containerId, instanceId, page ? page + 1 : 1, historicTasks);
      })
      .catch(this.handleError);
  }

  loadProcessSvg(containerId: string, instanceId: number): Promise<string> {
    let optionsSvg = {
      params: this.getParamsWithIETimestamp(),
      headers: this.getHeaderWithAuth(false)
    };
    return this._http.get(PamCommsService.getCompleteUrl(
      urls.general.containers + containerId + '/' + urls.general.images + urls.processesInstances.url + instanceId)
    , {...optionsSvg, responseType: 'text'})
      .toPromise()
      .then(val => {
        return val;
      })
      .catch(this.handleError);
  }

  getTaskList(account: string, withOwner: boolean, withoutOwner: boolean, currPage: number, pageSize: number, orderBy?: boolean, orderType?: string): Promise<BPMTask[]> {
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.general.page, currPage.toString());
    params = params.set(urls.general.pageSize, pageSize.toString());
    params = params.set(urls.general.sort, orderType ? orderType : 'expirationTime');
    params = params.set(urls.general.sortOrder, orderBy ? 'false' : 'true');
    let options = {
      params: null,
      headers: this.getHeaderWithAuth()
    };
    if (withOwner) {
      params = params.set(urls.taskList.user, account);
      params = params.set(urls.general.status, 'Reserved');
      options.params = params;
      return this._http.get<BPMTask[]>(PamCommsService.getCompleteUrl(
        urls.qtinstances.url + urls.taskList.owners)
      , options)
        .toPromise()
        .then(val => {
          if (!val || !val['task-summary']) {
            console.log("No tasks with owner found");
            return [];
          }

          return PamModelConversorService.bpmTasks(val['task-summary']);
        })
        .catch(this.handleError);
    }
    else if (withoutOwner) {
      params = params.set(urls.taskList.groups, 'bpm-all');
      params = params.set(urls.general.status, 'Ready');
      options.params = params;
      return this._http.get<BPMTask[]>(PamCommsService.getCompleteUrl(
          urls.qtinstances.url + urls.taskList.potOwners)
      , options)
        .toPromise()
        .then(val => {
          if (!val || !val['task-summary']) {
            console.log("No tasks without owner found");
            return [];
          }

          return PamModelConversorService.bpmTasks(val['task-summary']);
        })
        .catch(this.handleError);
    }
  }

  getProcessesList(containerId: string, currPage: number, pageSize: number, orderBy?: boolean, orderType?: string): Promise<BPMProcessInstance[]> {
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.general.page, currPage.toString());
    params = params.set(urls.general.pageSize, pageSize.toString());
    params = params.set(urls.general.status, '1');
    params = params.set(urls.general.sort, orderType ? orderType : 'start');
    params = params.set(urls.general.sortOrder, orderBy ? 'false' : 'true');
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<BPMProcessInstance[]>(PamCommsService.getCompleteUrl(
        urls.general.containers + containerId + '/' + urls.processesInstances.url)
      , options)
      .toPromise()
      .then(val => {
        if (!val || !val['process-instance'] || val['process-instance'].length == 0) {
          console.log("No processes found");
          return [];
        }

        let processes: BPMProcessInstance[] = [];
        for (let process of val['process-instance']) {
          processes.push(PamModelConversorService.bpmProcessInstance(process))
        }

        return processes;
      })
      .catch(this.handleError);
  }

  getTasksUsedVariables(containerId: string, instanceId: number): Promise<string[]> {
    let options = {
      params: this.getParamsWithIETimestamp(),
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<BPMVariable[]>(PamCommsService.getCompleteUrl(
        urls.general.containers + containerId + '/' + urls.processesInstances.url + instanceId + '/' + urls.variablesInstance.url)
      , options)
      .toPromise()
      .then(val => {
        if (!val || !val['variable-instance'] || val['variable-instance'].length == 0) {
          console.log("No variables found");
          return [];
        }

        let variableNames: string[] = [];
        for (let taskuv of val['variable-instance']) {
          if (taskuv['name'].substr(0, 2) === 'xv') {
            variableNames.push(taskuv['name']);
          }
        }

        return variableNames;
      })
      .catch(this.handleError);
  }

  getTaskVariableValues(containerId: string, instanceId: number, variableName: string): Promise<BPMVariable[]> {
    let options = {
      params: this.getParamsWithIETimestamp(),
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<BPMVariable[]>(PamCommsService.getCompleteUrl(
        urls.general.containers + containerId + '/' + urls.processesInstances.url + instanceId + '/' + urls.variablesInstance.url + '/' + variableName)
      , options)
      .toPromise()
      .then(val => {
        if (!val || !val['variable-instance'] || val['variable-instance'].length == 0) {
          console.log("No variables found");
          return [];
        }

        return PamModelConversorService.bpmVariables(val['variable-instance'], false);
      })
      .catch(this.handleError);
  }

  abortProcess(containerId: string, instanceId: number): Promise<number> {
    let params = this.getParamsWithIETimestamp();
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.delete<number>(PamCommsService.getCompleteUrl(
      urls.general.containers + containerId + '/' + urls.processesInstances.url + instanceId
    ), options)
      .toPromise()
      .then(val => {
        return val;
      })
      .catch(this.handleError);
  }

  private static getCompleteUrl(url: string) {
    return `${environment.kieUrl}/${url}`;
  }

  private getParamsWithIETimestamp(): HttpParams {
    let params = new HttpParams();
    return params.set(urls.general.tsIEKey, new Date().getTime().toString());
  }

  private getHeaderWithAuth(addAcceptJson = true): HttpHeaders {
    let headers = new HttpHeaders().set('Authorization', `Basic ${btoa(environment.kieUser + ":" + environment.kiePwd)}`);
    if (addAcceptJson) {
      headers = headers.set('Accept', 'application/json');
    }
    return headers;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in httpbackend');
    console.error(error);
    if (error.status == 401) {
      ufs.handleNotification(new UFNotification(0, "Session expired", UFSeverity.warn, error));
      gss.logout();
    }

    throw error;
  }
}
