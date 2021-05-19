import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthServise } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  pass:string = '';

  constructor(private dataService: DataService, private router: Router, private authService: AuthServise) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    if (this.loginForm.controls.email.status == 'VALID' && this.loginForm.controls.password.status == 'VALID') {
      this.dataService.getUser();
      setTimeout(() => {
        // console.log(this.loginService.data);
        const data = this.dataService.data;
        // localStorage.setItem("response",JSON.stringify(data));
        for(let d of data){
          if((d['email']==this.loginForm.value.email) && this.loginForm.value.password=='pass@123'){
            this.authService.login();
            // const name:string = d['name'];
            this.dataService.user = d;
            // this.router.navigate(['/'],{queryParams:{name:name}});
            this.router.navigate(['/Home']);
            console.log('sucessfull login ' + d['name']);
            localStorage.setItem('user',JSON.stringify(d));
            data.splice(d['id']-1,1);
            localStorage.setItem('response',JSON.stringify(data));
            break;
          } else {
            this.pass = 'Invalid credentials';
            console.log('Invalid credentials');
          }
        }
      }, 2000)
      console.log(this.loginForm)
    }
  }

}