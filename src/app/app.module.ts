import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { HireComponent } from './components/developers/hire/hire.component';
import { FireComponent } from './components/developers/fire/fire.component';
import { EditComponent } from './components/developers/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DevelopersComponent,
    HireComponent,
    FireComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
