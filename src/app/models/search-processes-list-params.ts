import {BPMProcessType} from "./bpm-case";

export class SearchProcessesListParams {
  ProcessType: BPMProcessType;

  clone(): SearchProcessesListParams  {
    let ret = new SearchProcessesListParams();
    ret.ProcessType = this.ProcessType;
    return ret;
  }

}
