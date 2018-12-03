import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsimplesComponent } from './loginsimples.component';

describe('LoginsimplesComponent', () => {
  let component: LoginsimplesComponent;
  let fixture: ComponentFixture<LoginsimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
