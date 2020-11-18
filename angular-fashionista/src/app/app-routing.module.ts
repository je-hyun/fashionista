
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { FormsModule } from '@angular/forms';
import { CompanyeditComponent } from './companyedit/companyedit.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProducteditComponent } from './productedit/productedit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'companies-list', component: CompaniesListComponent, canActivate: [AuthGuard] },
  { path: 'companyedit/:id', component: CompanyeditComponent, canActivate: [AuthGuard]},
  { path: 'products-list', component: ProductslistComponent, canActivate: [AuthGuard] },
  { path: 'productedit/:id', component: ProducteditComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
