import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FecharcompraComponent } from './fecharcompra.component';

describe('FecharcompraComponent', () => {
  let component: FecharcompraComponent;
  let fixture: ComponentFixture<FecharcompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FecharcompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FecharcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
