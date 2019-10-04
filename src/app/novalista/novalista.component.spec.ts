import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovalistaComponent } from './novalista.component';

describe('NovalistaComponent', () => {
  let component: NovalistaComponent;
  let fixture: ComponentFixture<NovalistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovalistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
