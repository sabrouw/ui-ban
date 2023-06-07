import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./pages/login/LoginComponent";
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { LightInfosComponent } from './components/light-infos/light-infos.component';
import { MyTransactionComponent } from './pages/my-transaction/my-transaction.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { MatFormFieldModule} from  '@angular/material/form-field'
import { MatSelectModule} from '@angular/material/select'
import { MatCardModule}from '@angular/material/card';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { MatMenuModule } from '@angular/material/menu';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainAdminPageComponent } from './admin/main-admin-page/main-admin-page.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    UserDashboardComponent,
    LightInfosComponent,
    MyTransactionComponent,
    ContactListComponent,
    NewTransactionComponent,
    NewContactComponent,
    MyProfileComponent,
    ManageUsersComponent,
    MainPageComponent,
    MainAdminPageComponent,
    AdminDashboardComponent,

  ],
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule, 
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
