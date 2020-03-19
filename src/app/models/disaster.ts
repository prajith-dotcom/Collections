import {Moment} from "moment";

export class Disaster {
  private _id: string;
  private _disasterNumber: number;
  private _state: string;
  private _declarationDate: Moment;
  private _fyDeclared: number;
  private _disasterType: string;
  private _incidentType: string;
  private _title: string;
  private _incidentBeginDate: Moment;
  private _incidentEndDate: Moment;
  private _declaredCountyArea: string;
  private _placeCode: string;
  private _disasterCloseOutDate: Moment;

  constructor(id?:string, disasterNumber?: number, state?: string, declarationDate?: Moment, fyDeclared?: number, disasterType?: string,
              incidentType?: string, title?: string, incidentBeginDate?: Moment, incidentEndDate?: Moment, declaredCountyArea?: string,
              placeCode?: string, disasterCloseOutDate?: Moment) {
    this._id = id;
    this._disasterNumber = disasterNumber;
    this._state = state;
    this._declarationDate = declarationDate;
    this._fyDeclared = fyDeclared;
    this._disasterType = disasterType;
    this._incidentType = incidentType;
    this._title = title;
    this._incidentBeginDate = incidentBeginDate;
    this._incidentEndDate = incidentEndDate;
    this._declaredCountyArea = declaredCountyArea;
    this._placeCode = placeCode;
    this._disasterCloseOutDate = disasterCloseOutDate;
  }

  get id(): string {
    return this._id;
  }

  get disasterNumber(): number {
    return this._disasterNumber;
  }

  get state(): string {
    return this._state;
  }

  get declarationDate(): Moment {
    return this._declarationDate;
  }

  get fyDeclared(): number {
    return this._fyDeclared;
  }

  get disasterType(): string {
    return this._disasterType;
  }

  get incidentType(): string {
    return this._incidentType;
  }

  get title(): string {
    return this._title;
  }

  get incidentBeginDate(): Moment {
    return this._incidentBeginDate;
  }

  get incidentEndDate(): Moment {
    return this._incidentEndDate;
  }

  get declaredCountyArea(): string {
    return this._declaredCountyArea;
  }

  get placeCode(): string {
    return this._placeCode;
  }

  get disasterCloseOutDate(): Moment {
    return this._disasterCloseOutDate;
  }
}
