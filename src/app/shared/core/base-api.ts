import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class BaseApi {
  private baseUrl = "https://json-server-shgqiatskw.now.sh/";

  constructor(public http: Http) {}

  private getUrl(url: string = ""): string {
    return this.baseUrl + url;
  }

  public get(url: string = ""): Observable<any> {
    return this.http
      .get(this.getUrl(url))
      .map((res: Response) => res.json());
  }

  public post(url: string = "", data: any = {}): Observable<any> {
    return this.http
      .post(this.getUrl(url), data)
      .map((res: Response) => res.json());
  }

  public put(url: string = "", data: any = {}): Observable<any> {
    return this.http
      .put(this.getUrl(url), data)
      .map((res: Response) => res.json());
  }
}
