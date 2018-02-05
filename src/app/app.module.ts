import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas
import { APP_ROUTER } from './app.routes';
import { PagesModule } from './pages/pages.module';
import { PAGES_ROUTES } from './pages/pages.routes';
 
//componentes 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTER,
    PagesModule,
    PAGES_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
