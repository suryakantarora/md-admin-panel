import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-txn-monitor',
  templateUrl: './txn-monitor.component.html',
  styleUrls: ['./txn-monitor.component.scss']
})
export class TxnMonitorComponent implements OnInit {
  pageStatus=1;
  today= new Date().toISOString();
  txnList:any=[];
  constructor(
    public global:GlobalService
  ) { }

  ngOnInit(): void {
    this.initTxnList();
  }
  initTxnList() {
    this.txnList = [
      {txnDate: this.today, txnRef: this.randomNumber(), txnStatus: this.txnStatus(), txnAmount: this.getAmount()},
      {txnDate: this.today, txnRef: this.randomNumber(), txnStatus: this.txnStatus(), txnAmount: this.getAmount()},
      {txnDate: this.today, txnRef: this.randomNumber(), txnStatus: this.txnStatus(), txnAmount: this.getAmount()},
      {txnDate: this.today, txnRef: this.randomNumber(), txnStatus: this.txnStatus(), txnAmount: this.getAmount()},
      {txnDate: this.today, txnRef: this.randomNumber(), txnStatus: this.txnStatus(), txnAmount: this.getAmount()},
      {txnDate: this.today, txnRef: this.randomNumber(), txnStatus: this.txnStatus(), txnAmount: this.getAmount()},
      {txnDate: this.today, txnRef: this.randomNumber(), txnStatus: this.txnStatus(), txnAmount: this.getAmount()},
      {txnDate: this.today, txnRef: this.randomNumber(), txnStatus: this.txnStatus(), txnAmount: this.getAmount()},
      {txnDate: this.today, txnRef: this.randomNumber(), txnStatus: this.txnStatus(), txnAmount: this.getAmount()},
      {txnDate: this.today, txnRef: this.randomNumber(), txnStatus: this.txnStatus(), txnAmount: this.getAmount()},
      {txnDate: this.today, txnRef: this.randomNumber(), txnStatus: this.txnStatus(), txnAmount: this.getAmount()},
      {txnDate: this.today, txnRef: this.randomNumber(), txnStatus: this.txnStatus(), txnAmount: this.getAmount()},
      {txnDate: this.today, txnRef: this.randomNumber(), txnStatus: this.txnStatus(), txnAmount: this.getAmount()},
      {txnDate: this.today, txnRef: this.randomNumber(), txnStatus: this.txnStatus(), txnAmount: this.getAmount()},
      {txnDate: this.today, txnRef: this.randomNumber(), txnStatus: this.txnStatus(), txnAmount: this.getAmount()},
      {txnDate: this.today, txnRef: this.randomNumber(), txnStatus: this.txnStatus(), txnAmount: this.getAmount()},
    ];
  }
  randomNumber() {
    const min=1000000000;
    const max=9999999999;
    return 'TXNREF' + Math.floor(min + Math.random()*(max - min + 1))
  }
  txnStatus() {
    const min=1;
    const max=10;
    if((Math.floor(min + Math.random()*(max - min + 1))) % 2 ==1) {
      return 'F';
    } else {
      return 'S';
    }
  }
  getAmount() {
    const min=10;
    const max=99999;
    return Math.floor(min + Math.random()*(max - min + 1))
  }
}
