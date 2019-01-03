import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PaginaPrincipalComponent } from './pagina-principal.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CorpoComponent } from './corpo/corpo.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    CabecalhoComponent,
    CorpoComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaginaPrincipalModule { }
