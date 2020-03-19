import {Account} from "./account";

export enum processStates {
  ACTIVE = 1,
  COMPLETE = 2,
  ABORTED = 3
}

export enum inputVariableTypes {
  OBJECT = 'Object',
  BOOLEAN = 'Boolean',
  STRING = 'String'
}

export class BPMCase {
  private _id: string;
  private _accountId: string;
  private _accountType: string;
  private _cifId: string;
  private _processInstanceId: number;
  private _containerId: string;
  private _processId: string;
  private _processName: string;
  private _processVersion: string;
  private _note: string;
  private _abortNote: string;
  private _createdBy: string;
  private _createdDt: string;

  constructor(id?:string, accountId?:string, accountType?:string, cifId?:string, processInstanceId?:number, containerId?:string, processId?:string,
              processName?:string, processVersion?:string, note?:string, abortNote?:string, createdBy?:string, createdDt?:string){

    this.id = id;
    this.accountId = accountId;
    this.accountType = accountType;
    this.cifId = cifId;
    this.processInstanceId = processInstanceId;
    this.containerId = containerId;
    this.processId = processId;
    this.processName = processName;
    this.processVersion = processVersion;
    this.note = note;
    this.abortNote = abortNote;
    this.createdBy = createdBy;
    this.createdDt = createdDt;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get accountId(): string {
    return this._accountId;
  }

  set accountId(value: string) {
    this._accountId = value;
  }

  get accountType(): string {
    return this._accountType;
  }

  set accountType(value: string) {
    this._accountType = value;
  }

  get cifId(): string {
    return this._cifId;
  }

  set cifId(value: string) {
    this._cifId = value;
  }

  get processInstanceId(): number {
    return this._processInstanceId;
  }

  set processInstanceId(value: number) {
    this._processInstanceId = value;
  }

  get containerId(): string {
    return this._containerId;
  }

  set containerId(value: string) {
    this._containerId = value;
  }

  get processId(): string {
    return this._processId;
  }

  set processId(value: string) {
    this._processId = value;
  }

  get processName(): string {
    return this._processName;
  }

  set processName(value: string) {
    this._processName = value;
  }

  get processVersion(): string {
    return this._processVersion;
  }

  set processVersion(value: string) {
    this._processVersion = value;
  }

  get note(): string {
    return this._note;
  }

  set note(value: string) {
    this._note = value;
  }

  get abortNote(): string {
    return this._abortNote;
  }

  set abortNote(value: string) {
    this._abortNote = value;
  }

  get createdBy(): string {
    return this._createdBy;
  }

  set createdBy(value: string) {
    this._createdBy = value;
  }

  get createdDt(): string {
    return this._createdDt;
  }

  set createdDt(value: string) {
    this._createdDt = value;
  }

}

export class BPMProcessInstance {
  private _processInstanceId: number;
  private _processId: string;
  private _processName: string;
  private _processVersion: string;
  private _processInstanceState: number;
  private _containerId: string;
  private _startDate: number;
  private _processInstanceDesc: string;

  private _historicTasks: BPMNode[];
  private _currentTask: BPMTask[];
  private _inputVariables: BPMVariable[];
  private _signals: string[];
  private _processInstanceVariables: BPMVariable[];

  private _processSvg: string;

  private _account: Account;

  constructor(processInstanceId?:number, processId?:string, processName?:string, processVersion?:string, processInstanceState?:number,
              containerId?:string, startDate?:number, processInstanceDesc?:string, historicTasks?:BPMNode[], currentTask?:BPMTask[],
              inputVariables?:BPMVariable[], signals?:string[], processSvg?:string,
              account?:Account){

    this.processInstanceId = processInstanceId;
    this.processId = processId;
    this.processName = processName;
    this.processVersion = processVersion;
    this.processInstanceState = processInstanceState;
    this.containerId = containerId;
    this.startDate = startDate;
    this.processInstanceDesc = processInstanceDesc;

    this.historicTasks = historicTasks;
    this.currentTask = currentTask;
    this.inputVariables = inputVariables;
    this.signals = signals;

    this.processSvg = processSvg;

    this.account = account;
  }

  get processInstanceId(): number {
    return this._processInstanceId;
  }

  set processInstanceId(value: number) {
    this._processInstanceId = value;
  }

  get processId(): string {
    return this._processId;
  }

  set processId(value: string) {
    this._processId = value;
  }

  get processName(): string {
    return this._processName;
  }

  set processName(value: string) {
    this._processName = value;
  }

  get processVersion(): string {
    return this._processVersion;
  }

  set processVersion(value: string) {
    this._processVersion = value;
  }

  get processInstanceState(): number {
    return this._processInstanceState;
  }

  set processInstanceState(value: number) {
    this._processInstanceState = value;
  }

  get containerId(): string {
    return this._containerId;
  }

  set containerId(value: string) {
    this._containerId = value;
  }

  get startDate(): number {
    return this._startDate;
  }

  set startDate(value: number) {
    this._startDate = value;
  }

  get processInstanceDesc(): string {
    return this._processInstanceDesc;
  }

  set processInstanceDesc(value: string) {
    this._processInstanceDesc = value;
  }

  get historicTasks(): BPMNode[] {
    return this._historicTasks;
  }

  set historicTasks(value: BPMNode[]) {
    this._historicTasks = value;
  }

  get currentTask(): BPMTask[] {
    return this._currentTask;
  }

  set currentTask(value: BPMTask[]) {
    this._currentTask = value;
  }

  get inputVariables(): BPMVariable[] {
    return this._inputVariables;
  }

  set inputVariables(value: BPMVariable[]) {
    this._inputVariables = value;
  }

  get signals(): string[] {
    return this._signals;
  }

  set signals(value: string[]) {
    this._signals = value;
  }

  get processSvg(): string {
    return this._processSvg;
  }

  set processSvg(value: string) {
    this._processSvg = value;
  }

  get account(): Account {
    return this._account;
  }

  set account(account: Account) {
    this._account = account;
  }

}

export class BPMTask {
  private _taskId: number;
  private _taskName: string;
  private _taskSubject: string;
  private _taskDescription: string;
  private _taskStatus: string;
  private _taskPriority: number;
  private _taskIsSkipable: boolean;
  private _taskActualOwner: string;
  private _taskCreatedBy: string;
  private _taskCreatedOn: Object;
  private _taskActivationTime: Object;
  private _taskExpirationTime: Object;
  private _taskProcessInstanceId: number;
  private _taskProcessDefinitionId: string;
  private _taskContainerId: string;
  private _taskParentId: number;

  private _account: Account;

  constructor(taskId?:number, taskName?:string, taskSubject?:string, taskDescription?:string, taskStatus?:string, taskPriority?:number, taskIsSkipable?:boolean,
              taskActualOwner?:string, taskCreatedBy?:string, taskCreatedOn?:Object, taskActivationTime?:Object, taskExpirationTime?:Object, taskProcessInstanceId?:number,
              taskProcessDefinitionId?:string, taskContainerId?:string, taskParentId?:number, account?:Account){

    this.taskId = taskId;
    this.taskName = taskName;
    this.taskSubject = taskSubject;
    this.taskDescription = taskDescription;
    this.taskStatus = taskStatus;
    this.taskPriority = taskPriority;
    this.taskIsSkipable = taskIsSkipable;
    this.taskActualOwner = taskActualOwner;
    this.taskCreatedBy = taskCreatedBy;
    this.taskCreatedOn = taskCreatedOn;
    this.taskActivationTime = taskActivationTime;
    this.taskExpirationTime = taskExpirationTime;
    this.taskProcessInstanceId = taskProcessInstanceId;
    this.taskProcessDefinitionId = taskProcessDefinitionId;
    this.taskContainerId = taskContainerId;
    this.taskParentId = taskParentId;

    this.account = account;
  }

  get taskId(): number {
    return this._taskId;
  }

  set taskId(value: number) {
    this._taskId = value;
  }

  get taskName(): string {
    return this._taskName;
  }

  set taskName(value: string) {
    this._taskName = value;
  }

  get taskSubject(): string {
    return this._taskSubject;
  }

  set taskSubject(value: string) {
    this._taskSubject = value;
  }

  get taskDescription(): string {
    return this._taskDescription;
  }

  set taskDescription(value: string) {
    this._taskDescription = value;
  }

  get taskStatus(): string {
    return this._taskStatus;
  }

  set taskStatus(value: string) {
    this._taskStatus = value;
  }

  get taskPriority(): number {
    return this._taskPriority;
  }

  set taskPriority(value: number) {
    this._taskPriority = value;
  }

  get taskIsSkipable(): boolean {
    return this._taskIsSkipable;
  }

  set taskIsSkipable(value: boolean) {
    this._taskIsSkipable = value;
  }

  get taskActualOwner(): string {
    return this._taskActualOwner;
  }

  set taskActualOwner(value: string) {
    this._taskActualOwner = value;
  }

  get taskCreatedBy(): string {
    return this._taskCreatedBy;
  }

  set taskCreatedBy(value: string) {
    this._taskCreatedBy = value;
  }

  get taskCreatedOn(): Object {
    return this._taskCreatedOn;
  }

  set taskCreatedOn(value: Object) {
    this._taskCreatedOn = value;
  }

  get taskActivationTime(): Object {
    return this._taskActivationTime;
  }

  set taskActivationTime(value: Object) {
    this._taskActivationTime = value;
  }

  get taskExpirationTime(): Object {
    return this._taskExpirationTime;
  }

  set taskExpirationTime(value: Object) {
    this._taskExpirationTime = value;
  }

  get taskProcessInstanceId(): number {
    return this._taskProcessInstanceId;
  }

  set taskProcessInstanceId(value: number) {
    this._taskProcessInstanceId = value;
  }

  get taskProcessDefinitionId(): string {
    return this._taskProcessDefinitionId;
  }

  set taskProcessDefinitionId(value: string) {
    this._taskProcessDefinitionId = value;
  }

  get taskContainerId(): string {
    return this._taskContainerId;
  }

  set taskContainerId(value: string) {
    this._taskContainerId = value;
  }

  get taskParentId(): number {
    return this._taskParentId;
  }

  set taskParentId(value: number) {
    this._taskParentId = value;
  }

  get account(): Account {
    return this._account;
  }

  set account(value: Account) {
    this._account = value;
  }

}

export class BPMVariable {
  private _name: string;
  private _type: string;
  private _value: any;
  private _inputVariableOpts: {value: boolean, name: string}[];
  private _modificationDate: number;

  constructor(name?:string, type?:string, value?:any, modificationDate?: number) {
    this.name = name;
    this.type = type;
    this.value = value;
    this.modificationDate = modificationDate;

    this.inputVariableOpts = [];
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
  }

  get modificationDate(): number {
    return this._modificationDate;
  }

  set modificationDate(value: number) {
    this._modificationDate = value;
  }

  get inputVariableOpts(): {value: boolean, name: string}[] {
    return this._inputVariableOpts;
  }

  set inputVariableOpts(value: {value: boolean, name: string}[]) {
    this._inputVariableOpts = value;
  }

  isBoolean(): boolean {
    return this.inputVariableOpts.length > 0;
  }

  getFormatedValue(): string {
    if (this.isBoolean()) {
      if (typeof this.value === 'boolean') {
        let value = this.inputVariableOpts.find(o => o.value === this.value);
        return  value ? value.name : null;
      }
      else if (typeof this.value === 'string') {
        let value = this.inputVariableOpts.find(o => o.value.toString() === this.value);
        return  value ? value.name : null;
      }
    }
    return this.value;
  }

}

export class BPMProcessType {
  private _processId: string;
  private _processName: string;
  private _processVersion: string;
  private _containerId: string;
  private _activeFlg: string;
  private _createdBy: string;
  private _createdDt: string;
  private _modifiedBy: string;
  private _modifiedDt: string;

  constructor(processId?:string, processName?:string, processVersion?:string, containerId?:string, activeFlg?:string,
              createdBy?:string, createdDt?:string, modifiedBy?:string, modifiedDt?:string){

    this.processId = processId;
    this.processName = processName;
    this.processVersion = processVersion;
    this.containerId = containerId;
    this.activeFlg = activeFlg;
    this.createdBy = createdBy;
    this.createdDt = createdDt;
    this.modifiedBy = modifiedBy;
    this.modifiedDt = modifiedDt;
  }

  get processId(): string {
    return this._processId;
  }

  set processId(value: string) {
    this._processId = value;
  }

  get processName(): string {
    return this._processName;
  }

  set processName(value: string) {
    this._processName = value;
  }

  get processVersion(): string {
    return this._processVersion;
  }

  set processVersion(value: string) {
    this._processVersion = value;
  }

  get containerId(): string {
    return this._containerId;
  }

  set containerId(value: string) {
    this._containerId = value;
  }

  get activeFlg(): string {
    return this._activeFlg;
  }

  set activeFlg(value: string) {
    this._activeFlg = value;
  }

  get createdBy(): string {
    return this._createdBy;
  }

  set createdBy(value: string) {
    this._createdBy = value;
  }

  get createdDt(): string {
    return this._createdDt;
  }

  set createdDt(value: string) {
    this._createdDt = value;
  }

  get modifiedBy(): string {
    return this._modifiedBy;
  }

  set modifiedBy(value: string) {
    this._modifiedBy = value;
  }

  get modifiedDt(): string {
    return this._modifiedDt;
  }

  set modifiedDt(value: string) {
    this._modifiedDt = value;
  }

}

export class BPMNode {
  private _nodeInstanceId: number;
  private _nodeName: string;
  private _processInstanceId: number;
  private _containerId: string;
  private _startDate: number;
  private _nodeId: string;
  private _nodeType: string;
  private _nodeCompleted: boolean;
  private _usedVariables: BPMVariable[];

  constructor(nodeInstanceId?: number, nodeName?: string, processInstanceId?: number, containerId?: string, startDate?: number,
              nodeId?: string, nodeType?: string, nodeCompleted?: boolean) {

    this.nodeInstanceId = nodeInstanceId;
    this.nodeName = nodeName;
    this.processInstanceId = processInstanceId;
    this.containerId = containerId;
    this.startDate = startDate;
    this.nodeId = nodeId;
    this.nodeType = nodeType;
    this.nodeCompleted = nodeCompleted;
    this.usedVariables = [];
  }

  get nodeInstanceId(): number {
    return this._nodeInstanceId;
  }

  set nodeInstanceId(value: number) {
    this._nodeInstanceId = value;
  }

  get nodeName(): string {
    return this._nodeName;
  }

  set nodeName(value: string) {
    this._nodeName = value;
  }

  get processInstanceId(): number {
    return this._processInstanceId;
  }

  set processInstanceId(value: number) {
    this._processInstanceId = value;
  }

  get containerId(): string {
    return this._containerId;
  }

  set containerId(value: string) {
    this._containerId = value;
  }

  get startDate(): number {
    return this._startDate;
  }

  set startDate(value: number) {
    this._startDate = value;
  }

  get nodeId(): string {
    return this._nodeId;
  }

  set nodeId(value: string) {
    this._nodeId = value;
  }

  get nodeType(): string {
    return this._nodeType;
  }

  set nodeType(value: string) {
    this._nodeType = value;
  }

  get nodeCompleted(): boolean {
    return this._nodeCompleted;
  }

  set nodeCompleted(value: boolean) {
    this._nodeCompleted = value;
  }

  get usedVariables(): BPMVariable[] {
    return this._usedVariables;
  }

  set usedVariables(value: BPMVariable[]) {
    this._usedVariables = value;
  }

}
