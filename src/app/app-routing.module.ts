import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopersComponent } from './components/developers/developers.component';


const routes: Routes = [
  { path: '', component: DevelopersComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
