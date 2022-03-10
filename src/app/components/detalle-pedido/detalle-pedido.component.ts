import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Pedidos} from '../../models/Pedidos';
import { PedidoService} from '../../services/pedido.service';
import { FormBuilder, FormGroup, Validators ,NgForm} from '@angular/forms';
@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {

  
  deshabilitar=false;
  
  pedido:Pedidos={
    id : "",
    ordenPedido:"",
    ordenVenta:"",
    factura:0,
    referenciaCompra:"",
    canalOrigenCompra:"",
    estadoPedido:"",
    fechaCreacion: ""

  };
  constructor(
    private active: ActivatedRoute,
    private pedidoService:PedidoService,    
  ) { 
    
  }

  ngOnInit(): void {        
    const params = this.active.snapshot.paramMap.get('id');    
    this.pedidoService.getPedidosId(params).subscribe(
      (res) => 
      {
        this.pedido=res;
        if(this.pedido.estadoPedido==='Listo para despachar'){
            this.deshabilitar=true;
        }
      },
      (err) => console.log(err)
    );  
  }
  actualizarEstado(forrm:NgForm):any{    
    
   this.pedidoService.updatePedidoEstado(this.pedido.id,this.pedido)
  .subscribe(
    (res)=>{
      console.log(res)
    },
    (err)=>console.log(err)
  ); 
  }
   
  
}
