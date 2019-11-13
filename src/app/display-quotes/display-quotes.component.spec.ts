import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQuotesComponent } from './display-quotes.component';

describe('DisplayQuotesComponent', () => {
  let component: DisplayQuotesComponent;
  let fixture: ComponentFixture<DisplayQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
