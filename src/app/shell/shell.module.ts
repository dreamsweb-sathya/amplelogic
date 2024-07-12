import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,
  ],
  exports:[
    SidemenuComponent
  ]
})
export class ShellModule { }
