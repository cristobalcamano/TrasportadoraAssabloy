import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Pedidos } from '../models/Pedidos';
import{ pageable}  from '../models/pageable';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  API_URI = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  
  getPedidos(req:pageable):Observable<any[]> {
    let params = new HttpParams();
    params=params.append('page',String(req.number));
    params=params.append('size',String(req.size));
    
    const httpOptions={
      Headers:new HttpHeaders({
        'Accept':'*/*',
        'Content-Type':'application/json'
      }),
      params:params
    }

    return this.http.get<any[]>(this.API_URI + '/Pedido/',httpOptions)
    
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
