import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentInfoComponent } from './rent-info.component';

describe('RentInfoComponent', () => {
  let component: RentInfoComponent;
  let fixture: ComponentFixture<RentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
