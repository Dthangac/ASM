import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDeteleComponent } from './category-detele.component';

describe('CategoryDeteleComponent', () => {
  let component: CategoryDeteleComponent;
  let fixture: ComponentFixture<CategoryDeteleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryDeteleComponent]
    });
    fixture = TestBed.createComponent(CategoryDeteleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
