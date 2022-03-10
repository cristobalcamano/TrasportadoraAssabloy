import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http';
import { AppComponent } from './app.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PedidoService} from './services/pedido.service';
import { AppRoutingModule } from './app-routing.module';
import { DetallePedidoComponent } from './components/detalle-pedido/detalle-pedido.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    DetallePedidoComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PedidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
