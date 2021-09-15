import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistasComponent } from './vistas/vistas.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { RolesComponent } from './roles/roles.component';
import { ClientesComponent } from './clientes/clientes.component';
import { GcuentasComponent } from './gcuentas/gcuentas.component';
import { GtarjetasComponent } from './gtarjetas/gtarjetas.component';
import { RegistroComponent } from './registro/registro.component';
import { GprestamosComponent } from './gprestamos/gprestamos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VistasComponent,
    HeaderComponent,
    AdminComponent,
    ClienteComponent,
    LoginComponent,
    NavbarComponent,
    CuentasComponent,
    TarjetasComponent,
    PrestamosComponent,
    RolesComponent,
    ClientesComponent,
    GcuentasComponent,
    GtarjetasComponent,
    RegistroComponent,
    GprestamosComponent
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
