import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-modalCreateProduct',
  templateUrl: './modalCreateProduct.component.html',
  styleUrls: ['./modalCreateProduct.component.css']
})
export class ModalCreateProductComponent implements OnInit {

  formProduct: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalCreateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalCreateProductComponent,
    private ProductsService: ProductsService,
    private fb: FormBuilder
  ) { 
    this.formProduct = this.fb.group({
      descripcion: [''],
      valor: ['']
    });
  }

  ngOnInit() {
  }

  submit(){
    let product = this.formProduct.value;
    let data:product = {
      descripcion: product.descripcion,
      valor: product.valor
    }
    this.ProductsService.createProduct(data).subscribe(
      (res:any) => {
        console.log(res);
        this.dialogRef.close(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
