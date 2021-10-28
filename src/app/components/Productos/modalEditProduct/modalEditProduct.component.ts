import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductosComponent } from '../productos/productos.component';
import { ProductsService } from 'src/app/services/products.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { productEdit } from 'src/app/models/product.model';

@Component({
  selector: 'app-modalEditProduct',
  templateUrl: './modalEditProduct.component.html',
  styleUrls: ['./modalEditProduct.component.css']
})
export class ModalEditProductComponent implements OnInit {

  formProduct!: FormGroup;
  datas: any;

  constructor(
    public dialogRef: MatDialogRef<ModalEditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalEditProductComponent,
    private ProductsService: ProductsService,
    private fb: FormBuilder
  ) {
    this.datas = data;
    this.getProductForId();
    this.formProduct = this.fb.group({
      descripcion: [''],
      valor: [''],
    });
   }

  ngOnInit() {
    console.log(this.datas.id);
  }

  getProductForId(){
    this.ProductsService.getProducts(this.datas.id).subscribe(
      (res:any) => {
        this.formProduct.setValue({
          descripcion: res[0].strDescripcion,
          valor: res[0].curValor
        });
      },
      err => console.error(err)
    );
  }

  submit(){
    let form = this.formProduct.value;
    let data:productEdit = {
      id: this.datas.id,
      descripcion: form.descripcion,
      valor: form.valor
    }
    this.ProductsService.editProduct(data).subscribe((res:any)=>{
      console.log(res);
      this.dialogRef.close(res);
    });
  }

}
