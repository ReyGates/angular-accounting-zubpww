import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { User } from "../models/user.model";
import { BaseApi } from "../core/base-api";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class UsersService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.get(`users?email=${email}`)
    .map((users: User[]) => users[0] ? users[0] : undefined);
  }

  createNewUser(user: User): Observable<User> {
    return this.post("users", user);
  }
}
