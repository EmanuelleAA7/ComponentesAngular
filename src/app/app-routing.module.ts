import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AutocompleteComponent} from './autocomplete/autocomplete.component';
import{ListaComponent} from './lista/lista.component';
import{SelectlistComponent}from './selectlist/selectlist.component';
import{DragdropComponent}from './dragdrop/dragdrop.component';
import{DownloadComponent} from './download/download.component';
import{FileComponent} from './file/file.component';
import{NovalistaComponent} from './novalista/novalista.component';
import{TabelaComponent} from './tabela/tabela.component';


const routes: Routes = [
  {path:'', redirectTo: 'auto', pathMatch: 'full'}, 
  {path: 'auto', component:AutocompleteComponent},
  {path: 'lista', component:ListaComponent},
  {path: 'select', component:SelectlistComponent},
  {path: 'drag', component:DragdropComponent},
  {path: 'download', component:DownloadComponent},
  {path: 'file', component:FileComponent},
  {path: 'novalista', component:NovalistaComponent},
  {path: 'tabela', component:TabelaComponent},
  // { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
