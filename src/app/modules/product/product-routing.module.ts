import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";
import {ProductMasterComponent} from "./product-master/product-master.component";
import {ProductComponent} from "./product.component";
import {PermissionsGuard} from "../../permissions.guard";

const routes: Routes = [
  { path: '', component: ProductComponent , children: [
  { path: 'user', component: UserComponent},
  { path: 'admin', component: AdminComponent ,canActivate: [PermissionsGuard]},
      {path: 'edit/:id', component: ProductMasterComponent,canActivate: [PermissionsGuard]},
      {path: 'create', component: ProductMasterComponent,canActivate: [PermissionsGuard]},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
