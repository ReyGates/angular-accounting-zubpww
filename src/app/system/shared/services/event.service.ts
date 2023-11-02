import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { BaseApi } from "./../../../shared/core/base-api";
import { WFMEvent } from "./../models/event.model";

@Injectable()
export class EventsService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  addEvent(event: WFMEvent): Observable<WFMEvent> {
    return this.post("events", event);
  }

  getEvents(): Observable<WFMEvent[]> {
    return this.get("events");
  }

  getEventById(id: string): Observable<WFMEvent> {
    return this.get(`events/${id}`);
  }
}
