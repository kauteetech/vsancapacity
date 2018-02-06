import { TestBed, inject } from '@angular/core/testing';

import { VsanparametersService } from './vsanparameters.service';

describe('VsanparametersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VsanparametersService]
    });
  });

  it('should be created', inject([VsanparametersService], (service: VsanparametersService) => {
    expect(service).toBeTruthy();
  }));
});
