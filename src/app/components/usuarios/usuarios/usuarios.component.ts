import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { user } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { ModalCreateUserComponent } from '../modalCreateUser/modalCreateUser.component';
import { ModalEditUserComponent } from '../modalEditUser/modalEditUser.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  vRowUsers: Array<user> = [];

  constructor(
    private UserService: UsersService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.getUsers();
  }


  getUsers(){
    this.UserService.getUsers().subscribe(
      (data:any) => {
        this.vRowUsers = data;
        console.log(data);
      }, err =>{
        console.log(err);
      }
    )
  }

  openDialogCreate(){
    const dialogRef = this.dialog.open(ModalCreateUserComponent, {
      width: '500px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result){
        this.getUsers();
      }
    });
  }

  openDialog(id:string){
    const dialogRef = this.dialog.open(ModalEditUserComponent, {
      width: '500px',
      height: '600px',
      data: {
        id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result){
        this.getUsers();
      }
    });
  }

  deleteUser(id:string){
    this.UserService.deleteUser(id).subscribe(
      (data:any) => {
        console.log(data);
        this.getUsers();
      }, err =>{
        console.log(err);
      }
    )
  }

}
