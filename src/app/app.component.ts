import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'Front';
  login:boolean = false;

  constructor() {
  }

  ngAfterViewChecked(): void {
    if(localStorage.getItem('user')){
      this.login = true;
    }
  }

}
