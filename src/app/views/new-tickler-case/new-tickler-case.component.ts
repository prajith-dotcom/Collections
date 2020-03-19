import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DataService} from "../../services/data.service";
import {ProcessCase} from "../../models/process-case";
import {UserFeedbackService} from "../../services/user-feedback.service";
import {GlobalStateService} from "../../services/global-state.service";
import {TicklerType} from "../../models/tickler-types";
import {TicklerAttribute} from "../../models/tickler-attribute";
import {ProcessCaseTickler} from "../../models/process-case-tickler";
import {TicklerAttributeMap} from "../../models/tickler-attribute-map";
import {TicklerTypeMap} from "../../models/tickler-type-map";
import {Code} from "../../models/code";
import {Pagination} from "../../models/pagination";
import {DatepickerComponent} from "../datepicker/datepicker.component";
import * as moment from 'moment';
import {Moment} from "moment";
import {CoinDateTransformPipe} from "../../pipes/coin-date-transform.pipe";
import {Account} from "../../models/account";

@Component({
  selector: 'new-tickler-case',
  templateUrl: './new-tickler-case.component.html',
  styleUrls: ['./new-tickler-case.component.css']
})
export class NewTicklerCaseComponent implements OnInit {
  @Input() processCases: ProcessCase[] = null;
  @Input() processCaseTicklers: ProcessCaseTickler[] = null;
  @Input() currentProcessCase: ProcessCase = null;
  @Input() ticklerAttributes: TicklerAttribute[] = null;
  @Input() ticklerTypes: TicklerType[] = null;
  @Input() isAccountPage: boolean = false;
  @Input() account: Account;
  @Output() onCancelCaseTickler = new EventEmitter<boolean>();
  @Output() onAddCaseTickler = new EventEmitter<ProcessCaseTickler>();
  private model: ProcessCaseTickler = new ProcessCaseTickler();
  private waitingResponse: boolean = false;
  private _attributeValues = {};
  private mandatoryValues = [];
  private waitingAttributesToLoad: boolean = false;
  private waitingTicklerTypesToLoad: boolean = false;
  private selectedTicklerType: TicklerType = null;
  private ticklerTypeDate: Moment = null;

  attributesToLoad: TicklerAttribute[] = null;
  comboTicklerTypes: TicklerType[] = [];
  lovValuesToCode: any  = {};

  @ViewChild('followUpDate') private _workDt: DatepickerComponent;

  constructor(private _dataService: DataService, private _userFeedbackService: UserFeedbackService,
              private _globalStateService: GlobalStateService, private _cdr: ChangeDetectorRef,
              private _datePipe: CoinDateTransformPipe
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.ticklerTypes && this.ticklerTypes && this.ticklerTypes.length > 0 && this.model.ticklerTypeCode == null) {
      this.loadTicklerTypesMap(this.ticklerTypes);
    }
  }

  loadListOfValues(att: TicklerAttribute){
    this._dataService.getLovValues(att.lovCode).then(res =>{
      let ret: Code[] = [];
      for (let lo of res){
        let co = new Code();
        co.code = lo.valueCode;
        co.name = lo.valueName;
        co.description = lo.valueDescription;
        if(lo.isActive){
          ret.push(co);
        }
      }
      this.lovValuesToCode[att.lovCode] = ret;
      ret.map(i=>i.name = i.code + " - " + i.name);

    }).catch(err=>{
      console.log("Error retrieving LOV");
      console.log(err);
    })
  }

  /*
  * -find on ticklerTypesMap if the fromId and the tickler type selected id are equal
  * - find the destination tickler types of tickler type selected:
  *     - if core: puts an '*' and push on comboTicklerTypes
  *
  *     - else puts on noCoreDestinationTicklerTypes
  */
  setTicklerTypesDestinationCoreToCombo(ticklerMaps: TicklerTypeMap[]) {
    for (let i in ticklerMaps) {
      let tm = ticklerMaps[i];
      let targetTicklerType = this.ticklerTypes.find(tt => tt.ticklerCode == tm.ticklerToCode);
      if (targetTicklerType.isCore) {
        this.comboTicklerTypes.push(targetTicklerType);
      }
    }
  }

  /*
  * filter by no core tickler types
  * and through the noCoreTicklerTypes
  * and push on the array combo
  */
  setTicklerTypesNoCoreToCombo(){
    for (let tt of this.ticklerTypes) {
      if (!tt.isCore) {
        this.comboTicklerTypes.push(tt);
      }
    }
  }

  /*
  * loads the tickler types map --> needs the the current tickler type selected (core)
  * calls to the functions that allow that the combo is written correctly
  */
  loadTicklerTypesMap(ticklerTypes: TicklerType[]) {
    this.waitingTicklerTypesToLoad = true;
    let lastCorePagination: Pagination = new Pagination(0, 1);
    this._dataService.getProcessCaseTicklers(this.currentProcessCase, lastCorePagination, true).then(res => {
      if (res != null && res.length > 0) {
        let lastCore: TicklerType = ticklerTypes.find(tType => tType.ticklerCode == res[0].ticklerTypeCode);

        this._dataService.getTicklerTypesMap(lastCore).then(res => {
          this.setTicklerTypesDestinationCoreToCombo(res);
          this.setTicklerTypesNoCoreToCombo();
          // We select the first TicklerType of the combo
          this.ticklerTypeSelected(this.comboTicklerTypes.length == 0 ? null : this.comboTicklerTypes[0]);
          this.waitingTicklerTypesToLoad = false;
        }).catch(err => {
          this.waitingTicklerTypesToLoad = false;
          console.log("Error retrieving tickler types map", err);
        })
      }
    }).catch(err => {
      this.waitingTicklerTypesToLoad = true;
      console.log("Error retrieving last core case tickler");
      console.log(err)
    });
  }

  //return to the table
  cancel() {
    this.onCancelCaseTickler.emit();
  }

  //add a new case tickler --> return to the table
  add(model: ProcessCaseTickler) {
    this.waitingResponse = true;
    this.model.ticklerTypeCode = this.selectedTicklerType.ticklerCode;
    //if we not write the no mandatory attribute --> not send to the  data service
    for (let code in this._attributeValues) {
      let att = this._attributeValues[code];
      if (att.length == 0) {
        delete this._attributeValues[code];
      }
    }
    model.followUpDays = this._workDt.getDateAsMoment().startOf('day').diff(moment(new Date()).startOf('day'), 'days');
    model.document = this._fileInBase64;
    this._dataService.addCaseTickler(this.currentProcessCase, model, this._attributeValues, this._globalStateService.loggedAgent).then(() => {
      this.waitingResponse = false;
      this.onAddCaseTickler.emit();
      this._userFeedbackService.handleSuccess("Case tickler added");
    }).catch(err => {
      this.waitingResponse = false;
      this._userFeedbackService.handleError("Error adding new case tickler", err);
    })
  }

  //load the tickler attributes according its tickler type selected
  loadCorrespondentTicklerAttributes(source: TicklerAttributeMap[]) {
    this.attributesToLoad = [];
    for (let atm of source) {
      let a = this.ticklerAttributes.find(att => att.code == atm.code);
      if (a && a.activeFlag) {
        a.mandatoryFlag = atm.mandatoryFlag;
        this.attributesToLoad.push(a);
        if(a.lovCode != ""){
          this.loadListOfValues(a);
        }
      }
    }
  }

  //when we change the tickler type on the combo we load the tickler maps to know later the tickler attributes
  ticklerTypeSelected(ticklerType: TicklerType) {
    this.selectedTicklerType = ticklerType;
    this.loadTicklerAttributesMap(ticklerType);
    this._attributeValues = {};
    this.ticklerTypeDate = moment(new Date()).add(ticklerType.followUpDays, "day");
  }

  /*
  * load tickler attributes map:
  *
  * - needs the current tickler type
  * - load correspondent tickler attributes --> knows the attributes that must be to load according the code selected
  */
  loadTicklerAttributesMap(source: TicklerType) {
    this.waitingAttributesToLoad = true;
    this._dataService.getTicklerAttributesMap(source).then(res => {
      this.waitingAttributesToLoad = false;
      this.loadCorrespondentTicklerAttributes(res);
    })
  }

  private addAttribute(ta: TicklerAttribute, val: string) {
    this.addAttributeByCode(ta.code, val, ta.isArray);
    let index = this.mandatoryValues.indexOf(ta.id);
    if (ta.mandatoryFlag && index == -1) {
      this.mandatoryValues.push(ta.id);
    }
  }

  //return if we can add or not
  private canAddValues(): boolean {
    if (this.attributesToLoad) {
      let mandatoryAttributesToLoad = this.attributesToLoad.filter(at => at.mandatoryFlag);
      //compare the lengths
      if (mandatoryAttributesToLoad) {
        return this.mandatoryValues.length === mandatoryAttributesToLoad.length &&
          this._workDt && !this._workDt.hasErrors() && !this._workDt.isEmpty();
      }
    }
    return false;
  }

  private addAttributeByCode(cd: string, val: string, appendValue = true) {
    if (!appendValue) {
      this.getAttributeValuesByCode(cd).length = 0;
    }
    this.getAttributeValuesByCode(cd).push(val);
  }

  private getAttributeValuesByCode(cd: string): string[] {
    let atv = this._attributeValues[cd];
    if (atv == undefined) {
      atv = [];
      this._attributeValues[cd] = atv;
      this._cdr.detectChanges();
    }
    return atv;
  }

  private getAttributeValues(ta: TicklerAttribute): string[] {
    return this.getAttributeValuesByCode(ta.code);
  }

  private removeAttribute(ca: TicklerAttribute, val: string) {
    this._attributeValues[ca.code] = this._attributeValues[ca.code].filter(v => v != val);
    //remove on the arrays the mandatory and not mandatory attributes when click on remove
    let index = this.mandatoryValues.indexOf(ca.id);
    if (index != -1 && this._attributeValues[ca.code].length === 0) {
      this.mandatoryValues.splice(index, 1);
    }
  }

  pdfOptions = [
    {name: "Adverse action letter - Bankruptcy", callback: (doc) => this.fillDocLetter(doc), doc: "AdverseLetter.pdf"}
  ];

  currOpt = this.pdfOptions[0];
  generatingDoc: boolean = false;
  docGenerated: boolean = false;
  private _blob = null;
  private _fileInBase64: string = null;

  generatePdf() {
    this.generatingDoc = true;

    // @ts-ignore
    const doc = new PDFDocument({size: 'letter', margin: 50});
    // @ts-ignore
    const stream = doc.pipe(blobStream());

    this.currOpt.callback(doc);

    doc.end();
    stream.on('finish', () => {
      this._blob = stream.toBlob("application/pdf");
      this.getBase64(this._blob);
    });
  }

  private getBase64(blob: Blob) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    reader.onload = (function () {
      this.generatingDoc = false;
      this.docGenerated = true;
      this._fileInBase64 = reader.result.replace(/^data:.+;base64,/, '');
    }).bind(this);

    reader.onerror = (function (error) {
      console.log('Error: ', error);
      this.generatingDoc = false;
    }).bind(this);
  }

  openPdf() {
    window.open(URL.createObjectURL(this._blob));
  };

  removePdf() {
    this.docGenerated = false;
    this._fileInBase64 = null;
    this._blob = null;
  }

  private fillDocLetter(doc) {
    const baseSize = 12;
    const baseIndent = 30;

    doc.fontSize(10).text(
      'IBERIABANK\n4010 W. Congress Street, Suite 106\nP. O. Box 52747\nLafayette, LA 70505',
      {
        align: 'center'
      });

    doc.moveDown();
    doc
      .font('Times-Roman', baseSize)
      .text('Borrower: ', {continued:true})
      .font('Times-Bold', baseSize)
      .text(this.account.customer.mainContact.completeName);
    doc
      .font('Times-Roman', baseSize)
      .text('Address1: ', {continued:true})
      .font('Times-Bold', baseSize)
      .text(this.account.customer.mainAddress.streetAddress1);
    doc
      .font('Times-Roman', baseSize)
      .text('Address2: ', {continued:true})
      .font('Times-Bold', baseSize)
      .text(this.account.customer.mainAddress.streetAddress2 ? this.account.customer.mainAddress.streetAddress2 : this.account.customer.mainAddress.streetAddress3);
    doc
      .font('Times-Roman', baseSize)
      .text('Date: ', {continued:true})
      .font('Times-Bold', baseSize)
      .text(this._datePipe.transform(new Date().toString(), "STD_DATE"));

    doc
      .moveDown()
      .font('Times-Bold', baseSize)
      .text('NOTICE OF ACTION TAKEN AND STATEMENT OF REASONS ', {align:'center'});

    doc
      .moveDown()
      .font('Times-Roman', baseSize)
      .text('DESCRIPTION OF ACCOUNT, TRANSACTION, OR REQUESTED CREDIT:');

    doc
      .font('Times-Roman', baseSize)
      .text('Line of credit: ', {continued:true, indent: baseIndent})
      .font('Times-Bold', baseSize)
      .text(this.account.accountId);

    doc
      .font('Times-Roman', baseSize)
      .text('Account number: ', {continued:true, indent: baseIndent})
      .font('Times-Bold', baseSize)
      .text(this.account.accountId);

    doc
      .moveDown()
      .font('Times-Roman', baseSize)
      .text('DESCRIPTION OF ACTINO TAKEN:');

    doc
      .font('Times-Bold', baseSize)
      .text('We regret that it is necessary to terminate your line of credit.',  {indent: baseIndent});

    doc
      .moveDown()
      .font('Times-Roman', baseSize)
      .text('PRINCIPAL REASON(S) FOR ADVERSE ACTION CONCERNING CREDIT:');
    doc
      .font('Times-Roman', baseSize)
      .text('Reason 1: ', {continued:true, indent: baseIndent})
      .font('Times-Bold', baseSize)
      .text('Bankruptcy');

    doc
      .moveDown()
      .font('Times-Roman', baseSize)
      .text('DISCLOSURE OF USE OF INFORMATION OBTAINED FROM AN OUTSIDE SOURCE');

    doc.list([
      'Our credit decision was based in whole or in part on information obtained in a report from the consumer reporting agency listed below. You have a right under the Fair Credit Reporting Act to know the information contained in your credit file at the consumer reporting agency. The reporting agency played no part in our decision and is unable to supply specific reasons why we have denied credit to you. You also have a right to a free copy of your report from the reporting agency, if you request it no later than 60 days after you receive this notice. In addition, if you find that any information contained in the report you receive is inaccurate orincomplete, you have the right to dispute the matter with the reporting agency.'])
      .text('Experian P. O. Box 2104 701 Experian Parkway Allen, TX 75002-2104 1-888-397-3742',  {underline: true, indent: 14});

    doc
      .font('Times-Roman', baseSize)
      .list([
        'Our credit decision was based in whole or in part on information obtained from an affiliate or from an outside source other than a consumer reporting agency. Under the Fair Credit Reporting Act, you have the right to make a written request, no later than sixty (60) days after you receive this notice, for disclosure of the nature of this information.',
        'If you have any questions regarding this notice, you should contact: IBERIABANK, P. O. Box 52747, Lafayette, LA 70505 – Phone number 1-800-682-3231'
      ]);

    doc
      .moveDown()
      .font('Times-Roman', baseSize)
      .text('NOTICE; The federal Equal Credit Opportunity Act prohibits creditors from discriminating against credit applicants on the basis of race, color, religion, national origin, sex, marital status, age (provided the applicant has the capacity to enter into a binding contract); because all or part of the applicant’s income derives from any public assistance program; or because the applicant has in good faith exercised any right under the Consumer Credit Protection Act. The federal agency that administers compliance with this law concerning this creditor is the ',
        {continued: true}
      )
      .font('Times-Bold', baseSize)
      .text(' Bureau of Consumer Financial Protection, 1700 G Street N W, Washington, D. C. 2006');

    doc
      .moveDown()
      .font('Times-Roman', baseSize)
      .text('Account officer: ', {continued:true})
      .font('Times-Bold', baseSize)
      .text('Raven Spivey - NMLS # 1199127');
    doc
      .font('Times-Roman', baseSize)
      .text('IBERIABANK ');

  }
}
