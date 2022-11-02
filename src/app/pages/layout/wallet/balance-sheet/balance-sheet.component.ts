import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert/alert.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.scss']
})
export class BalanceSheetComponent implements OnInit {
  dateRange = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  fromDate:any;
  toDate:any;
  pageStatus=1;
  openingBalance:any;
  closingBalance:any;
  sheetList: any = [];
  filterSheetList: any = [];
  today: any = new Date().toISOString();
  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;
  rowCount=5;
  constructor(
    public global: GlobalService,
    private alert:AlertService
  ) { }

  ngOnInit(): void {
    this.openingBalance=this.getAmount();
    this.closingBalance=this.getAmount();
    this.initSheetList();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  onChangeDate(dateType:string, type: string, event: MatDatepickerInputEvent<Date>) {
    console.log('dateType: ' + dateType);
    console.log('type: ' + type);
    console.log('Date: ' + event.target.value);
    if(dateType==='FROM') {
      this.fromDate = event.target.value;
    } else {
      this.toDate = event.target.value;
    }
  }
  initSheetList() {
    this.sheetList = [
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
      { ref: this.getRef(), date: this.today, currency: '$', custAcc: this.getAccNum(), poolAcc: this.getAccNum(), provider: 'Fino Tech', amount: this.getAmount(), txnType: this.getTxnType()},
    ];
    this.initFilterSheetList(this.rowCount);
    this.initOption();
  }
  initOption() {
    for(let i=0;i<this.sheetList.length;i++) {
      this.options.push(this.sheetList[i].ref);
    }
  }
  initFilterSheetList(max:any) {
      if(max<=this.sheetList.length) {
        this.filterSheetList=[];
        for(let i=0;i<max;i++) {
          this.filterSheetList[i]=this.sheetList[i];
        }
      }
  }
  getRef() {
    const min = 1000000000;
    const max = 9999999999;
    return 'WBSREF' + Math.floor(min + Math.random() * (max - min + 1));
  }
  getAccNum() {
    const min = 100000000000;
    const max = 999999999999;
    return '' + Math.floor(min + Math.random() * (max - min + 1));
  }
  getAmount() {
    const min = 1000;
    const max = 99999;
    return '' + Math.floor(min + Math.random() * (max - min + 1));
  }
  getTxnType() {
    const min=100;
    const max=10000000;
    if((Math.floor(min + Math.random()*(max - min + 1))) % 2 ==1) {
      return 'DR';
    } else {
      return 'CR';
    }
  }
  validateDate() {
    if(!this.fromDate){
      this.alert.showToast('From date cannot be left empty.');
    } else if(!this.toDate){
      this.alert.showToast('To date cannot be left empty.');
    } else {
      this.pageStatus=2;
    }
  }
}
