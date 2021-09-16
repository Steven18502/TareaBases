import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferencias } from './Transferencias';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string = "https://localhost:5001/api/transferencia";

  getTransferencias()
  {
    return this.http.get<Transferencias[]>(this.url);
  }
}
