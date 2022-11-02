import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.scss']
})
export class LoanRequestComponent implements OnInit {
  loanList:any=[];
  filterLoanList:any=[];
  rowCount=5;
  today: any= new Date().toISOString();
  pageStatus:any=1;
  loanDetail: any;
  readOnly: boolean=false;
  constructor(
    public global:GlobalService,
    private alert:AlertService
  ) { }

  ngOnInit(): void {
    this.initLoanList();
  }
  initLoanList(){
    this.loanList = [
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'M', name: this.global.nameList[0], type: 'Personal Loan', },
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'A', name: this.global.nameList[1], type: 'Home Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'B', name: this.global.nameList[2], type: 'Gold Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'M', name: this.global.nameList[3], type: 'Personal Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'A', name: this.global.nameList[4], type: 'Gold Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'M', name: this.global.nameList[5], type: 'Personal Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'M', name: this.global.nameList[6], type: 'Home Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'B', name: this.global.nameList[7], type: 'Personal Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'M', name: this.global.nameList[8], type: 'Personal Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'A', name: this.global.nameList[9], type: 'Personal Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'M', name: this.global.nameList[10], type: 'Personal Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'M', name: this.global.nameList[11], type: 'Personal Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'M', name: this.global.nameList[12], type: 'Personal Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'M', name: this.global.nameList[13], type: 'Personal Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'M', name: this.global.nameList[14], type: 'Personal Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'M', name: this.global.nameList[15], type: 'Personal Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'M', name: this.global.nameList[16], type: 'Personal Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'M', name: this.global.nameList[17], type: 'Personal Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'M', name: this.global.nameList[18], type: 'Personal Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'M', name: this.global.nameList[19], type: 'Personal Loan'},
      {id:this.getId(), amt: this.getAmt(), date: this.today, mode: 'M', name: this.global.nameList[20], type: 'Personal Loan'},
    ];
    this.initFilterLoanList(this.rowCount);
  }
  initFilterLoanList(max:number) {
    if(max<=this.loanList.length) {
      this.filterLoanList=[];
      for(let i=0;i<max;i++){
        this.filterLoanList[i]=this.loanList[i]
      }
    }
  }
  getMode(mode:string): string {
    if(mode==='M') {
      return 'Mobile App';
    } else if(mode==='A') {
      return 'Agent';
    } else {
      return 'Branch';
    }
  }
  getId() {
    const min=1000000000;
    const max=9999999999;
    return 'FINO' + Math.floor(min + Math.random()*(max - min + 1));
  }
  getAmt() {
    const min=10000;
    const max=9999999;
    return 'USD ' + this.global.formatAmount(Math.floor(min + Math.random()*(max - min + 1)));
  }
  showDetail(loan:any, readonly:boolean) {
    this.loanDetail=loan;
    this.pageStatus=2;
    this.readOnly=readonly;
  }
  submit(value:number) {
    if(value==1) {
      this.alert.showSuccessAlert('Success!', 'Loan request submitted for internal verfication with reference number: ' + this.getId());
    } else {
      this.alert.showAlert('Alert!', 'Loan request rejected with reference number: ' + this.getId());
    }
  }
}
