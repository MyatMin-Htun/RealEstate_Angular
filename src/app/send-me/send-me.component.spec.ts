import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMeComponent } from './send-me.component';

describe('SendMeComponent', () => {
  let component: SendMeComponent;
  let fixture: ComponentFixture<SendMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
