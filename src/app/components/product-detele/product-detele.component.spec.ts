import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeteleComponent } from './product-detele.component';

describe('ProductDeteleComponent', () => {
  let component: ProductDeteleComponent;
  let fixture: ComponentFixture<ProductDeteleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDeteleComponent]
    });
    fixture = TestBed.createComponent(ProductDeteleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
