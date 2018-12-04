import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfecharComponent } from './loginfechar.component';

describe('LoginfecharComponent', () => {
  let component: LoginfecharComponent;
  let fixture: ComponentFixture<LoginfecharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginfecharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginfecharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
