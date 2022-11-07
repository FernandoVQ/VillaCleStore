import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product/components/product-detail/product-detail.component';
import { ProductsComponent } from './product/components/products/products.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,    
    children:[    
      {
        path:'',
        redirectTo:'/products',
        pathMatch:'full',
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
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
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
