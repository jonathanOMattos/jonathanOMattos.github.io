import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { BannerModule } from './components/banner/banner.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BannerModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }