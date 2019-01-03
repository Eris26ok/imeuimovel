import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



import { ErrorsModule } from './errors/errors.module';
import { QuestionarioModule } from './questionario/questionario.module';

// import { CabecalhoComponent } from './cabecalho/cabecalho.component';
// import { CorpoComponent } from './corpo/corpo.component';
// import { RodapeComponent } from './rodape/rodape.component';


// ng add @angular/pwa

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuestionarioModule,
    ErrorsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
