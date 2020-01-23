/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScrolltoelementComponent } from './scrolltoelement.component';

describe('ScrolltoelementComponent', () => {
  let component: ScrolltoelementComponent;
  let fixture: ComponentFixture<ScrolltoelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrolltoelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrolltoelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
