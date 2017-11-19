import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalHelloComponent } from './personal-hello.component';

describe('PersonalHelloComponent', () => {
  let component: PersonalHelloComponent;
  let fixture: ComponentFixture<PersonalHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
