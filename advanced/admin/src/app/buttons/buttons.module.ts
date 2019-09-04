import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { Button2Component } from './button2/button2.component';


@NgModule({
  declarations: [ButtonsComponent, Button2Component],
  imports: [
    CommonModule,
    ButtonsRoutingModule
  ]
})
export class ButtonsModule { }
