import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ListaWydatkowComponent } from './lista-wydatkow/lista-wydatkow.component';
import { WydatkiService } from './wydatki.service';
import { DodajWydatekComponent } from './dodaj-wydatek/dodaj-wydatek.component';
import { SumaWydatkowComponent } from './suma-wydatkow/suma-wydatkow.component';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'wydatki', component: ListaWydatkowComponent },
  { path: 'dodaj', component: DodajWydatekComponent },
  { path: 'suma', component: SumaWydatkowComponent },
  { path: '',
    redirectTo: '/wydatki',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ListaWydatkowComponent, DodajWydatekComponent, SumaWydatkowComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ WydatkiService ]
})
export class AppModule { }
