import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TuiRootModule } from '@taiga-ui/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TuiRootModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
