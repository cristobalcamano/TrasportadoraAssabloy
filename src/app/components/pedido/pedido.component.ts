import { Component, OnInit } from '@angular/core';
import { Pedidos} from '../../models/Pedidos';
import { pageable} from '../../models/pageable';
import { PedidoService} from '../../services/pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  public listaPedidos : Pedidos[] =[];
  cantidad : number[]=[];
  public estadoNextdeshabilitado= false;
  public estadoNext= true;
  maximasPage:number=5;  
  page:pageable={
    number:0,
    size:10,
    totalPages :0,
    totalElements:0,
    paginaActual : 0   
  }
  
  constructor(
    private pedidoService : PedidoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos(){                   
    this.pedidoService.getPedidos(this.page)
    .subscribe((res: any) => {                        
        this.listaPedidos=res.content;
        this.page=res;
      this.page.paginaActual=this.page.number +1;          
      let pagesN = this.maximasPage <= this.page.totalPages ? this.maximasPage : this.page.totalPages
      let s;
      if(this.page.number > 0){
         s=this.cantidad[pagesN - 1]              
      }else{
         s=this.cantidad[pagesN]              
      }      
        if(this.page.totalPages != s){                   
          for (let i = 0; i < pagesN; i++) {                                  
            this.cantidad[i]=this.page.paginaActual++;                                                                             
          }  
        }                                                                        
      },
      (err) => console.log(err)
    );  
  }

  setNext(){ 
    this.page.number++;      
    let cont = this.page.number + 1 ;
    let s =this.cantidad[this.maximasPage - 1] + 1;                       
    if(this.page.totalPages > cont){
        if(this.page.totalPages == s){        
          this.cantidad.shift(); 
          this.cantidad.push(s);
        }                                                   
    }else{
      this.estadoNextdeshabilitado=true;
    }             
    this.getPedidos();           
  }

  previous(){    
    this.estadoNextdeshabilitado=false
    this.page.number--;
    this.getPedidos();
  }

  numeroPaginador(nPagina:number){        
    this.page.number=nPagina - 1;
    let cont = this.page.number + 1 ;
    if(this.page.totalPages > cont){      
      this.estadoNextdeshabilitado=false    
    }else{
      this.estadoNextdeshabilitado=true;
    }
    
    this.getPedidos();
    
  }
  getUltimaPagina(){
    this.page.number=this.page.totalPages - 1
    let cont = this.page.number + 1 ;
    if(this.page.totalPages > cont){

    }else{
      this.estadoNextdeshabilitado=true;
    }
    this.getPedidos();
  }
  getPrimeraPagina(){{
    this.estadoNextdeshabilitado=false
    this.page.number=0        
    this.getPedidos();
  }}  

}
