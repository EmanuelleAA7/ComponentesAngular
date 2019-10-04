import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListanovaComponent } from './listanova.component';

describe('ListanovaComponent', () => {
  let component: ListanovaComponent;
  let fixture: ComponentFixture<ListanovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListanovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListanovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
