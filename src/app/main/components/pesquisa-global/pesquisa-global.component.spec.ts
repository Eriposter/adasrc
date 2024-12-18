import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaGlobalComponent } from './pesquisa-global.component';

describe('PesquisaGlobalComponent', () => {
  let component: PesquisaGlobalComponent;
  let fixture: ComponentFixture<PesquisaGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesquisaGlobalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
