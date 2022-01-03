import { CustobsComponent } from './custobs/custobs.component';
import { DyncompoComponent } from './dyncompo/dyncompo.component';
import { GridsystemComponent } from './gridsystem/gridsystem.component';
import { PostComponent } from './post/post.component';
import { CrudComponent } from './crud/crud.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MapComponent } from './map/map.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

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
  {path: 'home', component:CreateUserComponent },
  {path: 'homes', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'signup', component:SignupFormComponent},
  {path: 'map', component:MapComponent},
  {path: 'crud', component:CrudComponent},
  {path: 'post', component:PostComponent},
  {path: 'grid', component:GridsystemComponent},
  {path: 'dynamic', component:DyncompoComponent},
  {path: 'cusobs', component:CustobsComponent},
  {path: 'propde', component:PropertyDetailsComponent},

  {path: '**',  component: PageNotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
