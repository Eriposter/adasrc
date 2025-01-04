import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectosDetalheComponent } from './projectos-detalhe.component';

describe('ProjectosDetalheComponent', () => {
  let component: ProjectosDetalheComponent;
  let fixture: ComponentFixture<ProjectosDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectosDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
