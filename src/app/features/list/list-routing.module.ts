import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { QueryTableComponent } from './table/query-table.component';
import { CardComponent } from './card/card.component';
import { QueryTablesComponent } from './query-tables/query-tables.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: 'basic', component: BasicComponent},
  {path: 'table', component: QueryTableComponent},
  {path: 'tables', component: QueryTablesComponent},
  {path: 'card', component: CardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
