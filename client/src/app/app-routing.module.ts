import { from } from 'rxjs';


import { ProductListComponent } from './product-list/product-list.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  { path: 'homepage', component:HomescreenComponent },
  { path: 'products', component:ProductListComponent ,pathMatch: 'full', },
  {path: 'products/:id', component:ProductDetailsComponent},
  
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
