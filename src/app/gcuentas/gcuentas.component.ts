import { Cuenta } from './../zmodelos/cuenta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gcuentas',
  templateUrl: './gcuentas.component.html',
  styleUrls: ['./gcuentas.component.css']
})
export class GcuentasComponent implements OnInit {

  cuentas: Cuenta[] = [];

  numero: number = 0;
  desc: string = "";
  cliente: string = "";
  tipo: string = "";
  moneda: string = "";
  pos: number = 0;
  desc_edit = "";

  constructor() { }

  ngOnInit(): void {
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

  eliminar(cuenta: Cuenta){
    this.cuentas = this.cuentas.filter(x => x.num != cuenta.num);
  }

  agregar(){
    const cuenta = new Cuenta;
    cuenta.num = this.numero;
    cuenta.cliente = this.cliente;
    cuenta.desc = this.desc;
    cuenta.moneda = this.moneda;
    cuenta.tipo = this.tipo;
    this.cuentas.push(cuenta);
  }

  editar(){
    this.cuentas[this.pos].desc = this.desc_edit;
    this.cuentas[this.pos].tipo = this.tipo;
  }

  setTipo(x: number){
    if (x == 1){
      this.tipo = "Ahorros"
    };
    if (x == 2){
      this.tipo = "Regular"
    };
  }

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
