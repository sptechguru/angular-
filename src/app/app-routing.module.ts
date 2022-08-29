import { TaskComponent } from './components/task/task.component';
import { DashbordsComponent } from './components/dashbords/dashbords.component';
import { NewsitemComponent } from './components/newsitem/newsitem.component';
import { CartsComponent } from './components/Ecommerce/carts/carts.component';
import { ProdcutsComponent } from './components/Ecommerce/prodcuts/prodcuts.component';
import { CustobsComponent } from './Basic componets/custobs/custobs.component';
import { DyncompoComponent } from './Basic componets/dyncompo/dyncompo.component';
import { GridsystemComponent } from './Basic componets/gridsystem/gridsystem.component';
import { PostComponent } from './Basic componets/post/post.component';
import { CrudComponent } from './Basic componets/crud/crud.component';
import { GalleryComponent } from './Basic componets/gallery/gallery.component';
import { MapComponent } from './Basic componets/map/map.component';
import { SignupFormComponent } from './Basic componets/signup-form/signup-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Basic componets/home/home.component';
import { AboutComponent } from './Basic componets/about/about.component';
import { ContactComponent } from './Basic componets/contact/contact.component';
import { PageNotfoundComponent } from './Basic componets/page-notfound/page-notfound.component';
import { PropertyDetailsComponent } from './Basic componets/property-details/property-details.component';
import { LoginsComponent } from './components/logins/logins.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetComponent } from './components/forget/forget.component';


const routes: Routes = [

  // That is admin Module is LazyLoading concepts
  {
    path:'admin',loadChildren:()=>import('./admin/admin.module')
    .then(mod=>mod.AdminModule)
  },

  // That is user Module is LazyLoading concepts

  {
    path:'user',loadChildren:()=>import('./user/user.module')
    .then(mod=>mod.UserModule)
  },

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:ProdcutsComponent },
  {path: 'dashbords', component:DashbordsComponent },
  {path: 'login', component:LoginsComponent },
  {path: 'signup', component:SignupComponent },
  {path: 'forget', component:ForgetComponent },
  {path: 'cart', component:CartsComponent },
  {path: 'news', component:NewsitemComponent },
  {path: 'homes', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'gallery', component: GalleryComponent},
  // {path: 'signup', component:SignupFormComponent},
  {path: 'map', component:MapComponent},
  {path: 'crud', component:CrudComponent},
  {path: 'post', component:PostComponent},
  {path: 'grid', component:GridsystemComponent},
  {path: 'dynamic', component:DyncompoComponent},
  {path: 'cusobs', component:CustobsComponent},
  {path: 'propde', component:PropertyDetailsComponent},
  {path: 'task', component:TaskComponent},


  {path: '**',  component: PageNotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
