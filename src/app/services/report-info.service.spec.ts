import { TestBed } from '@angular/core/testing';

import { ReportInfoService } from './report-info.service';

describe('ReportInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportInfoService = TestBed.get(ReportInfoService);
    expect(service).toBeTruthy();
  });
});
