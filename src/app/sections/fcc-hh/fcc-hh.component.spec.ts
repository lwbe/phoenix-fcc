import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FccHhComponent } from './fcc-hh.component';

describe('FccHhComponent', () => {
  let component: FccHhComponent;
  let fixture: ComponentFixture<FccHhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FccHhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FccHhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
