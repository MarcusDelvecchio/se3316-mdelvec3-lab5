import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';

import { ConfigService } from './components/dataservice';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './pages/admin/admin/admin.component'; 
import { DataService } from "./components/sharedDataInterface";
import { ManagerComponent } from './pages/managers\/manager/manager.component';
import { AdminPageContentComponent } from './components/admin-content/admin-page-content/admin-page-content.component';
import { ManagerPageContentComponent } from './components/manager-content/manager-page-content/manager-page-content.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { PoliciesContentComponent } from './components/policies-content/policies-content.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeContentComponent,
    LoadingComponent,
    MainNavComponent,
    NavBarComponent,
    HomeComponent,
    ProfileComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AdminComponent,
    ManagerComponent,
    AdminPageContentComponent,
    ManagerPageContentComponent,
    PoliciesComponent,
    PoliciesContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        // pass in list of Urls to add the token to
        // these are the Urls we are going to protect
        allowedList: [
          `${env.dev.apiUrl}/api/public/update-data`,
          `${env.dev.apiUrl}/api/:username/scheduleData`,
          `${env.dev.apiUrl}/api/user/update-data`,
          `${env.dev.apiUrl}/api/manager/get`,
          `${env.dev.apiUrl}/api/admin/get`,
          `${env.dev.apiUrl}/api/admin/add`,
          `${env.dev.apiUrl}/api/manager/add`,
          `${env.dev.apiUrl}/api/user/get`, 
          `${env.dev.apiUrl}/api/reviews`, 
        ],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    ConfigService,
    DataService,
    ConfigService
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
