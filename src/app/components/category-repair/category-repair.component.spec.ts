import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRepairComponent } from './category-repair.component';

describe('CategoryRepairComponent', () => {
  let component: CategoryRepairComponent;
  let fixture: ComponentFixture<CategoryRepairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryRepairComponent]
    });
    fixture = TestBed.createComponent(CategoryRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
