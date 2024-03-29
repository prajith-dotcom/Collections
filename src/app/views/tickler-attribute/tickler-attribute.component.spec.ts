import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicklerAttributeComponent } from './tickler-attribute.component';
import {TicklerAttributeTableComponent} from "../tickler-attribute-table/tickler-attribute-table.component";
import {WaitingBackendComponent} from "../waiting-backend/waiting-backend.component";
import {NewTicklerAttributeComponent} from "../new-tickler-attribute/new-tickler-attribute.component";
import {AttributeTypeToStringPipe} from "../../pipes/attribute-type-to-string.pipe";
import {SemaphoreComponent} from "../semaphore/semaphore.component";
import {CoinDateTransformPipe} from "../../pipes/coin-date-transform.pipe";
import {FormsModule} from "@angular/forms";
import {DataService} from "../../services/data.service";
import {BackendCommsService} from "../../services/backend-comms.service";
import {UserFeedbackService} from "../../services/user-feedback.service";
import {DatePipe} from "@angular/common";
import {BooleanToStringPipe} from "../../pipes/boolean-to-string.pipe";
import {CiscoCommsService} from "../../services/cisco-comms.service";
import {BooleanToStringDuePipe, BooleanToStringOrderPipe} from "../../pipes/boolean-to-string-order.pipe";
import {ConsentPipeCorrectConversion} from "../../pipes/consent.pipe";
import {TelephonePipe} from "../../pipes/telephone.pipe";
import {TemporalStateServiceService} from "../../services/temporal-state-service.service";
import {PopoverModule} from "ngx-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule} from "ngx-toastr";

describe('TicklerAttributeComponent', () => {
  let component: TicklerAttributeComponent;
  let fixture: ComponentFixture<TicklerAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientModule, HttpClientTestingModule, PopoverModule, ToastrModule.forRoot() ],
      declarations: [ TicklerAttributeComponent, TicklerAttributeTableComponent, WaitingBackendComponent, NewTicklerAttributeComponent, AttributeTypeToStringPipe, SemaphoreComponent,
                      CoinDateTransformPipe ],
      providers: [ DataService, BackendCommsService, UserFeedbackService, DatePipe, BooleanToStringPipe,
                   CiscoCommsService, BooleanToStringOrderPipe, BooleanToStringDuePipe, ConsentPipeCorrectConversion, TelephonePipe, TemporalStateServiceService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicklerAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
