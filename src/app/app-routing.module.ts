import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,    
    children:[    
      {
        path:'',
        redirectTo:'/home',
        pathMatch:'full',
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'products',
        component:ProductsComponent
      },
      {
        path:'products/:id',
        component:ProductDetailComponent
      }
    ]
  },  
  {
    path:'demo',
    component:DemoComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }