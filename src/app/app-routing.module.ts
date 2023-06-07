import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./pages/login/LoginComponent";
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MyTransactionComponent } from './pages/my-transaction/my-transaction.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { MainAdminPageComponent } from './admin/main-admin-page/main-admin-page.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'enregistrement', component: RegisterComponent },
  {
    path: 'admin', component: MainAdminPageComponent, children: [
      { path: 'manage-users', component: ManageUsersComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
      {  path: 'profile', component: MyProfileComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  
  {path: 'user', component: MainPageComponent ,children: [
    {path: 'contact', component: ContactListComponent},
  {  path: 'profile', component: MyProfileComponent },
  { path: 'transactions', component: MyTransactionComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'new-transaction', component: NewTransactionComponent },
  { path: 'new-contact', component: NewContactComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }

]}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
