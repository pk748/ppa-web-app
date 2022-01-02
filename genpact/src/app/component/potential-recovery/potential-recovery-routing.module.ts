import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClaimComponent } from './create-claim/create-claim.component';
import { PRComponent } from './pr/pr.component';

const routes: Routes = [
  {
    path: 'pr',
    component: PRComponent,
    data: {
      title: 'PR',
      headerDisplay: "none"
    }
  },
  {
    path: 'create_claim',
    component: CreateClaimComponent,
    data: {
      title: 'Create Claim',
      headerDisplay: "none"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PotentialRecoveryRoutingModule { }
