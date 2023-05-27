import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { PageNoteFoundComponent } from './pages/page-note-found/page-note-found.component';

const routes: Routes = [
 {path: "", component: BaseLayoutComponent, children:[
  {path:"", component: HomePageComponent}
 ]
},
{path: "admin", component: BaseLayoutComponent, children:[
  {path: "", redirectTo: "product", pathMatch: "full"},
  {path:"product", component: ProductListComponent},
  {path:"product/add", component: ProductAddComponent},
  {path:"product/:id/edit", component: ProductEditComponent},

 ]
},
{path: "**", component: PageNoteFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
