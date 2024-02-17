import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AddProductComponent } from './component/product/add-product/add-product.component';
import { ProductDetailsComponent } from './component/product/product-details/product-details.component';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
  {path:"" , component: AboutComponent},
  {path:"products" , component:ProductComponent},
  {path:"products/:id" , component: ProductDetailsComponent},
  {path:"products/:id/:edit" , component: AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
