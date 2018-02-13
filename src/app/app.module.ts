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
// import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    // IncrementadorComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTER,
    PagesModule,
    PAGES_ROUTES,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
