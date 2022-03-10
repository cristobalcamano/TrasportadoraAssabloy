import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedidos } from '../models/Pedidos';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  API_URI = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  
  getPedidos():Observable<Pedidos[]> {
    
    return this.http.get<Pedidos[]>(this.API_URI + '/Pedido/')
    .pipe(catchError(e=>{
      return throwError(e);
    }));
  }
  getPedidosId(id:any):Observable<Pedidos>{
    return this.http.get<Pedidos>(this.API_URI + '/Pedido/validar-pedido/'+id)
    .pipe(catchError(e=>{
      return throwError(e);
    }))    
  }
  updatePedidoEstado(id:any,Pedido:Pedidos):Observable<Pedidos>{      
    return this.http.put<Pedidos>(this.API_URI + '/Pedido/updateEstado/'+id,Pedido);    

  }
}
