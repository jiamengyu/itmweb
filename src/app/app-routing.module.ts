import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './shared/services/logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path: 'about', component: AboutComponent  },
  { path: 'demo', component: DemoComponent  },
  { path: 'contact', component: ContactComponent, 
                     canActivate: [LoggedInGuard] },
  { path: 'contactus', redirectTo: 'contact' },
  { path: 'login', component: LoginComponent },
  { path: 'product', loadChildren: './module/product/product.module#ProductModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,     {
      preloadingStrategy: PreloadAllModules
    }
  )],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
