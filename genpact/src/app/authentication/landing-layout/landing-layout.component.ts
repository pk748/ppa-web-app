import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formatDistance } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd';
declare var $: any;

@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
})
export class LandingLayoutComponent implements OnInit {


  radioValue;
  NextBtnDisable:boolean = true;

  listOfData = []


  disable_next_btn: boolean = true
  constructor(private router: Router,
              private message: NzMessageService
  ) { }


  ngOnInit(): void {
    var elementData = document.getElementById('data');
    var elementClaim = document.getElementById('claim');
    var elementReports = document.getElementById('reports');
    var elemenAudit = document.getElementById('audit');
    elementData.classList.remove("cardActive");
    elementClaim.classList.remove("cardActive");
    elementReports.classList.remove("cardActive");
    elemenAudit.classList.add("cardActive");

    this.listOfData.push({
      name: `Volume Rebet`,
    },
      {
        name: `New Store`,
      },
      {
        name: `Deducted Co-op`,
      },

      {
        name: `Placeholder`,
      },
      {
        name: `demo 3`,
      },
    )
  }

  showNav(show) {

  }

  selectPPA(e) {

    this.listOfData = []
    console.log(e)
    if (e == "data") {

      var elementData = document.getElementById('data');
      var elementClaim = document.getElementById('claim');
      var elementReports = document.getElementById('reports');
      var elemenAudit = document.getElementById('audit');
      elementData.classList.add("cardActive");
      elementClaim.classList.remove("cardActive");
      elementReports.classList.remove("cardActive");
      elemenAudit.classList.remove("cardActive");

      this.listOfData.push({
        name: `Volume Rebet`,
      },
        {
          name: `New Store`,
        },
        {
          name: `Deducted Co-op`,
        },

        {
          name: `Placeholder`,
        },
      )
    }
    else if (e == "claim") {
      var elementData = document.getElementById('data');
      var elementClaim = document.getElementById('claim');
      var elementReports = document.getElementById('reports');
      var elemenAudit = document.getElementById('audit');
      elementClaim.classList.add("cardActive");
      elementData.classList.remove("cardActive");
      elementReports.classList.remove("cardActive");
      elemenAudit.classList.remove("cardActive");


      this.listOfData.push({
        name: `claim one`,
      },
        {
          name: `claim two`,
        },
        {
          name: `Placeholder`,
        },
        {
          name: `Deducted Co-op`,
        })
    }
    else if (e == "reports") {

      var elementData = document.getElementById('data');
      var elementClaim = document.getElementById('claim');
      var elementReports = document.getElementById('reports');
      var elemenAudit = document.getElementById('audit');
      elementReports.classList.add("cardActive");
      elementData.classList.remove("cardActive");
      elementClaim.classList.remove("cardActive");
      elemenAudit.classList.remove("cardActive");

      this.listOfData.push({
        name: `Reports one`,
      },
        {
          name: `Reports two`,
        },
        {
          name: `Placeholder`,
        },
        {
          name: `Deducted Co-op`,
        })
    }
    else if (e == "audit") {

      var elementData = document.getElementById('data');
      var elementClaim = document.getElementById('claim');
      var elementReports = document.getElementById('reports');
      var elemenAudit = document.getElementById('audit');
      elemenAudit.classList.add("cardActive");
      elementData.classList.remove("cardActive");
      elementReports.classList.remove("cardActive");
      elementClaim.classList.remove("cardActive");

      this.listOfData.push({
        name: `Audit one`,
      },
        {
          name: `Audit two`,
        },
        {
          name: `Placeholder`,
        },
        {
          name: `Deducted Co-op`,
        })
    }

  }

  changeAudiType(e) {
    this.radioValue = e;
    console.log(e, "hhh1")

    this.NextBtnDisable = false;
  }

  sendRequest(): void {

    console.log(this.radioValue, "hhh")
    if ( this.radioValue !== undefined) {
      this.router.navigate(['/dashboard/home']);
    }
    else{
      this.NextBtnDisable = false;
      // this.message.create('error', `Please select Audit type!`);
    }


  }

  LogoutUser(){
    this.router.navigate(['/authentication/login']);
  }
}

