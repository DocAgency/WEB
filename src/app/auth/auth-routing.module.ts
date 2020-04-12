import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthAppComponent } from './auth-app/auth-app.component';

const routes: Routes = [
  {
    path: "",
    component: AuthAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
