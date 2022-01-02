import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd';

interface ItemData {
  AuditYear: number;
  AuditType: string;
  QRId: string;
  VendorName: string;
  DealNbr: string;
  CurrentQRStatus: string;
  Currentlyassignto: string;
  LastModifiedby: string;
  LastModifieddate: string,
  LastActionPerform: string,
  Remarks:string
}

interface ColumnItem {
  name: string;
  sortOrder?: NzTableSortOrder;
  sortFn?: NzTableSortFn;
  listOfFilter?: NzTableFilterList;
  filterFn?: NzTableFilterFn;
  filterMultiple?: boolean;
  sortDirections?: NzTableSortOrder[];
}


@Component({
  selector: 'app-assign-history',
  templateUrl: './assign-history.component.html'
})
export class AssignHistoryComponent implements OnInit {


  supplier_value = '';
  supplier_list =  [
    { label: "Audit Type 1", value: "Audit Type 1" },
    { label: "Audit Type 2", value: "Audit Type 2" },
  ]

  listOfData: ItemData[] = [
    {
      AuditYear: 2020,
      AuditType: 'Volume Rebate',
      QRId: '5678',
      VendorName: 'HUL',
      DealNbr: 'DL3678',
      CurrentQRStatus: 'Under Review',
      Currentlyassignto: 'Cris',
      LastModifiedby: 'Amit',
      LastModifieddate: '12/14/2021',
      LastActionPerform: 'Assign to auditor',
      Remarks: 'Assigning to Cris'
    },
    {
      AuditYear: 2020,
      AuditType: 'Volume Rebate',
      QRId: '5678',
      VendorName: 'HUL',
      DealNbr: 'DL3678',
      CurrentQRStatus: 'QA Review',
      Currentlyassignto: 'David',
      LastModifiedby: 'Cris',
      LastModifieddate: '12/16/2021',
      LastActionPerform: 'Send for QA review',
      Remarks: 'Ready for QA review'
    }
  ];

  listOfColumns: ColumnItem[] = [

    {
      name: 'Audit Year',
    },
    {
      name: 'Audit Type',
    },
    {
      name: 'QR Id',
    },
    {
      name: 'Vendor Name',
    },
    {
      name: 'Deal Number',
    },
    {
      name: 'Current QR Status',
    },
    {
      name: 'Currently assign to',
    },

    {
      name: ' Last Modified by',
    },



    {
      name: 'Last Modified Date',
    },

    {
      name: 'Last Action Perform',
    },
    {
      name: 'Remarks',
    },
  ]



  constructor() { }

  ngOnInit(): void {

  }
}
