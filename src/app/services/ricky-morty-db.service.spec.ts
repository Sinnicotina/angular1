import { TestBed } from '@angular/core/testing';

import { RickyMortyDbService } from './ricky-morty-db.service';

describe('RickyMortyDbService', () => {
  let service: RickyMortyDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickyMortyDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
