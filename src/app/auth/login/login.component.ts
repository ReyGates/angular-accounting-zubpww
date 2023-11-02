import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Title, Meta } from "@angular/platform-browser";

import { UsersService } from "./../../shared/services/users.service";
import { User } from "../../shared/models/user.model";
import { Message } from "../../shared/models/message.model";
import { AuthService } from "./../../shared/services/auth.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: Message;

  constructor(
    private users: UsersService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Entry point');
    meta.addTags([
      { name: 'keywords', content: 'login,enter,system'},
      { name: 'desctiption', content: 'entry point moment'},
    ]);
  }

  ngOnInit() {
    this.message = new Message("danger", "");
    this.route.queryParams.subscribe((params: Params) => {
      if (params["nowCanLogin"]) {
        this.showMessage({
          text: "you can do it",
          type: "success"
        });
      } else if (params['accessDenied']){
        this.showMessage({
          text: "please login",
          type: "warning"
        });
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  private showMessage(message: Message) {
    this.message = message;

    window.setTimeout(() => {
      this.message.text = "";
    }, 0);
  }

  onSubmit() {
    const formData = this.form.value;

    this.users.getUserByEmail(formData.email).subscribe((user: User) => {
      if (user) {
        if (user.password === formData.password) {
          this.message.text = "";
          window.localStorage.setItem("user", JSON.stringify(user));
          this.auth.login();
          this.router.navigate(['/system', 'bill']);
        } else {
          this.showMessage({
            text: "no password",
            type: "danger"
          });
        }
      } else {
        this.showMessage({
          text: "no user",
          type: "danger"
        });
      }
    });
  }
}
