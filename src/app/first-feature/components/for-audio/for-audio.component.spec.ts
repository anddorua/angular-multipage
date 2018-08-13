import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForAudioComponent } from './for-audio.component';

describe('ForAudioComponent', () => {
  let component: ForAudioComponent;
  let fixture: ComponentFixture<ForAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
