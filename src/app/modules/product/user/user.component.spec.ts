import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { UserComponent } from './user.component';
import { ProductService } from '../product.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let productService: ProductService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ ProductService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch categories on init', () => {
    const categories = [{ id: 1, name: 'Category 1' }, { id: 2, name: 'Category 2' }];
    spyOn(productService, 'getCategories').and.returnValue(of(categories));
    component.ngOnInit();
    expect(component.categories).toEqual(categories);
    expect(component.selectedCategory).toEqual('all');
    expect(productService.getCategories).toHaveBeenCalled();
  });

  it('should fetch all products when "all" category is selected', () => {
    const products = [{ id: 1, name: 'Product 1', category: 'Category 1' }, { id: 2, name: 'Product 2', category: 'Category 2' }];
    spyOn(productService, 'getAllProducts').and.returnValue(of(products));
    component.selectedCategory = 'all';
    component.changeCategory();
    expect(component.products).toEqual(products);
    expect(component.isLoading).toBeFalse();
    expect(productService.getAllProducts).toHaveBeenCalled();
  });

  it('should fetch products by category when a category other than "all" is selected', () => {
    const category = 'Category 1';
    const products = [{ id: 1, name: 'Product 1', category }, { id: 2, name: 'Product 2', category }];
    spyOn(productService, 'getProductsByCategory').and.returnValue(of(products));
    component.selectedCategory = category;
    component.changeCategory();
    expect(component.products).toEqual(products);
    expect(component.isLoading).toBeFalse();
    expect(productService.getProductsByCategory).toHaveBeenCalledWith(category);
  });

});
