import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLazyModuleRoutingModule } from './my-lazy-module-routing.module';
import { MyLazyModuleComponent } from './my-lazy-module.component';


@NgModule({
  declarations: [
    MyLazyModuleComponent
  ],
  imports: [
    CommonModule,
    MyLazyModuleRoutingModule
  ]
})
export class MyLazyModuleModule { }
