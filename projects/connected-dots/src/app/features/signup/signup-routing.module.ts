import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
    data: { title: 'iotfw.menu.signup' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule {}
