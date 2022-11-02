import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-config-tenure',
  templateUrl: './config-tenure.component.html',
  styleUrls: ['./config-tenure.component.scss']
})
export class ConfigTenureComponent implements OnInit {
  loanTenure: any = [];
  loanTypes: any = [];
  loanRange: any = [];
  tenureList: any = [];
  filterTenureList: any = [];
  selectedTab = 0;
  rowCount = 5;
  today: any = new Date().toISOString();
  constructor(
    public global: GlobalService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.initLoanTypes();
    this.initLoanRange();
    this.initLoanTenure();
    this.initExistingTenure();
  }

  setTabValue(ev: any) {
    console.log(ev)
    this.selectedTab = ev;
  }
  initLoanTypes() {
    this.loanTypes = [
      { id: 1, name: 'Personal Loan' },
      { id: 2, name: 'Two Wheeler Loan' },
      { id: 3, name: 'Car Loan' },
      { id: 4, name: 'Gold Loan' },
      { id: 5, name: 'Property Loan' },
      { id: 6, name: 'Loan against credit card' },
    ];
  }
  initLoanRange() {
    this.loanRange = [
      { min: 0, max: 1000 }, { min: 1001, max: 2000 }, { min: 2001, max: 3000 }, { min: 3001, max: 4000 },
      { min: 4001, max: 5000 }, { min: 5001, max: 6000 }, { min: 6001, max: 7000 }, { min: 7001, max: 8000 },
      { min: 8001, max: 9000 }, { min: 9001, max: 10000 }, { min: 10001, max: 20000 }, { min: 20001, max: 40000 },
      { min: 40001, max: 80000 }, { min: 80001, max: 100000 },
    ];
  }
  initLoanTenure() {
    this.loanTenure = [
      { id: 1, tenure: '6 Months' }, { id: 2, tenure: '12 Months' },
      { id: 3, tenure: '24 Months' }, { id: 4, tenure: '36 Months' },
      { id: 5, tenure: '48 Months' }, { id: 6, tenure: '60 Months' },
    ];
  }
  initExistingTenure() {
    this.tenureList = [
      { id: this.getId(), type: 'G', amount: this.getAmt(), currency: 'USD', tenure: this.getTenure(), rate: this.getRate(), date: this.today },
      { id: this.getId(), type: 'H', amount: this.getAmt(), currency: 'USD', tenure: this.getTenure(), rate: this.getRate(), date: this.today },
      { id: this.getId(), type: 'E', amount: this.getAmt(), currency: 'USD', tenure: this.getTenure(), rate: this.getRate(), date: this.today },
      { id: this.getId(), type: 'P', amount: this.getAmt(), currency: 'USD', tenure: this.getTenure(), rate: this.getRate(), date: this.today },
      { id: this.getId(), type: 'P', amount: this.getAmt(), currency: 'USD', tenure: this.getTenure(), rate: this.getRate(), date: this.today },
      { id: this.getId(), type: 'P', amount: this.getAmt(), currency: 'USD', tenure: this.getTenure(), rate: this.getRate(), date: this.today },
      { id: this.getId(), type: 'P', amount: this.getAmt(), currency: 'USD', tenure: this.getTenure(), rate: this.getRate(), date: this.today },
      { id: this.getId(), type: 'G', amount: this.getAmt(), currency: 'USD', tenure: this.getTenure(), rate: this.getRate(), date: this.today },
      { id: this.getId(), type: 'H', amount: this.getAmt(), currency: 'USD', tenure: this.getTenure(), rate: this.getRate(), date: this.today },
      { id: this.getId(), type: 'H', amount: this.getAmt(), currency: 'USD', tenure: this.getTenure(), rate: this.getRate(), date: this.today },
      { id: this.getId(), type: 'E', amount: this.getAmt(), currency: 'USD', tenure: this.getTenure(), rate: this.getRate(), date: this.today },
      { id: this.getId(), type: 'P', amount: this.getAmt(), currency: 'USD', tenure: this.getTenure(), rate: this.getRate(), date: this.today },
      { id: this.getId(), type: 'C', amount: this.getAmt(), currency: 'USD', tenure: this.getTenure(), rate: this.getRate(), date: this.today },
    ];
    this.initFilterTenureList(this.rowCount);
  }
  initFilterTenureList(max:number) {
    if(max<=this.tenureList.length) {
      this.filterTenureList=[];
      for(let i=0;i<max;i++){
        this.filterTenureList[i]= this.tenureList[i];
      }
    }
  }
  getLoanType(type: string) {
    if (type === 'G') {
      return 'Gold Loan';
    } else if (type === 'E') {
      return 'Education Loan';
    } else if (type==='P') {
      return 'Personal Loan';
    } else if (type==='H') {
      return 'Home Loan'
    } else {
      return 'Loan against credit card'
    }
  }
  getRate() {
    const min = 1;
    const max = 10;
    return Math.floor(min + Math.random() * (max - min + 1))
  }
  getTenure() {
    const min = 6;
    const max = 60;
    return Math.floor(min + Math.random() * (max - min + 1))
  }
  getAmt() {
    const min = 1000000;
    const max = 9999999;
    return Math.floor(min + Math.random() * (max - min + 1))
  }
  getId() {
    const min = 1000000000;
    const max = 9999999999;
    return 'FINO' + Math.floor(min + Math.random() * (max - min + 1))
  }
}
