import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { Button2Component } from './button2/button2.component';

const routes: Routes = [
  {
    path: '',
    component: ButtonsComponent
  },
  {
    path: 'button2',
    component: Button2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {}
