import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { user, userUpdate } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-modalEditUser',
  templateUrl: './modalEditUser.component.html',
  styleUrls: ['./modalEditUser.component.css']
})
export class ModalEditUserComponent implements OnInit {

  formUser: FormGroup;
  datas: any;

  constructor(
    public dialogRef: MatDialogRef<ModalEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalEditUserComponent,
    private userService: UsersService,
    private fb: FormBuilder
  ) {
    this.formUser = this.fb.group({
      nombre: [''],
      usuario: [''],
      password: [''],
      rpassword: ['']
    });
    this.datas = data;
    this.getUserForId();
   }

  ngOnInit() {

  }

  getUserForId(){
    this.userService.getUsers(this.datas.id).subscribe(
      (data:any) => {
        this.formUser.setValue({
          nombre: data[0].strNombre,
          usuario: data[0].strUsuario,
          password: data[0].strPassword,
          rpassword: data[0].strPassword
        });
        
      }, err =>{
        console.log(err);
      }
    )
  }


  submit(){
    let form = this.formUser.value;
    if(form.password == form.rpassword){
      let data:userUpdate = {
      id: this.datas.id,
      usuario: form.usuario,
      password: form.password,
      nombre: form.nombre
    }
    this.userService.editUser(data).subscribe((res:any)=>{
      console.log(res);
      this.dialogRef.close(res);
    });
    }else{
      console.log('Las contraseñas deben coincidir');
    }
    
  }

}
