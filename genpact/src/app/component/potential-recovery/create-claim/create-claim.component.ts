import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService, NzUploadFile } from 'ng-zorro-antd';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-create-claim',
  templateUrl: './create-claim.component.html',
})
export class CreateClaimComponent implements OnInit {

  check_include_auth:boolean = true;

  supplier_value = 'Auditor_Id';

  supplier_list =  [
    { label: "1234", value: "Auditor_Id" },
    { label: "2356", value: "2356" },
  ]

  claim_holder_value =  'new_store';
  claim_holder_list =  [
    { label: "New Store", value: "new_store" },
    { label: "New Store o1", value: "new_store_01" },
    { label: "New Store o2", value: "new_store_02" },
  ]

  claim_type_value =  'john_Deo';
  claim_type_list =  [
    { label: "John Deo", value: "john_Deo" },
    { label: "Cris", value: "cris" },
    { label: "David", value: "davi" },
  ]

  root_causes_value =  'john_Deo';
  root_causes_list =  [
    { label: "Pending Approval in the commercial area", value: "john_Deo" },
    { label: "Completed in the commercial area", value: "cris" },
    { label: "Cancelled Approval in the commercial area", value: "davi" },
  ]

  claim_reason_value =  'john_Deo';
  claim_reason_list =  [
    { label: "1234", value: "john_Deo" },
    { label: "342342", value: "cris" },
    { label: "4344", value: "davi" },
  ]

  wm_claim_reason_value =  'john_Deo';
  wm_claim_reason_list =  [
    { label: "1234", value: "john_Deo" },
    { label: "45345", value: "cris" },
    { label: "54354", value: "davi" },
  ]

  format_name_value =  'john_Deo';
  format_name_list =  [
    { label: "Format Name", value: "john_Deo" },
    { label: "Format Name 01", value: "cris" },
    { label: "Format Name 02", value: "davi" },
  ]


  orginal_claim_amt_value =  'john_Deo';
  orginal_claim_amt_list =  [
    { label: "$24567", value: "john_Deo" },
    { label: "$34324", value: "cris" },
    { label: "$343", value: "davi" },
  ]


  currency_value =  'john_Deo';
  currency_list =  [
    { label: "CLP", value: "john_Deo" },
    { label: "Rupees", value: "cris" },
    { label: "USD", value: "davi" },
  ]


  uploading = false;
  fileList: NzUploadFile[] = [];

  constructor(private http: HttpClient, private msg: NzMessageService) {}


  ngOnInit(): void {
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  handleUpload(): void {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    this.uploading = true;
    // You can use any AJAX library you like
    const req = new HttpRequest('POST', 'https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
      // reportProgress: true
    });
    this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        () => {
          this.uploading = false;
          this.fileList = [];
          this.msg.success('upload successfully.');
        },
        () => {
          this.uploading = false;
          this.msg.error('upload failed.');
        }
      );
  }


}
