import { Component, EventEmitter, Output, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

import { Category } from "./../../../shared/models/category.model";
import { CategoriesService } from "./../../../shared/services/categories.service";

@Component({
  selector: "add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.scss"]
})
export class AddCategoryComponent implements OnDestroy {
  sub1: Subscription;

  @Output() onCategoryAdd = new EventEmitter<Category>();

  constructor(private CategoriesService: CategoriesService) {}

  onSubmit(form: NgForm) {
    let { name, capacity } = form.value;
    if (capacity < 0) capacity *= -1;

    const category = new Category(name, capacity);

    this.sub1 = this.CategoriesService
      .addCategory(category)
      .subscribe((category: Category) => {
        form.reset();
        form.form.patchValue({ capasyty: 1 });
        this.onCategoryAdd.emit(category);
      });
  }

  ngOnDestroy() {
    if (this.sub1) this.sub1.unsubscribe();
  }
    
}
