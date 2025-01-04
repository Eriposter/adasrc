import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerservicosComponent } from './bannerservicos.component';

describe('BannerservicosComponent', () => {
  let component: BannerservicosComponent;
  let fixture: ComponentFixture<BannerservicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerservicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerservicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
