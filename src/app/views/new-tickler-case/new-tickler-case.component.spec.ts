import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicklerCaseComponent } from './new-tickler-case.component';
import {FormsModule} from "@angular/forms";
import {WaitingBackendComponent} from "../waiting-backend/waiting-backend.component";
import {DataService} from "../../services/data.service";
import {BackendCommsService} from "../../services/backend-comms.service";
import {HttpModule} from "@angular/http";
import {UserFeedbackService} from "../../services/user-feedback.service";
import {DatePipe} from "@angular/common";
import {BooleanToStringPipe} from "../../pipes/boolean-to-string.pipe";
import {CiscoCommsService} from "../../services/cisco-comms.service";
import {GlobalStateService} from "../../services/global-state.service";
import {RouterTestingModule} from "@angular/router/testing";
import {CampaignAttributeEditionComponent} from "../campaign-attribute-edition/campaign-attribute-edition.component";
import {CoinNumberInputComponent} from "../coin-number-input/coin-number-input.component";
import {DatepickerComponent} from "../datepicker/datepicker.component";
import {CoinNumberInputErrorsComponent} from "../coin-number-input-errors/coin-number-input-errors.component";
import {OwlDateTimeModule} from "ng-pick-datetime";
import {OwlMomentDateTimeModule} from "ng-pick-datetime-moment";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BooleanToStringDuePipe, BooleanToStringOrderPipe} from "../../pipes/boolean-to-string-order.pipe";
import {ConsentPipeCorrectConversion} from "../../pipes/consent.pipe";
import {TelephonePipe} from "../../pipes/telephone.pipe";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {CoinDateTransformPipe} from "../../pipes/coin-date-transform.pipe";


describe('NewTicklerCaseComponent', () => {
  let component: NewTicklerCaseComponent;
  let fixture: ComponentFixture<NewTicklerCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpClientTestingModule, FormsModule, RouterTestingModule,  OwlDateTimeModule, OwlMomentDateTimeModule,
        BrowserAnimationsModule, ToastrModule.forRoot() ],
      declarations: [ NewTicklerCaseComponent, WaitingBackendComponent, CampaignAttributeEditionComponent, CoinNumberInputComponent,
        DatepickerComponent, CoinNumberInputErrorsComponent ],
      providers: [ DataService, BackendCommsService, UserFeedbackService, DatePipe, BooleanToStringPipe, CiscoCommsService,
        GlobalStateService, BooleanToStringOrderPipe, BooleanToStringDuePipe, ConsentPipeCorrectConversion,
        TelephonePipe, ToastrService, CoinDateTransformPipe ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTicklerCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
