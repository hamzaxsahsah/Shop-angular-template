import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopitemComponent } from './Componenets/shopitem/shopitem.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
