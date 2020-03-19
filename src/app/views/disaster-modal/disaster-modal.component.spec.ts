import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterModalComponent } from './disaster-modal.component';
import {CoinDateTransformPipe} from "../../pipes/coin-date-transform.pipe";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbModalStack} from "@ng-bootstrap/ng-bootstrap/modal/modal-stack";

describe('DisasterModalComponent', () => {
  let component: DisasterModalComponent;
  let fixture: ComponentFixture<DisasterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisasterModalComponent, CoinDateTransformPipe ],
      providers: [ NgbModal, NgbModalStack ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
