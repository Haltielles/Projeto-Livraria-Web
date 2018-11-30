import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListabuscaComponent } from './listabusca.component';

describe('ListabuscaComponent', () => {
  let component: ListabuscaComponent;
  let fixture: ComponentFixture<ListabuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListabuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListabuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
