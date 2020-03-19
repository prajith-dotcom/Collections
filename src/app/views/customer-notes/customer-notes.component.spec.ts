import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNotesComponent } from './customer-notes.component';
import {WaitingBackendComponent} from "../waiting-backend/waiting-backend.component";
import {CoinDateTransformPipe} from "../../pipes/coin-date-transform.pipe";
import {FormsModule} from "@angular/forms";
import {DataService} from "../../services/data.service";
import {dataServiceMock} from "../../../test-utils/dataServiceMock";
import {UserFeedbackService} from "../../services/user-feedback.service";
import {userFeedbackMock} from "../../../test-utils/userFeedback";

describe('CustomerNotesComponent', () => {
  let component: CustomerNotesComponent;
  let fixture: ComponentFixture<CustomerNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CustomerNotesComponent, CoinDateTransformPipe, WaitingBackendComponent ],
      providers: [ {provide: DataService, useValue: dataServiceMock }, { provide: UserFeedbackService, useValue: userFeedbackMock } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
