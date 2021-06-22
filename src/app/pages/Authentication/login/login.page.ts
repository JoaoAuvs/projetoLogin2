import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup

  configs = {
    isSignIn: true,
    action:'Login',
    actionChange: 'Conta Criada'
  }

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validateForm()
  }

  validateForm():void{

    this.authForm = this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(6)]]
      }
    )
  }

  get email():FormControl{
    return <FormControl> this.authForm.get('email')
  }

  get password():FormControl{
    return <FormControl> this.authForm.get('password')
  }

  get name():FormControl{
    return <FormControl> this.authForm.get('name');
  }

  clickLogin(){
    console.log(this.authForm.value)
  }
}