import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProjectosComponent } from './banner-projectos.component';

describe('BannerProjectosComponent', () => {
  let component: BannerProjectosComponent;
  let fixture: ComponentFixture<BannerProjectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerProjectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerProjectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
