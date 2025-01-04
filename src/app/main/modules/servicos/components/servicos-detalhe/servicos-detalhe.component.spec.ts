import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosDetalheComponent } from './servicos-detalhe.component';

describe('ServicosDetalheComponent', () => {
  let component: ServicosDetalheComponent;
  let fixture: ComponentFixture<ServicosDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
