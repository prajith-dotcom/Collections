import { TestBed } from '@angular/core/testing';

import { FemaCommsService } from './fema-comms.service';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('FemaCommsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, HttpClientTestingModule ],
    providers: [FemaCommsService]
  }));

  it('should be created', () => {
    const service: FemaCommsService = TestBed.get(FemaCommsService);
    expect(service).toBeTruthy();
  });
});
