import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarraDeProgressoModule } from './barra-de-progresso/barra-de-progresso.module';
import { CabecalhoComponent } from './cabecalho.component';


@NgModule({
  declarations: [CabecalhoComponent],
  imports: [
    CommonModule,
    BarraDeProgressoModule
  ]
})
export class CabecalhoModule { }
