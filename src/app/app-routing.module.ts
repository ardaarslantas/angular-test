import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KayitolComponent } from './kayitol/kayitol.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';




const routes: Routes = [
  { path: '', component: AnasayfaComponent, },
  { path: 'anasayfa', component: AnasayfaComponent },
  { path: 'kayitol', component: KayitolComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
