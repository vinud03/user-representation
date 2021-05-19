import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {
    path: 'Home',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent,
    children:[
      {
        path:'profile/:id',
        component: ProfileComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/login' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
