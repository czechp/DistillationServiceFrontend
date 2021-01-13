import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TitleComponent } from './components/title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SidebarMenuComponent,
    RegisterPageComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
