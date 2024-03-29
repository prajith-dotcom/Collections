import {Account} from "./account";
import {CustomerNote} from "./customer-note";
import {Phone} from "./phone";
import {Person} from "./person";
import {Address} from "./address";
import {CallRecord} from "./call-record";
import {MemoNote} from "./memo-note";
import {AddressVerification, VerificationStatus} from "./addressVerification";
import {EmailListVerification} from "./emailListVerification";
import {PhoneListVerification} from "./phoneListVerification";


export class Customer {

  private _id: string;
  private _cifNo: string;
  private _taxId: string;
  private _socialSecurityNumber: string;

  private _mainContact: Person;
  private _mainAddress: Address;

  private _emailList: string[];
  private _accountNumber: string;
  private _phoneList: Phone[];
  private _phoneLineType: string;
  private _languageIndicator: string;
  private _market: string;
  private _specialMessageFlag: boolean;
  private _employmentInfo: string;

  private _accounts: Account[] = null;
  private _notes: CustomerNote[] = null;
  private _alerts: CustomerNote[] = null;
  private _callRecords: CallRecord[] = null;

  private _coBorrowers: Customer[] = null;
  private _todayContacts: number = null;
  private _hasConsent: boolean;
  private _callNotes: MemoNote[] = null;
  private _birthDate: string = null;

  private _lastAddressVerification: AddressVerification = null;
  private _lastEmailVerification: EmailListVerification = null;
  private _lastPhoneVerification: PhoneListVerification = null;


  constructor(id?: string, cifno?: string, taxId?: string, socialSecurityNumber?: string, mainContact?: Person, mainAddress?: Address,
              emailList?: string[], accountNumber?: string, phoneList?: Phone[], phoneLineType?: string, languageIndicator?: string,
              market?: string,specialMessageFlag?:boolean, employmentInfo?: string, todayContacts?: number, hasConsent?:boolean, accounts?: Account[],
              notes?: CustomerNote[], alerts?: CustomerNote[], callRecords?: CallRecord[], coBorrowers?: Customer[], birthDate?: string){

    this.id = id;
    this.cifNo = cifno;
    this.taxId = taxId;
    this.socialSecurityNumber = socialSecurityNumber;
    this.mainContact = mainContact;
    this.mainAddress = mainAddress;
    this.accountNumber = accountNumber;
    this.phoneLineType = phoneLineType;
    this.languageIndicator = languageIndicator;
    this.market = market;
    this.specialMessageFlag = specialMessageFlag;
    this.employmentInfo = employmentInfo;
    this.todayContacts = todayContacts;
    this.hasConsent = hasConsent;
    this.accounts = accounts;
    this.notes = notes;
    this.alerts = alerts;
    this.callRecords = callRecords;
    this.coBorrowers = coBorrowers;
    this.birthDate = birthDate;

    this.emails = emailList;
    this.phones = phoneList;

  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get cifNo(): string {
    return this._cifNo;
  }

  set cifNo(value: string) {
    this._cifNo = value;
  }

  get socialSecurityNumber(): string {
    return this._socialSecurityNumber;
  }

  set socialSecurityNumber(value: string) {
    this._socialSecurityNumber = value;
  }

  get accounts(): Account[] {
    return this._accounts;
  }

  set accounts(value: Account[]){
    this._accounts = value;
  }

  get taxId(): string {
    return this._taxId;
  }

  set taxId(value: string) {
    this._taxId = value;
  }

  addAccount(acc: Account) {
    if (this._accounts == null) {
      this._accounts = [];
    }
    this._accounts.push(acc);
  }

  get notes(): CustomerNote[] {
    return this._notes;
  }

  set notes(value: CustomerNote[]){
    this._notes = value;
  }

  addNote(note: CustomerNote) {
    if (this._notes == null) {
      this._notes = [];
    }
    this._notes.push(note);
  }

  resetNotes() {
    this._notes = [];
  }

  get alerts(): CustomerNote[] {
    return this._alerts;
  }

  set alerts(value: CustomerNote[]){
    this._alerts = value;
  }

  addAlert(note: CustomerNote) {
    if (this._alerts == null) {
      this._alerts = [];
    }
    this._alerts.push(note);
  }

  resetAlerts() {
    this._alerts = [];
  }

  get callRecords(): CallRecord[] {
    return this._callRecords;
  }

  set callRecords(value: CallRecord[]){
    this._callRecords = value;
  }

  addCallRecord(call: CallRecord) {
    if (this._callRecords == null) {
      this._callRecords = [];
    }
    this._callRecords.push(call);
  }

  resetCalls() {
    this._callRecords = [];
  }

  get mainContact(): Person {
    return this._mainContact;
  }

  set mainContact(value: Person) {
    this._mainContact = value;
  }

  get mainAddress(): Address {
    return this._mainAddress;
  }

  set mainAddress(value: Address) {
    this._mainAddress = value;
  }

  get emails(): string[] {
    return this._emailList;
  }

  set emails(value: string[]) {
    this._emailList = value;
  }

  addEmail(email: string) {
    if (this._emailList == null) {
      this._emailList = [];
    }
    this._emailList.push(email);
  }

  setEmptyeMails() {
    this._emailList = [];
  }

  get phones(): Phone[] {
    return this._phoneList;
  }

  set phones(value: Phone[]){
    this._phoneList = value;
  }

  addPhone(email: Phone) {
    if (this._phoneList == null) {
      this._phoneList = [];
    }
    this._phoneList.push(email);
  }

  setEmptyPhones() {
    this._phoneList = [];
  }

  get accountNumber(): string {
    return this._accountNumber;
  }

  set accountNumber(value: string) {
    this._accountNumber = value;
  }

  get phoneLineType(): string {
    return this._phoneLineType;
  }

  set phoneLineType(value: string) {
    this._phoneLineType = value;
  }

  get languageIndicator(): string {
    return this._languageIndicator;
  }

  set languageIndicator(value: string) {
    this._languageIndicator = value;
  }

  get market(): string {
    return this._market;
  }

  set market(value: string) {
    this._market = value;
  }

  get specialMessageFlag(): boolean {
    return this._specialMessageFlag;
  }

  set specialMessageFlag(value: boolean) {
    this._specialMessageFlag = value;
  }

  get employmentInfo(): string {
    return this._employmentInfo;
  }

  set employmentInfo(value: string) {
    this._employmentInfo = value;
  }

  get coBorrowers(): Customer[] {
    return this._coBorrowers;
  }

  set coBorrowers(value: Customer[]){
    this._coBorrowers = value;
  }

  get todayContacts(): number{
    return this._todayContacts;
  }

  set todayContacts(value: number){
    this._todayContacts = value;
  }

  addCoBorrower(cust: Customer) {
    if (this._coBorrowers == null) {
      this._coBorrowers = [];
    }
    this._coBorrowers.push(cust);
  }

  resetCoBorrowers() {
    this._coBorrowers = [];
  }

  get hasConsent(): boolean{
    return this._hasConsent;
  }

  set hasConsent(value: boolean){
    this._hasConsent = value;
  }

  get callNotes(): MemoNote[] {
    return this._callNotes;
  }

  set callNotes(value: MemoNote[]) {
    this._callNotes = value;
  }

  addCallNote(note: MemoNote) {
    if (this._callNotes == null) {
      this._callNotes = [];
    }
    this._callNotes.push(note);
  }

  resetCallNotes() {
    this._callNotes = [];
  }

  get birthDate(): string {
    return this._birthDate;
  }

  set birthDate(value: string) {
    this._birthDate = value;
  }

  get lastAddressVerification(): AddressVerification {
    return this._lastAddressVerification;
  }

  set lastAddressVerification(value: AddressVerification) {
    this._lastAddressVerification = value;
  }

  get lastEmailVerification(): EmailListVerification {
    return this._lastEmailVerification;
  }

  set lastEmailVerification(value: EmailListVerification) {
    this._lastEmailVerification = value;
  }

  get lastPhoneVerification(): PhoneListVerification {
    return this._lastPhoneVerification;
  }

  set lastPhoneVerification(value: PhoneListVerification) {
    this._lastPhoneVerification = value;
  }

  /***** Functions to control the customer adresses verification ****/
  hasValidAddressVerification(): boolean {
    // The verification is valid for 30 days
    return this.lastAddressVerification &&
      this.lastAddressVerification.status == VerificationStatus.Verified &&
      new Date().getTime() - this.lastAddressVerification.createdDate.getTime() < (30 * 24 * 60 * 60 * 1000);
  }

  needsAddressVerification(): boolean {
    return !this.lastAddressVerification ||
      (this.lastAddressVerification.status == VerificationStatus.Verified && !this.hasValidAddressVerification());
  }

  addressIsModifying(): boolean {
    return this.lastAddressVerification && this.lastAddressVerification.status == VerificationStatus.Modify;
  }

  addressesAreEqual() {
    return (
      this.mainAddress.streetAddress1 === this.lastAddressVerification.newAddress.streetAddress1 &&
      this.mainAddress.streetAddress2 === this.lastAddressVerification.newAddress.streetAddress2 &&
      this.mainAddress.streetAddress3 === this.lastAddressVerification.newAddress.streetAddress3 &&
      this.mainAddress.city === this.lastAddressVerification.newAddress.city &&
      this.mainAddress.stateCode === this.lastAddressVerification.newAddress.stateCode &&
      this.mainAddress.postalCode === this.lastAddressVerification.newAddress.postalCode
    );
  }
  /***********************************************************************/

  /***** Functions to control the customer phones verification ****/
  hasValidPhoneVerification(): boolean {
    // The verification is valid for 30 days
    return this.lastPhoneVerification &&
      this.lastPhoneVerification.status == VerificationStatus.Verified &&
      new Date().getTime() - this.lastPhoneVerification.createdDate.getTime() < (30 * 24 * 60 * 60 * 1000);
  }

  phoneIsModifying(): boolean {
    return this.lastPhoneVerification && this.lastPhoneVerification.status == VerificationStatus.Modify;
  }

  needsPhoneVerification(): boolean {
    return (!this.lastPhoneVerification ||
      (this.lastPhoneVerification.status == VerificationStatus.Verified && !this.hasValidPhoneVerification()));
  }

  phonesAreEqual() {
    if (this.phones.length !== this.lastPhoneVerification.newPhones.length) return false;
    for (let cp of this.phones) {
      if (!this.lastPhoneVerification.newPhones.find(p => cp.number === p.number && cp.type === p.type)) return false;
    }
    return true;
  }
  /***********************************************************************/

  /***** Functions to control the customer emails verification ****/
  hasValidEmailVerification(): boolean {
    // The verification is valid for 30 days
    return this.lastEmailVerification &&
      this.lastEmailVerification.status == VerificationStatus.Verified &&
      new Date().getTime() - this.lastEmailVerification.createdDate.getTime() < (30 * 24 * 60 * 60 * 1000);
  }

  needsEmailVerification(): boolean {
    return (!this.lastEmailVerification ||
      (this.lastEmailVerification.status == VerificationStatus.Verified && !this.hasValidEmailVerification()));
  }

  emailIsModifying(): boolean {
    return this.lastEmailVerification && this.lastEmailVerification.status == VerificationStatus.Modify;
  }

  emailsAreEqual() {
    if (this.emails.length !== this.lastEmailVerification.newEmails.length) return false;
    for (let ce of this.emails) {
      if (this.lastEmailVerification.newEmails.indexOf(ce) < 0) return false;
    }
    return true;
  }
  /***********************************************************************/
}
