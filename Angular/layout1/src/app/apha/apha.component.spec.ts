import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AphaComponent } from './apha.component';

describe('AphaComponent', () => {
  let component: AphaComponent;
  let fixture: ComponentFixture<AphaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AphaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
