import { Component, OnInit } from '@angular/core';
import { Pedidos} from '../../models/Pedidos';
import { PedidoService} from '../../services/pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  public listaPedidos : Pedidos[] =[];
  
  constructor(
    private pedidoService : PedidoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos(){
    this.pedidoService.getPedidos()
    .subscribe((res: Pedidos[]) => {
        console.log(res);
        this.listaPedidos = res;
      },
      (err) => console.log(err)
    );
  }

}
