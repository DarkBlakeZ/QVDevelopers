import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalEditProductComponent } from '../modalEditProduct/modalEditProduct.component';
import { ModalCreateProductComponent } from '../modalCreateProduct/modalCreateProduct.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  vRowProducts: Array<any> = [];

  constructor(
    private ProductsService: ProductsService,
    public dialog: MatDialog
    ) {
    this.getProducts()
  }

  ngOnInit() {}

  openDialog(id:string) {
    const dialogRef = this.dialog.open(ModalEditProductComponent, {
      width: '500px',
      height: '400px',
      data: {
        id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result){
        this.getProducts();
      }
    });
  }

  openDialogCreate() {
    const dialogRef = this.dialog.open(ModalCreateProductComponent, {
      width: '500px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result){
        this.getProducts();
      }
    });
  }

  getProducts() {
    this.ProductsService.getProducts().subscribe(
      (res:any) => {
        this.vRowProducts = res;
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  deleteProduct(id:string){
    console.log(id);
    this.ProductsService.deleteProduct(id).subscribe(
      (res:any) => {
        console.log(res);
        this.getProducts();
      },
      (err) => console.log(err.error.message)
    );
  }
}
