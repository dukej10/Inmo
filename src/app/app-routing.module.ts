import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralModule } from './general/general.module';
import { HomeComponent } from './general/home/home.component';
import { DireccionesComponent } from './general/direcciones/direcciones.component';
import { PageNotFoundComponent } from './general/page-not-found/page-not-found.component';
import { ClientRoutingModule } from './client/client-routing.module';


const routes: Routes = [
  {
    path: 'home',
  component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },

  {
    path: 'direc',
  component: DireccionesComponent
  },
  {
    path: 'dir',
  component: DireccionesComponent
  },

  {
    path: 'security',
    loadChildren: './security/security.module#SecurityModule' 
  }, 
  {
    path: '**',
  component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  GeneralModule,
  ClientRoutingModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
