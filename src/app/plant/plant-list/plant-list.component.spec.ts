/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantListComponent } from './plant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PlantService],
      declarations: [PlantListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;

    const climas = ['Templado', 'cálido', 'Frío', 'Todos'];
    const tipos = ['Interior', 'exterior'];

    for (let i = 0; i < 3; i++) {
      const plant = new Plant(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.fullName(),
        faker.helpers.arrayElement(tipos),
        faker.datatype.number(),
        [faker.helpers.arrayElement(climas)],
        faker.name.firstName()
      );
      component.plants.push(plant);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Revisar la cantidad de encabezados de la tabla
  it('should have headers table element', () => {
    expect(debug.queryAll(By.css('th'))).toHaveSize(4);
  });

  //Revisar los valores de los encabezados de la tabla
  it('should display the corrects values for headers', () => {
    const encabezados =
      fixture.nativeElement.querySelectorAll('table thead tr th');
    expect(encabezados.length).toBe(4);
    expect(encabezados[0].innerText).toBe('#');
    expect(encabezados[1].innerText).toBe('Nombre comun');
    expect(encabezados[2].innerText).toBe('Tipo');
    expect(encabezados[3].innerText).toBe('Clima');
  });

  //Revisar las columnas de la tabla
  it('Should have 3 rows', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4);
  });

  //Revisar los totales de la tabla
  it('should have 2 totals plats', () => {
    expect(debug.queryAll(By.css('p'))).toHaveSize(2);
  });
});
