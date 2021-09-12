import { RegistroComponent } from './registro/registro.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AdminComponent } from './admin/admin.component';
import { VistasComponent } from './vistas/vistas.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: VistasComponent
  },
  {
    path: "Admin",
    component: AdminComponent
  },
  {
    path: "Cliente",
    component: ClienteComponent
  },
  {
    path: "Login",
    component: LoginComponent
  },
  {
    path: "Cuentas",
    component: CuentasComponent
  }, 
  {
    path: "Tarjetas",
    component: TarjetasComponent
  },
  {
    path: "Prestamos",
    component: PrestamosComponent
  },
  {
    path: "Registro",
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
