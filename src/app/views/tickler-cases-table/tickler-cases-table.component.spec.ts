import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicklerCasesTableComponent } from './tickler-cases-table.component';
import {WaitingBackendComponent} from "../waiting-backend/waiting-backend.component";
import {PaginatorComponent} from "../paginator/paginator.component";
import {CoinDateTransformPipe} from "../../pipes/coin-date-transform.pipe";
import {RouterTestingModule} from "@angular/router/testing";
import {HeaderSorterComponent} from "../header-sorter/header-sorter.component";
import {TemporalStateServiceService} from "../../services/temporal-state-service.service";
import {APP_BASE_HREF, DatePipe, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {GlobalStateService} from "../../services/global-state.service";
import {DataService} from "../../services/data.service";
import {BackendCommsService} from "../../services/backend-comms.service";
import {UserFeedbackService} from "../../services/user-feedback.service";
import {BooleanToStringPipe} from "../../pipes/boolean-to-string.pipe";
import {TelephonePipe} from "../../pipes/telephone.pipe";
import {ConsentPipeCorrectConversion} from "../../pipes/consent.pipe";
import {BooleanToStringDuePipe, BooleanToStringOrderPipe} from "../../pipes/boolean-to-string-order.pipe";
import {CiscoCommsService} from "../../services/cisco-comms.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule} from "ngx-toastr";
import {ComponentLoaderFactory, PopoverConfig, PopoverModule, PositioningService} from "ngx-bootstrap";

describe('TicklerCasesTableComponent', () => {
  let component: TicklerCasesTableComponent;
  let fixture: ComponentFixture<TicklerCasesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule, HttpClientTestingModule, ToastrModule.forRoot(), PopoverModule ],
      declarations: [ TicklerCasesTableComponent, WaitingBackendComponent, PaginatorComponent, CoinDateTransformPipe, HeaderSorterComponent ],
      providers: [ TemporalStateServiceService, GlobalStateService, DataService, BackendCommsService, UserFeedbackService,
                   DatePipe, BooleanToStringPipe, TelephonePipe, ConsentPipeCorrectConversion, BooleanToStringOrderPipe,
                    ComponentLoaderFactory, PopoverConfig, PositioningService,
                   BooleanToStringOrderPipe, BooleanToStringDuePipe, CiscoCommsService, Location, { provide: LocationStrategy, useClass: PathLocationStrategy },
                  { provide: APP_BASE_HREF, useValue: '/my/app'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicklerCasesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
