import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopitemComponent } from './Componenets/shopitem/shopitem.component';
import { ItemsdisplayComponent } from './Componenets/itemsdisplay/itemsdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopitemComponent,
    ItemsdisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
