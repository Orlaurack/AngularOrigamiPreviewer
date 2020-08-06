import { TestBed } from '@angular/core/testing';

import { SolidService } from './solid.service';

describe('SolidService', () => {
  let service: SolidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
