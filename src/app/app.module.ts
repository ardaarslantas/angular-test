import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { FormsModule } from '@angular/forms';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { KayitolComponent } from './kayitol/kayitol.component';

@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    HakkimizdaComponent,
    KayitolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
