import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosCardComponent } from './servicos-card.component';

describe('ServicosCardComponent', () => {
  let component: ServicosCardComponent;
  let fixture: ComponentFixture<ServicosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
