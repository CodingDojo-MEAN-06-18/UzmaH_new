import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AphaComponent } from './apha/apha.component';
import { BetaComponent } from './beta/beta.component';
import { GammaComponent } from './beta/gamma/gamma.component';

@NgModule({
  declarations: [
    AppComponent,
    AphaComponent,
    BetaComponent,
    GammaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
