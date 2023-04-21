import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.scss']
})
export class ProductMasterComponent {
  createForm: FormGroup
  file:any
  id: any;
  isEdit = false
  loading = false
  constructor(private productService:ProductService, private fb:FormBuilder , private route:ActivatedRoute, private _snackBar: MatSnackBar , private router:Router) {
    this.createForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', Validators.required],
      category: ['' , Validators.required],

    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((param:any) => {
      if(param.id) {
        this.loading = true
        this.id = param.id
        this.productService.getProductById(this.id).subscribe((res:any) => {
          this.createForm.patchValue(res)
          this.isEdit = true
          this.loading = false

        })
      }
    });

  }
  onSubmit() {
    const formData = new FormData();
    Object.keys(this.createForm.value).forEach((key) => {
      formData.append(key, this.createForm.value[key]);
    });
    formData.append('image', this.file)
    if(this.isEdit){
      this.createForm.value.image = this.file
      this.productService.updateProduct(this.id , formData).subscribe(res => {
        this._snackBar.open('Product is updated successfully', 'Success');
        // this.router.navigate(['/products/admin']);

      })
    }else{

      this.productService.addProduct(formData).subscribe(res => {
        this._snackBar.open('Product is created successfully', 'Success');
        // this.router.navigate(['/products/admin']);

      })
    }

  }
  onChange(event:any) {
    this.file = event.target.files[0];

  }

  // OnClick of button Upload
}
