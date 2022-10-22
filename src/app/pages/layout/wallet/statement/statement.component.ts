import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {
  wallet:any={
    name:'Suryakant Kumar',
    ballance: '10.00',
    currency: '$',
    amount: '',
    status:'Active',
    description:'',
    dateCreated: new Date().toISOString()
  };
  walletNumber:any='';
  pageStatus:any=1;
  walletStatement:any=[];
  today:any=new Date().toISOString();
  currency='USD';
  constructor(
    private alert:AlertService,
    public global:GlobalService) { }

  ngOnInit(): void {
    this.initStatement();
  }
  validateWallet() {
    if(!this.walletNumber || this.walletNumber.length<10) {
      this.alert.showAlert('Alert!','Invalid wallet number');
    } else {
      this.pageStatus=2;
    }
  }
  initStatement() {
    this.walletStatement=[
      {txnDate: this.today, mobile: '2052592794', reference: 'FINOREF9317498732', amount: this.generateRandom(500), txnType:'DR' },
      {txnDate: this.today, mobile: '2052592794', reference: 'FINOREF9317498732', amount: this.generateRandom(500), txnType:'CR' },
      {txnDate: this.today, mobile: '2052592794', reference: 'FINOREF9317498732', amount: this.generateRandom(500), txnType:'CR' },
      {txnDate: this.today, mobile: '2052592794', reference: 'FINOREF9317498732', amount: this.generateRandom(500), txnType:'DR' },
      {txnDate: this.today, mobile: '2052592794', reference: 'FINOREF9317498732', amount: this.generateRandom(500), txnType:'DR' },
      {txnDate: this.today, mobile: '2052592794', reference: 'FINOREF9317498732', amount: this.generateRandom(500), txnType:'DR' },
      {txnDate: this.today, mobile: '2052592794', reference: 'FINOREF9317498732', amount: this.generateRandom(500), txnType:'CR' },
      {txnDate: this.today, mobile: '2052592794', reference: 'FINOREF9317498732', amount: this.generateRandom(500), txnType:'CR' },
      {txnDate: this.today, mobile: '2052592794', reference: 'FINOREF9317498732', amount: this.generateRandom(500), txnType:'CR' },
      {txnDate: this.today, mobile: '2052592794', reference: 'FINOREF9317498732', amount: this.generateRandom(500), txnType:'CR' },
    ];
  }
  generateRandom(max:any) {
    const min=100;
    return Math.floor(min + Math.random()*(max - min + 1))
  }
}
