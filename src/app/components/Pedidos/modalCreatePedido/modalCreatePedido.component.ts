import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { productPedido } from 'src/app/models/pedido.model';
import { PedidosService } from 'src/app/services/pedidos.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-modalCreatePedido',
  templateUrl: './modalCreatePedido.component.html',
  styleUrls: ['./modalCreatePedido.component.css']
})
export class ModalCreatePedidoComponent implements OnInit {
  formProduct: FormGroup;
  vRowProducts: Array<any> = [];
  datas: any;
  vRowPedidos: Array<any> = [];

  constructor(
    public dialogRef: MatDialogRef<ModalCreatePedidoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalCreatePedidoComponent,
    private fb: FormBuilder,
    private ProductService: ProductsService,
    private PedidoService: PedidosService
  ) {
    this.formProduct = this.fb.group({
      producto: [''],
      cantidad: ['']
    });
    this.datas = data;
  }

  ngOnInit() {
    this.getProducts();
    this.getProductsPedido();
  }

  getProducts() {
    this.ProductService.getProducts().subscribe(
      (res: any) => {
        this.vRowProducts = res;
      },
      (err) => console.log(err)
    );
  }

  getProductsPedido() {
    if (this.datas.id != '0') {
      this.PedidoService.getProductsPedido(this.datas.id).subscribe(
        (res: any) => {
          this.vRowPedidos = res;
          console.log(res);
        },
        (err: any) => console.log(err)
      );
    }
  }

  pushProd(){
    let form = this.formProduct.value;
      let d:productPedido = {
        idPedido: this.datas.id,
        idProduct: form.producto,
        cantidad: form.cantidad
      }
      this.PedidoService.pushProduct(d).subscribe((res:any)=>{
        this.getProductsPedido();
      });
  }
  
  submit(){
    if(this.datas.id != '0'){
      this.pushProd();
    }else{
      let u = {
        idUser: localStorage.getItem('user')
      }
      this.PedidoService.createPedido(u).subscribe((res:any)=>{
        this.datas.id = res[0].id;
        this.pushProd();
      });
    }
  }

  deletePedido(id:string){
    this.PedidoService.deletePedido(id).subscribe((res:any)=>{
      console.log(res);
      this.getProductsPedido();
    });
  }


}
