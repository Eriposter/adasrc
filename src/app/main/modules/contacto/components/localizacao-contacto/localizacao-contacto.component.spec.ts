import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacaoContactoComponent } from './localizacao-contacto.component';

describe('LocalizacaoContactoComponent', () => {
  let component: LocalizacaoContactoComponent;
  let fixture: ComponentFixture<LocalizacaoContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalizacaoContactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalizacaoContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
