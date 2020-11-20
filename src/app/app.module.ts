import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routing';
import { IndexComponent } from './components/index/index.component';
import { AppComponent } from './app.component';
import { WorkComponent } from './components/work/work.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    WorkComponent,
    ExperiencesComponent,
    ResourcesComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
