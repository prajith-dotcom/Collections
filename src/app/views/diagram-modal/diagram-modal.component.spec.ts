import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramModalComponent } from './diagram-modal.component';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbModalStack} from "@ng-bootstrap/ng-bootstrap/modal/modal-stack";

describe('DiagramModalComponent', () => {
  let component: DiagramModalComponent;
  let fixture: ComponentFixture<DiagramModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagramModalComponent ],
      providers: [ NgbModal, NgbModalStack ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
