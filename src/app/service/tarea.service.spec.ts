import { TestBed } from '@angular/core/testing';

import { TareaService } from './tarea.service';

describe('TareaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TareaService = TestBed.get(TareaService);
    expect(service).toBeTruthy();
  });
});
