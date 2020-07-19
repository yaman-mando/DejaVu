import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TranslateBaseService} from "../../../app-translation/services/translation-base.service";
import {HelpService} from "../../../services/help.service";


@Component({
  selector: 'signInForm',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public _tb:TranslateBaseService,
              private _fb: FormBuilder,
              private _help:HelpService,
              ) {

    //login Form
    this.loginForm = this._fb.group({
      UserName: [null, Validators.required],
      Password: [null, Validators.required]
    });

  }

  ngOnInit() {
  }

  async OnSubmit() {
    const formValues: {
      UserName: string;
      Password: string
    }
      = this.loginForm.getRawValue();

    if(formValues.Password == '123456'){
      await this._help.showSuccessLogin();
      setTimeout(async () => {
        await  this._help.logIn(formValues.UserName);
      },1600);
    }
    else{
      await this._help.showEmailPasswordWrongToast()
    }


  }
}
