import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PedidosService } from 'src/app/services/pedidos.service';
import { ModalCreatePedidoComponent } from '../modalCreatePedido/modalCreatePedido.component';

@Component({
  selector: 'app-listPedidos',
  templateUrl: './listPedidos.component.html',
  styleUrls: ['./listPedidos.component.css']
})
export class ListPedidosComponent implements OnInit {

  vRowPedidos: Array<any> = [];

  constructor(
    private PedidoService: PedidosService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getPedidos();
  }

  openDialog(id:string = '0') {
    const dialogRef = this.dialog.open(ModalCreatePedidoComponent, {
      width: '80%',
      height: '90%',
      data: {
        id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
        this.getPedidos();
    });
  }

  deleteProduct(id:string){

  }

  getPedidos(){
    this.PedidoService.getPedidos().subscribe(
      (res:any) => {
        this.vRowPedidos = res;
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

}
