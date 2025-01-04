import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectosDetalheBannerComponent } from './projectos-detalhe-banner.component';

describe('ProjectosDetalheBannerComponent', () => {
  let component: ProjectosDetalheBannerComponent;
  let fixture: ComponentFixture<ProjectosDetalheBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectosDetalheBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectosDetalheBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
