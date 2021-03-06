import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthModule } from './auth/auth.module';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyeditComponent } from './companyedit/companyedit.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    CompaniesListComponent,
    CompanyeditComponent,
    ProductslistComponent,
    ProducteditComponent,
    ShopComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
