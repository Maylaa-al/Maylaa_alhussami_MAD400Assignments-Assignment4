import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { SearchcomponentComponent } from './searchcomponent/searchcomponent.component';
const routes: Routes = [
  {
    path: "content",
    component: ContentListComponent,
  },
  {
    path: "",
    redirectTo: "/content",
    pathMatch: "full"
  },
  {
    path: "content/:idNumberValue",
    component: DetailComponentComponent
  },
  {
    path: "search",
    component: SearchcomponentComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
