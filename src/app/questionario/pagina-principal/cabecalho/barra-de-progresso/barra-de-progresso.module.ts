import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarraDeProgressoComponent } from './barra-de-progresso.component';

@NgModule({
  declarations: [BarraDeProgressoComponent],
  imports: [
    CommonModule
  ],
  exports: [BarraDeProgressoComponent]
})
export class BarraDeProgressoModule { }
