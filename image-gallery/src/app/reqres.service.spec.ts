/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReqresService } from './reqres.service';

describe('ReqresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReqresService]
    });
  });

  it('should ...', inject([ReqresService], (service: ReqresService) => {
    expect(service).toBeTruthy();
  }));
});
