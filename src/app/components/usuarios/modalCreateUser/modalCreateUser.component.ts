import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { userCreate } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { ModalEditUserComponent } from '../modalEditUser/modalEditUser.component';

@Component({
  selector: 'app-modalCreateUser',
  templateUrl: './modalCreateUser.component.html',
  styleUrls: ['./modalCreateUser.component.css']
})
export class ModalCreateUserComponent implements OnInit {

  formUser: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalCreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalCreateUserComponent,
    private userService: UsersService,
    private fb: FormBuilder
  ) {
    this.formUser = this.fb.group({
      nombre: [''],
      usuario: [''],
      password: [''],
      rpassword: ['']
    });
   }

  ngOnInit() {

  }

  submit(){
    let form = this.formUser.value;
    if(form.password == form.rpassword){
      let data:userCreate = {
      usuario: form.usuario,
      password: form.password,
      nombre: form.nombre
    }
    this.userService.createUser(data).subscribe((res:any)=>{
      console.log(res);
      this.dialogRef.close(res);
    });
    }else{
      console.log('Las contraseñas deben coincidir');
    }
    
  }

}
