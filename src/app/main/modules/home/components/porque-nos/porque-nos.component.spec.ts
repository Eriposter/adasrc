import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorqueNosComponent } from './porque-nos.component';

describe('PorqueNosComponent', () => {
  let component: PorqueNosComponent;
  let fixture: ComponentFixture<PorqueNosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorqueNosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorqueNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
