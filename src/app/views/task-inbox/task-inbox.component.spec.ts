import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInboxComponent } from './task-inbox.component';

describe('TaskInboxComponent', () => {
  let component: TaskInboxComponent;
  let fixture: ComponentFixture<TaskInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('my tasks selected by default', () => {
    component.ngOnInit();
    expect(component.params.WithOwner).toBeTruthy();
    expect(component.currentTaskServiceParams.currentParams.WithOwner).toBeTruthy();
  });

  it('group tasks selected', () => {
    component.ngOnInit();
    expect(component.params.WithOwner).toBeTruthy();
    expect(component.params.WithoutOwner).toBeFalsy();
    expect(component.currentTaskServiceParams.currentParams.WithOwner).toBeTruthy();
    expect(component.currentTaskServiceParams.currentParams.WithoutOwner).toBeFalsy();
    component.search(false);
    expect(component.params.WithOwner).toBeFalsy();
    expect(component.params.WithoutOwner).toBeTruthy();
    expect(component.currentTaskServiceParams.currentParams.WithOwner).toBeFalsy();
    expect(component.currentTaskServiceParams.currentParams.WithoutOwner).toBeTruthy();
  });

});
