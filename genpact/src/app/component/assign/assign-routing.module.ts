import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignCreateComponent } from './assign-create/assign-create.component';
import { AssignHistoryComponent } from './assign-history/assign-history.component';
const routes: Routes = [

  {
    path: 'assign-create',
    component: AssignCreateComponent,
    data: {
      title: 'Assign',
      headerDisplay: "none"
    }
  },
  {
    path: 'assign-history',
    component: AssignHistoryComponent,
    data: {
      title: 'Assign History',
      headerDisplay: "none"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignRoutingModule { }
