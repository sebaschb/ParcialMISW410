/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantService } from './plant.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Plant', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should ...', inject([PlantService], (service: PlantService) => {
    expect(service).toBeTruthy();
  }));
});
