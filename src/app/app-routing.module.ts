import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MyTransactionComponent } from './pages/my-transaction/my-transaction.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactListComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: 'transactions', component: MyTransactionComponent },
  { path: 'tableau-bord', component: UserDashboardComponent },
  { path: 'enregistrement', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
