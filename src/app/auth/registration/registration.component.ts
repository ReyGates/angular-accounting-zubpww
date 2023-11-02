import { Title } from '@angular/platform-browser';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { UsersService } from "./../../shared/services/users.service";
import { User } from "../../shared/models/user.model";

@Component({
  selector: "registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  [x: string]: any;
  form: FormGroup;

  constructor(
    private users: UsersService,
    private router: Router,
    private title: Title
  ) {
    title.setTitle('registration')
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      name: new FormControl(null, [Validators.required]),
      agree: new FormControl(false, [Validators.requiredTrue])
    });
  }

  onSubmit() {
    const { email, password, name } = this.form.value;
    const user = new User(email, password, name);

    this.users.createNewUser(user).subscribe(() => {
      this.router.navigate(["/login"], {
        queryParams: {
          nowCanLogin: true
        }
      });
    });
  }

  forbiddenEmails(control: FormControl): Promise<any>{
    return new Promise((resolve, reject) => {
       this.users.getUserByEmail(control.value)
         .subscribe((user: User) => {
           if (user) {
             resolve({forbiddenEmail: true})
           } else {
             resolve(null);
           }
         })
    });
  } 
  
}
