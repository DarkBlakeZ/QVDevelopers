import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/services/sign-in.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private signInService: SignInService,
    private router: Router,
    private appComponent: AppComponent
  ) {
    this.initForm();
    localStorage.clear();
   }

  ngOnInit() {
    this.appComponent.login = false;
  }

  initForm = () => {
    this.formLogin = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit = () => {
    const { email, password } = this.formLogin.value;
    let user = {
      usuario: email,
      password: password
    }
    this.signInService.login(user).subscribe((data:any) =>{
      if(data.length > 0){
        localStorage.setItem('user', data[0].ID);
        localStorage.setItem('nombre', data[0].strNombre);
        this.appComponent.login = true;
        this.router.navigate(['/productos']);
      }else{
        alert('Usuario o contraseña incorrecta');
      }
    })
  }

}
