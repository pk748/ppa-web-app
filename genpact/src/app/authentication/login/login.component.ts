import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../shared/services/auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  show_error_message: boolean = false;
  showUserAuthMessage: boolean = false;

  country_err_text:string = '';
  error_message = '';

  loginForm: FormGroup;
  cuntry_name_value:any;


  country_list = [
    { label: "India", value: "india" },
    { label: "Mexico", value: "Mexico" },
    { label: "Chile", value: "Chile" },
  ]



  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      country_list_fname: [null, [Validators.required]]
    });
  }



  submitForm(): void {
    this.show_error_message = false;
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    console.log(this.loginForm)

    if(this.cuntry_name_value == null || this.cuntry_name_value == ""){
      this.showUserAuthMessage = false;
      this.country_err_text = "Please select country name"
    }else{
     if(this.loginForm.value.userName == 'admin@apptadInc.com' && this.loginForm.value.password == '123456'){
      this.showUserAuthMessage = false;
      this.router.navigate(['/authentication/landing']);
     }
     else if(this.loginForm.value.userName == 'user@apptadInc.com' && this.loginForm.value.password == '123456'){
      this.router.navigate(['/authentication/landing']);
     }
     else if(this.loginForm.value.userName == 'client@apptadInc.com' && this.loginForm.value.password == '123456'){
      this.showUserAuthMessage = false;
      this.router.navigate(['/authentication/landing']);
     }else{
       this.showUserAuthMessage = true;
     }

    }



  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {
  }


}
