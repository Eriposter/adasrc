import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosComponent } from './numeros.component';

describe('NumerosComponent', () => {
  let component: NumerosComponent;
  let fixture: ComponentFixture<NumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumerosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
