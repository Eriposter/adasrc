import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectoComponent } from './projecto.component';

describe('ProjectoComponent', () => {
  let component: ProjectoComponent;
  let fixture: ComponentFixture<ProjectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
