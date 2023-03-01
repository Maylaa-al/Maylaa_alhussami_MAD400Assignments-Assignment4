import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListItemComponent } from './content-list-item/content-list-item.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { MyLazyModuleComponent} from './my-lazy-module/my-lazy-module.component';
@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    ContentListComponent,
    ContentListItemComponent,
    DetailComponentComponent,
    MyLazyModuleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
