import { TestBed } from '@angular/core/testing';

import { SolidSettingsService } from './solid-settings.service';

describe('SolidSettingsService', () => {
  let service: SolidSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolidSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
