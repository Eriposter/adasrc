import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoDetalheBannerComponent } from './servico-detalhe-banner.component';

describe('ServicoDetalheBannerComponent', () => {
  let component: ServicoDetalheBannerComponent;
  let fixture: ComponentFixture<ServicoDetalheBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicoDetalheBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicoDetalheBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
