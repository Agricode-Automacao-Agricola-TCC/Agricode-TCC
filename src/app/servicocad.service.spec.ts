import { TestBed } from '@angular/core/testing';

import { ServicocadService } from './servicocad.service';

describe('ServicocadService', () => {
  let service: ServicocadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicocadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
