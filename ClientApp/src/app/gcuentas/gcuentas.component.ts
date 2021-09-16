import { Cuenta } from './../zmodelos/cuenta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gcuentas',
  templateUrl: './gcuentas.component.html',
  styleUrls: ['./gcuentas.component.css']
})
export class GcuentasComponent implements OnInit {

  // Se crea un array de objetos tipo cuenta
  cuentas: Cuenta[] = [];

  // Se definen variables para recibir los valores dentro de los inputs en el html
  numero: number = 0;
  desc: string = "";
  cliente: string = "";
  tipo: string = "";
  moneda: string = "";
  pos: number = 0;
  desc_edit = "";

  constructor() { }

  // Funcion de angular que se ejecuta siempre que se incia el componente 
  ngOnInit(): void {

    // Se llena la lista de cuentas con infromacion predeterminada para ejemplificar
    this.cuentas = [
      {
        num: 123456,
        desc: "cuenta de prueba",
        cliente: "juan",
        tipo: "Regular",
        moneda: "dolar",
      },
      {
        num: 14542,
        desc: "cuenta de prueba 2",
        cliente: "pedro",
        tipo: "ahorros",
        moneda: "euro",
      },
      {
        num: 14352,
        desc: "cuenta de prueba 2",
        cliente: "pedro",
        tipo: "ahorros",
        moneda: "euro",
      },
      {
        num: 14522,
        desc: "cuenta de prueba 2",
        cliente: "pedro",
        tipo: "ahorros",
        moneda: "euro",
      },
    ];
  }

  // Funcion que elimina una cuenta de la lista de cuentas y a su vez de la vista en la web
  // entradas: Un objeto de tipo cuenta 
  // Salidas: Ninguna
  eliminar(cuenta: Cuenta){
    this.cuentas = this.cuentas.filter(x => x.num != cuenta.num);
  }

  // Funcion que agrega una cuenta de la lista de cuentas y a su vez la muestra en la vista web
  // entradas: Ninguna 
  // Salidas: Ninguna
  agregar(){
    const cuenta = new Cuenta;
    cuenta.num = this.numero;
    cuenta.cliente = this.cliente;
    cuenta.desc = this.desc;
    cuenta.moneda = this.moneda;
    cuenta.tipo = this.tipo;
    this.cuentas.push(cuenta);
  }

  // Funcion que edita una cuenta de la lista de cuentas y a su vez la cambia en la vista web
  // entradas: Ninguna 
  // Salidas: Ninguna
  editar(){
    this.cuentas[this.pos].desc = this.desc_edit;
    this.cuentas[this.pos].tipo = this.tipo;
  }

  // Funcion cambia el tipo de cuenta para crear o editar cuentas segun el valor de la entrada obtenido desde la interfaz
  // entradas: x : number 
  // Salidas: Ninguna
  setTipo(x: number){
    if (x == 1){
      this.tipo = "Ahorros"
    };
    if (x == 2){
      this.tipo = "Regular"
    };
  }

  // Funcion cambia el tipo de moneda de la cuenta para crear o editar cuentas segun el valor de la entrada obtenido desde la interfaz
  // entradas: x : number 
  // Salidas: Ninguna
  setMoneda(x: number){
    if (x == 1){
      this.moneda = "Euros"
    };
    if (x == 2){
      this.moneda = "Colones"
    };
    if (x == 3){
      this.moneda = "Dolares"
    };
  }

}
