import { NgModule } from '@angular/core';
import { BasicComponent } from './basic/basic.component';
import { QueryTableComponent } from './table/query-table.component';
import { ListRoutingModule } from './list-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CardComponent } from './card/card.component';
import { QueryTablesComponent } from './query-tables/query-tables.component';

@NgModule({
  declarations: [
    BasicComponent,
    QueryTableComponent,
    CardComponent,
    QueryTablesComponent
  ],
  imports: [
    SharedModule,
    ListRoutingModule
  ]
})
export class ListModule {
}