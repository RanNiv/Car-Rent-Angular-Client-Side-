import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CarPreviewComponent } from './car-preview/car-preview.component';
import { CatalogComponent } from './catalog/catalog.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { OrderPreviewComponent } from './order-preview/order-preview.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CarReturnComponent } from './car-return/car-return.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { CarInventoryManagementComponent } from './car-inventory-management/car-inventory-management.component';
import { CarTypesManagementComponent } from './car-types-management/car-types-management.component';
import { OrdersManagementComponent } from './orders-management/orders-management.component';



const appRoutes: Routes = [
  

  
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'carpreview/:id', component: CarPreviewComponent },
  { path: 'order/:id', component: OrderpageComponent },
  { path: 'orderlist', component: OrderListComponent },
  { path: 'userorders/:id', component: OrderPreviewComponent },
  { path: 'returncar', component: CarReturnComponent },
  { path: 'usersmanagement', component: UsersManagementComponent },
  { path: 'carsinventory', component: CarInventoryManagementComponent },
  { path: 'carstypes', component:CarTypesManagementComponent },
  { path: 'carsorderslist', component:OrdersManagementComponent },
  //users-management
  //carsinventory
   {path: '', redirectTo: '/home', pathMatch: 'full'}
  ,
 

  /* { path: '**', component: PagenotfoundComponent } */

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    LoginComponent,
    CarPreviewComponent,
    CatalogComponent,
    OrderpageComponent,
    RegisterComponent,
    FooterComponent,
    OrderPreviewComponent,
    OrderListComponent,
    CarReturnComponent,
    UsersManagementComponent,
    CarInventoryManagementComponent,
    CarTypesManagementComponent,
    OrdersManagementComponent
 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
