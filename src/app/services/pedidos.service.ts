import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalCreatePedidoComponent } from '../components/Pedidos/modalCreatePedido/modalCreatePedido.component';
import { productPedido } from '../models/pedido.model';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  url:string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { 

  }

  

  getPedidos(id:string = '0'){
    return this.http.get(this.url+'pedidos/'+id);
  }

  getProductsPedido(id:string){
    return this.http.get(this.url+'productsPedido/'+id);
  }

  createPedido(data:any){
    return this.http.post(this.url+'pedidos',data);
  }

  pushProduct(data:productPedido){
    return this.http.post(this.url+'pedidos/product',data);
  }

  deletePedido(id:string){
    return this.http.delete(this.url+'pedido/'+id);
  }

}
