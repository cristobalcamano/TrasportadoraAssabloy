import { NgModule } from '@angular/core';
import {Routes,RouterModule}from '@angular/router';
import { CommonModule } from '@angular/common';
import { PedidoComponent} from './components/pedido/pedido.component';
import { DetallePedidoComponent} from './components/detalle-pedido/detalle-pedido.component';

const routes :Routes=[
  {
    path :'',
    redirectTo:'/Transportadora',
    pathMatch:'full'
  },
  {
    path:'Transportadora',
    component:PedidoComponent
  },
  {
    path:'Transportadora/pedido/:id',    
    component:DetallePedidoComponent
}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
