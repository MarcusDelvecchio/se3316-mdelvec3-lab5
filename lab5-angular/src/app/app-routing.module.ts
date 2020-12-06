import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { AdminComponent } from 'src/app/pages/admin\/admin/admin.component';
import { ManagerComponent } from 'src/app/pages/managers\/manager/manager.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent//,
    //canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'manager',
    component: ManagerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
