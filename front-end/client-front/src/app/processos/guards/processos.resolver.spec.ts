import { TestBed } from '@angular/core/testing';

import { ProcessosResolver } from './processos.resolver';

describe('ProcessosResolver', () => {
  let resolver: ProcessosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProcessosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
