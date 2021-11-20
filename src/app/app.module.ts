import { CrudComponent } from './crud/crud.component';
import { TestappService } from './testapp.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { PostComponent } from './post/post.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';
import { SidenabarComponent } from './sidenabar/sidenabar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { GridsystemComponent } from './gridsystem/gridsystem.component';
import {AgGridModule} from 'ag-grid-angular';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { DyncompoComponent } from './dyncompo/dyncompo.component';
import { HicomponentComponent } from './hicomponent/hicomponent.component';
import { HelloComponent } from './hello/hello.component';
import { GoodbyeComponent } from './goodbye/goodbye.component';

//that is Dynamic components using
import { ParentinfoComponent } from './parentinfo/parentinfo.component';
import { ChildinfoComponent } from './childinfo/childinfo.component';
import { CustobsComponent } from './custobs/custobs.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotfoundComponent,
    NavbarComponent,
    GalleryComponent,
    SignupFormComponent,
    LoginComponent,
    MapComponent,
    CrudComponent,
    Child1Component,
    Child2Component,
    PostComponent,
    FooterComponent,
    SidenabarComponent,
    GridsystemComponent,
    DyncompoComponent,
    HicomponentComponent,
    HelloComponent,
    GoodbyeComponent,
    ParentinfoComponent,
    ChildinfoComponent,
    CustobsComponent,
    PropertyDetailsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatPseudoCheckboxModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserModule,
    AgGridModule.withComponents([]),
    NgxQRCodeModule,


  ],

  //providers is using Dependecy injection for
  // as working in service delvers and all logic is here services
  //Component data send to providers are two types component level module html

  providers: [TestappService],
  bootstrap: [AppComponent],
  entryComponents: [ChildinfoComponent,ParentinfoComponent]
})
export class AppModule { }
