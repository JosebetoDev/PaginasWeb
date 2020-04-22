import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvitaeComponent } from './body/cvitae/cvitae.component';
import { ProyectsComponent } from './body/proyects/proyects.component';

const routes: Routes = [
  //{ path: 'app-cvitae', component: CvitaeComponent},
  { path: '', component: CvitaeComponent }, // redirect to `first-component`
  { path: 'proyectos-programas', component: ProyectsComponent },
  { path: '**', component: CvitaeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
