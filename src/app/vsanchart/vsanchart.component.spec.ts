import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsanchartComponent } from './vsanchart.component';

describe('VsanchartComponent', () => {
  let component: VsanchartComponent;
  let fixture: ComponentFixture<VsanchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsanchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsanchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
