import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientModule } from './client.module';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreatorComponent } from './client-creator/client-creator.component';
import { ClientEditorComponent } from './client-editor/client-editor.component';


const routes: Routes = [
  {
    path: 'client/list',
  component: ClientListComponent
  },
  {
    path: 'client/creator',
  component: ClientCreatorComponent
  },
  {
    path: 'client/editor',
  component: ClientEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ClientModule
  ],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
