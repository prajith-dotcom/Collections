import {Attribute} from "./attribute";

export class CampaignAttribute extends Attribute {
  private _defaultValue: any[];

  get defaultValue(): any[] {
    return this._defaultValue;
  }

  set defaultValue(value: any[]) {
    this._defaultValue = value;
  }
}
