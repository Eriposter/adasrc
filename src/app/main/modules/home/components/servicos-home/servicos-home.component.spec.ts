import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosHomeComponent } from './servicos-home.component';

describe('ServicosHomeComponent', () => {
  let component: ServicosHomeComponent;
  let fixture: ComponentFixture<ServicosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
