import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PotentialRecoveryRoutingModule } from './potential-recovery-routing.module';
import { PRComponent } from './pr/pr.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzIconModule } from 'ng-zorro-antd/icon';
import Amplify from 'aws-amplify';
import { NzDividerModule, NzCardModule, NzInputModule, NzButtonModule, NzAlertModule, NzSpinModule, NzTableModule, NzMessageServiceModule, NzSelectModule, NzEmptyModule, NzProgressModule, NzModalModule, NzCheckboxModule, NzFormModule, NzRadioModule, NzInputNumberModule, NzPageHeaderModule, NzSwitchModule, NzPopoverModule, NzDatePickerModule, NzBadgeModule, NzBreadCrumbModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { CreateClaimComponent } from './create-claim/create-claim.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzUploadModule } from 'ng-zorro-antd/upload';

const antdModule = [
  NzUploadModule,
  NzListModule,
  NzAvatarModule,
  NzDescriptionsModule,
  NzPopconfirmModule,
  NzDividerModule,
  NzCardModule,
  NzInputModule,
  NzDatePickerModule,
  NzButtonModule,
  NzAlertModule,
  NzSpinModule,
  NzTableModule,
  NzMessageServiceModule,
  NzIconModule,
  NzSelectModule,
  NzEmptyModule,
  NzProgressModule,
  NzModalModule,
  NzCheckboxModule,
  NzFormModule,
  NzRadioModule,
  NzInputNumberModule,
  NzPageHeaderModule,
  NzSwitchModule,
  NzPopoverModule,
  NzBadgeModule,
  NzBreadCrumbModule

]

@NgModule({
  declarations: [PRComponent, CreateClaimComponent],
  imports: [
    CommonModule,
    PotentialRecoveryRoutingModule,
    CommonModule,
    FormsModule,
    ...antdModule,
  ]
})
export class PotentialRecoveryModule { }
