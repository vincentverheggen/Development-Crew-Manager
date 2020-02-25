import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopersComponent } from './components/developers/developers.component';
import { HireComponent } from './components/developers/hire/hire.component';
import { FireComponent } from './components/developers/fire/fire.component';
import { EditComponent } from './components/developers/edit/edit.component';


const routes: Routes = [
  { path: '', component: DevelopersComponent },
  { path: 'developers/hire', component: HireComponent },
  { path: 'developers/fire/:id', component: FireComponent },
  { path: 'developers/edit/:id', component: EditComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
