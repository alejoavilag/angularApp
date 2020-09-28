import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { componentFirst} from './componets/componet_first/componet_first.componente';
import { VistaComponent } from './componets/vista/vista.component'

@NgModule({
  declarations: [
    AppComponent,
    componentFirst,
    VistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
