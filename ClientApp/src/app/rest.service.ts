import { Transferencias } from './Transferencias';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string = "https://localhost:5001/api/";

  getTransferencias()
  {
    return this.http.get<Transferencias[]>(this.url + "transferencia");
  }

  // send an HTTP POST request to insert a new transferencia in the backend.
  addTransferencia(transferencia:Transferencias): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(transferencia);
    console.log(body)
    return this.http.post(this.url + "transferencia", body,{'headers':headers})
  }
}
