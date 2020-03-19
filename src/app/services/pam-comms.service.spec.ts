import { TestBed } from '@angular/core/testing';

import { PamCommsService } from './pam-comms.service';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule} from "ngx-toastr";
import {UserFeedbackService} from "./user-feedback.service";
import {BooleanToStringDuePipe} from "../pipes/boolean-to-string-order.pipe";

describe('PamCommsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, HttpClientTestingModule, ToastrModule.forRoot() ],
    providers: [ PamCommsService, UserFeedbackService, BooleanToStringDuePipe ]
  }));

  it('should be created', () => {
    const service: PamCommsService = TestBed.get(PamCommsService);
    expect(service).toBeTruthy();
  });
});
