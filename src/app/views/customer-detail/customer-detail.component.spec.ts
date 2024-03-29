import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { CustomerDetailComponent } from './customer-detail.component';
import {WaitingBackendComponent} from "../waiting-backend/waiting-backend.component";
import {CoinCurrencyPipe} from "../../pipes/coin-currency.pipe";
import {TelephonePipe, TelephoneTypePipe} from "../../pipes/telephone.pipe";
import {CoinDateTransformPipe} from "../../pipes/coin-date-transform.pipe";
import {CustomerConsentComponent} from "../customer-consent/customer-consent.component";
import {ComponentLoaderFactory, PopoverConfig, PopoverModule, PositioningService} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import {ConsentPipe} from "../../pipes/consent.pipe";
import {NgbModal, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgbModalStack} from "@ng-bootstrap/ng-bootstrap/modal/modal-stack";
import {DataService} from "../../services/data.service";
import {HttpModule} from "@angular/http";
import {UserFeedbackService} from "../../services/user-feedback.service";
import {DatePipe} from "@angular/common";
import {BooleanToStringPipe} from "../../pipes/boolean-to-string.pipe";
import {GlobalStateService} from "../../services/global-state.service";
import {RouterTestingModule} from "@angular/router/testing";
import {BooleanToStringOrderPipe} from "../../pipes/boolean-to-string-order.pipe";
import {By} from "@angular/platform-browser";
import {dataServiceMock} from "../../../test-utils/dataServiceMock";
import {userFeedbackMock} from "../../../test-utils/userFeedback";
import {globalStateServiceMock} from "../../../test-utils/globalStateServiceMock";
import {CustomerConsent} from "../../models/customer-consent";
import {Customer} from "../../models/customer";
import {AutodialConsentModalComponent} from "../autodial-consent-modal/autodial-consent-modal.component";

describe('CustomerDetailComponent', () => {
  let component: CustomerDetailComponent;
  let fixture: ComponentFixture<CustomerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ PopoverModule, FormsModule, NgbModule, HttpModule, RouterTestingModule ],
      declarations: [ CustomerDetailComponent, WaitingBackendComponent, CoinDateTransformPipe, CoinCurrencyPipe, TelephonePipe, TelephoneTypePipe,
                      CustomerConsentComponent, ConsentPipe, AutodialConsentModalComponent ],
      providers: [ NgbModal, NgbModalStack, { provide: DataService, useValue: dataServiceMock }, { provide: UserFeedbackService, useValue: userFeedbackMock }, DatePipe, BooleanToStringPipe,
                 { provide: GlobalStateService, useValue: globalStateServiceMock }, BooleanToStringOrderPipe, PopoverConfig, ComponentLoaderFactory, PositioningService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  function setValues(customer: Customer, modelHasConsent: boolean, customerHasConsent?: boolean){
    component.customer = customer;
    component.model = new CustomerConsent(1,"1", "",modelHasConsent, "note1", "Hak", "");
    if(customerHasConsent!=null){
      component.customer.hasConsent = customerHasConsent;
    }

    fixture.detectChanges();
  }

  function injectSpy(inject: any, method: string, value: any, isResolve: boolean){
    let i = fixture.debugElement.injector.get(inject);
    if(isResolve){
      return spyOn(i,method).and.returnValue(Promise.resolve(value));
    }else{
      return spyOn(i,method).and.returnValue(Promise.reject(value));

    }
  }

  function onClickEdit(){
    fixture.debugElement.query(By.css("i.edit.fas.fa-edit")).nativeElement.click();
    fixture.detectChanges();
  }

  function checkConsent(hasConsent: boolean){
    expect(component.customer.hasConsent).toEqual(hasConsent);
    expect(component.customer.hasConsent).toEqual(component.model.hasConsent);
  }

  function checkDataService(spy: any, hasConsent: boolean){
    expect(spy.calls.first().args).not.toBeNull();
    expect(spy.calls.first().args[0].hasConsent).toEqual(hasConsent);
  }

  function checkUserFeedbackService(spy: any, feedbackMessage: string){
    expect(spy.calls.first().args[0]).toEqual(feedbackMessage);

  }

  it('open modal consent', () => {

    injectSpy(DataService, "addCustomerConsent", 200, true);
    injectSpy(UserFeedbackService, "handleSuccess", 200, true);

    setValues(dataServiceMock.account8.customer, true);

    onClickEdit();
  });


  xit('add customer denied consent: Success', fakeAsync(() => {
    //data
    let spy = injectSpy(DataService, "addCustomerConsent", 200,true);
    let spy2 = injectSpy(UserFeedbackService, "handleSuccess", 200, true);

    setValues(dataServiceMock.account8.customer, true);

    checkConsent(true);

    onClickEdit();

    //arguments not null
    checkDataService(spy, false);

    //promise resolved
    checkUserFeedbackService(spy2, "New customer consent added");

    //data consent changes
    checkConsent(false);
  }));


  xit('add customer agreed consent: Success', fakeAsync(() => {
    //data
    let spy = injectSpy(DataService, "addCustomerConsent", 200, true);
    let spy2 = injectSpy(UserFeedbackService, "handleSuccess", 200, true);

    setValues(dataServiceMock.account8.customer, false, false);

    //init not open, consent false
    checkConsent(false);

    onClickEdit();

    //arguments not null
    checkDataService(spy, true);

    //promise resolved
    checkUserFeedbackService(spy2, "New customer consent added");

    //consent changes
    checkConsent(true);
  }));


  xit('add customer denied consent: Error', fakeAsync(() => {
    //data
    let spy = injectSpy(DataService, "addCustomerConsent", 400, false);
    let spy2 = injectSpy(UserFeedbackService, "handleError", 200, true);

    setValues(dataServiceMock.account8.customer, true);

    //modal init not open and consent true
    checkConsent(true);
    onClickEdit();

    //arguments not null
    checkDataService(spy, false);

    //not resolve the promise
    checkUserFeedbackService(spy2, "Error adding new customer consent");

    //consent changes (these changes are doing before resolve the promise)
    checkConsent(false);
  }));


  xit('add customer agreed consent: Error', fakeAsync(() => {
    //data
    let spy = injectSpy(DataService, "addCustomerConsent", 400, false);
    let spy2 = injectSpy(UserFeedbackService, "handleError", 200, true);

    setValues(dataServiceMock.account8.customer, false, false);

    //modal init not open and consent false
    checkConsent(false);

    onClickEdit();

    checkDataService(spy, true);

    //not resolve the promise
    checkUserFeedbackService(spy2, "Error adding new customer consent");

    //consent changes (these changes are doing before resolve the promise)
    checkConsent(true);
  }));


});
