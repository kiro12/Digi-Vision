import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {ProductService} from "./product.service";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatPaginatorModule} from "@angular/material/paginator";
import {NgxStarRatingModule} from "ngx-star-rating";
import {BarRatingModule} from "ngx-bar-rating";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {MatMenuModule} from "@angular/material/menu";
import { ProductMasterComponent } from './product-master/product-master.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    ProductMasterComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatPaginatorModule,
    NgxStarRatingModule,
    BarRatingModule,
    MatTableModule,
    MatIconModule,
    TranslateModule,
    MatMenuModule,
    MatSnackBarModule,
    ReactiveFormsModule

  ],
  providers: [ProductService]
})
export class ProductModule { }
