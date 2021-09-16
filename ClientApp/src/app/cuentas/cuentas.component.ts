import { Transferencias } from '/home/chago/Documents/Bases/TecBank/ClientApp/src/app/Transferencias';
import { RestService } from '/home/chago/Documents/Bases/TecBank/ClientApp/src/app/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit{

  title = 'TareaBases';

  public vistas:Array<any> = []

  constructor(private rs : RestService){}

  columns = ["Transferencia id", "Cuenta Origen", "Cuenta Destino", "Monto", "Fecha", "Hora"];

  index = ["transferenciaId", "cuentaOrigen", "cuentaDestino", "monto", "fecha", "hora"];

  transferencias : Transferencias[] = [];
  
  ngOnInit(): void {
    this.rs.getTransferencias().subscribe
    (
      (response)=>
      {
        this.transferencias = response;
      },
      
      (error)=>
      {
        console.log("Error Occurred : "+error);
      }
    )

  }

}

