import { WFMEvent } from "./../../../shared/models/event.model";
import { CategoriesService } from "./../../../shared/services/categories.service";
import { EventsService } from "./../../../shared/services/event.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Category } from "../../../shared/models/category.model";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "history-detail",
  templateUrl: "./history-detail.component.html",
  styleUrls: ["./history-detail.component.scss"]
})
export class HistoryDetailComponent implements OnInit {
  event: WFMEvent;
  category: Category;

  isLoaded = false;
  s1: Subscription;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.s1 = this.route.params
      .mergeMap((params: Params) =>
        this.eventsService.getEventById(params["id"])
      )
      .mergeMap((event: WFMEvent) => {
        this.event = event;
        return this.categoriesService.getCategoryById(event.category);
      })
      .subscribe((category: Category) => {
        this.category = category;
        this.isLoaded = true;
      });
  }

  ngOnDestroy() {
    if (this.s1) {
      this.s1.unsubscribe();
    }
  }
}
