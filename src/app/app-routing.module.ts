import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnavbarComponent } from './connavbar/connavbar.component';

const routes: Routes = [
  {
    path: 'navegar/:visible',
    component: ConnavbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
