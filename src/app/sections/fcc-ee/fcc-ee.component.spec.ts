import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FccEeComponent } from './fcc-ee.component';

describe('FccEeComponent', () => {
  let component: FccEeComponent;
  let fixture: ComponentFixture<FccEeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FccEeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FccEeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
