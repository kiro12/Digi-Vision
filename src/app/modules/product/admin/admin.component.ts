import {Component, ViewChild} from '@angular/core';
import {ProductService} from "../product.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
export interface Product {
  name: string;
  price: number;
  description: string;
  actions: string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent {

  dataSource = new MatTableDataSource<Product> ;
  displayedColumns: string[] = ['position' ,'name', 'price', 'description', 'actions'];
  isLoading = false
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private productService: ProductService , private _snackBar: MatSnackBar) {
  }
  ngOnInit() {
    this.isLoading = true
    this.productService.getAllProducts().subscribe((products: any[]) => {
      this.dataSource.data = products;
      this.isLoading = false
      console.log(this.dataSource)
    });
  }
  ngAfterViewInit() {
    console.log(this.paginator)

    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.paginator)
  }
  editProduct(id:any) {

  }
  deleteProduct(id:any ) {
    this.productService.deleteProduct(id).subscribe((res: any) => {
      this.dataSource.data = this.dataSource.data.filter((product: any) => product.id !== id);
      this._snackBar.open('Products is deleted successfully', 'Success', {panelClass: 'success-snackbar' , duration: 2000})
    })
  }
}
