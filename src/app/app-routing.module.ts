import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";


const routes: Routes = [
  { path: '', component: LoginComponent},
  {
    path: 'products',
    loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
