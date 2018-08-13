import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForVideoComponent } from './for-video.component';

describe('ForVideoComponent', () => {
  let component: ForVideoComponent;
  let fixture: ComponentFixture<ForVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
