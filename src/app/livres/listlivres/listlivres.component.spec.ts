import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlivresComponent } from './listlivres.component';

describe('ListlivresComponent', () => {
  let component: ListlivresComponent;
  let fixture: ComponentFixture<ListlivresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListlivresComponent]
    });
    fixture = TestBed.createComponent(ListlivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
