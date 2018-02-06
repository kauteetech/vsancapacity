import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllflashComponent } from './allflash.component';

describe('AllflashComponent', () => {
  let component: AllflashComponent;
  let fixture: ComponentFixture<AllflashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllflashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllflashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
