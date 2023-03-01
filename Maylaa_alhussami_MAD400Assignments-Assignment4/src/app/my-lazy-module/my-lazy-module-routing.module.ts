import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLazyModuleComponent } from './my-lazy-module.component';

const routes: Routes = [{ path: '', component: MyLazyModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLazyModuleRoutingModule { }
