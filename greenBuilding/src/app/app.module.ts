import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.route';
import { WelcomeComponent } from './welcome/welcome.component';
import { FreshComponent } from './fresh/fresh.component';
import { TheBestComponent } from './the-best/the-best.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddnewsComponent } from './addnews/addnews.component';
import { ContentComponent } from './content/content.component';
import { HotterComponent } from './hotter/hotter.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    FreshComponent,
    TheBestComponent,
    LoginComponent,
    AddnewsComponent,
    ContentComponent,
    HotterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {useHash: true}),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
