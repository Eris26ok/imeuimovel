import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PaginaPrincipalComponent } from './questionario/pagina-principal/pagina-principal.component';


const routes: Routes = [
  {
    path: 'questionario',
    component: PaginaPrincipalComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
