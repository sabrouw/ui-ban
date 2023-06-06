import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { LightInfosComponent } from './components/light-infos/light-infos.component';
import { MyTransactionComponent } from './pages/my-transaction/my-transaction.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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
import { ManageUsersComponent } from './admin/manage-users/manage-users.component'
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
    NavbarComponent,
    NewContactComponent,
    MyProfileComponent,
    ManageUsersComponent,

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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
