import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacadastroComponent } from './atualizacadastro.component';

describe('AtualizacadastroComponent', () => {
  let component: AtualizacadastroComponent;
  let fixture: ComponentFixture<AtualizacadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizacadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
