import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AssignRoutingModule } from './assign-routing.module';
import { AssignCreateComponent } from './assign-create/assign-create.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzIconModule } from 'ng-zorro-antd/icon';
import Amplify from 'aws-amplify';
import { NzDividerModule, NzCardModule, NzInputModule, NzButtonModule, NzAlertModule, NzSpinModule, NzTableModule, NzMessageServiceModule, NzSelectModule, NzEmptyModule, NzProgressModule, NzModalModule, NzCheckboxModule, NzFormModule, NzRadioModule, NzInputNumberModule, NzPageHeaderModule, NzSwitchModule, NzPopoverModule, NzDatePickerModule, NzBadgeModule, NzBreadCrumbModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { AssignHistoryComponent } from './assign-history/assign-history.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';


const antdModule = [
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
  declarations: [AssignCreateComponent, AssignHistoryComponent],
  imports: [
    CommonModule,
    AssignRoutingModule,
    FormsModule,
    ...antdModule,

  ],
  providers: [

    DatePipe
  ]
})
export class AssignModule { }
