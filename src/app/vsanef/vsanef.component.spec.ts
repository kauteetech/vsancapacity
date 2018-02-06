import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsanefComponent } from './vsanef.component';

describe('VsanefComponent', () => {
  let component: VsanefComponent;
  let fixture: ComponentFixture<VsanefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsanefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsanefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
