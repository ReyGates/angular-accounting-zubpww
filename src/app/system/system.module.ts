import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "./../shared/shared.module";
import { SystemRoutingModule } from "./system-routing.module";
import { HistoryComponent } from "./pages/history/history.component";
import { BillComponent } from "./pages/bill/bill.component";
import { BillCardComponent } from './pages/bill/bill-card/bill-card.component';
import { PlanningComponent } from "./pages/planning/planning.component";
import { RecordsComponent } from "./pages/records/records.component";
import { SystemComponent } from "./system/system.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { CurrencyCardComponent } from './pages/bill/currency-card/currency-card.component';
import { AddEventComponent } from './pages/records/add-event/add-event.component';
import { AddCategoryComponent } from './pages/records/add-category/add-category.component';
import { EditCategoryComponent } from './pages/records/edit-category/edit-category.component';

import { BillService } from './shared/services/bill.service';
import { CategoriesService } from './shared/services/categories.service';
import { EventsService } from "./shared/services/event.service";
import { MomentPipe } from './shared/pipes/moment.pipe';
import { FilterPipe } from "./shared/pipes/filter.pipe";
import { DropdownDirective } from './shared/directives/dropdown.directive';

import { HistoryChartComponent } from './pages/history/history-chart/history-chart.component';
import { HistoryEventsComponent } from './pages/history/history-events/history-events.component';
import { HistoryDetailComponent } from './pages/history/history-detail/history-detail.component';
import { HistoryFilterComponent } from './pages/history/history-filter/history-filter.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    SystemComponent,
    HistoryComponent,
    PlanningComponent,
    RecordsComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownDirective,
    BillComponent,
    BillCardComponent,
    CurrencyCardComponent,
    MomentPipe,
    FilterPipe,
    AddEventComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    HistoryChartComponent,
    HistoryEventsComponent,
    HistoryDetailComponent,
    HistoryFilterComponent
  ],
  providers: [BillService, CategoriesService, EventsService]
})
export class SystemModule {}
