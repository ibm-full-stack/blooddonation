import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { BloodDonationComponent } from './blood-donation/blood-donation.component';
import { BloodDonationRegComponent } from './blood-donation-reg/blood-donation-reg.component';
import { TestpipePipe } from './my-component/testpipe.pipe';
import { HighlightDirective } from './my-component/highlight.directive';
import {MyserviceService} from './my-component/myservice.service';
import { NotificationComponent } from './notification/notification.component';
import { MemberComponent } from './member/member.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IndexheaderComponent } from './indexheader/indexheader.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { FooterComponent } from './footer/footer.component';
import { TestformComponent } from './testform/testform.component';
import { ReactiveFormsModule } from '@angular/forms';


/*
const appRoutes:Routes=[
{
  path:'',redirectTo: 'product',pathMatch:'full'},
  {path:'product',component:ProductComponent},
  {path:'member',component:MemberComponent,
   children:[
    {path:'',redirectTo: 'child-one',pathMatch:'full'},
    {path:'child-one',component:Child1Component},
    {path:'child-two',component:Child2Component}
   ]},

  {path:'**',component:PageNotFoundComponent},
];
*/
const appRoutes:Routes=[

{
  path:'',redirectTo: 'blood-donation',pathMatch:'full'},
  {path:'blood-donation',component:BloodDonationComponent},
  {path:'blood-donation-reg',component:BloodDonationRegComponent},
  {path:'notification',component:NotificationComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'aboutus/:category',component:AboutusComponent},
  {path:'login',component:LoginComponent},
   {path:'home',component:HomeComponent}
 /* {path:'**',component:PageNotFoundComponent},*/
];





@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    BloodDonationComponent,
    BloodDonationRegComponent,
    TestpipePipe,
    HighlightDirective,
    NotificationComponent,
    MemberComponent,
    ProductComponent,
    PageNotFoundComponent,
    Child1Component,
    Child2Component,
    GalleryComponent,
    AboutusComponent,
    LoginComponent,
    HomeComponent,
    IndexheaderComponent,
    HomeheaderComponent,
    FooterComponent,
    TestformComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot(appRoutes),
     ReactiveFormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
