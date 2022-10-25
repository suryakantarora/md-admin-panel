import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-register-merchant',
  templateUrl: './register-merchant.component.html',
  styleUrls: ['./register-merchant.component.scss']
})
export class RegisterMerchantComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['Ashutosh', 'Manish', 'Pankaj', 'Suryakant', 'Ritunjay', 'Chandrakant', 'Shashikant'];
  filteredOptions: Observable<string[]> | undefined;
  billers:any=[];
  today: any = new Date().toISOString();
  constructor() { }
  ngOnInit() {
    this.initBillers();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  initBillers() {
    this.billers = [
      {id: this.billerId(), name: 'Suryakant Kumar', business:'Royal Kitchen Lao', date: this.today},
      {id: this.billerId(), name: 'Bablu Kumar', business:'Roti House Lao', date: this.today},
      {id: this.billerId(), name: 'Rashmi Kumari', business:'Rashmi Kitchen', date: this.today},
      {id: this.billerId(), name: 'Sujeet Kumar', business:'Najim Indian Resturant', date: this.today},
      {id: this.billerId(), name: 'Poey S', business:'Bo Ice Co. Lao.', date: this.today},
    ];
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  billerId() {
    const min=1000000000;
    const max=9999999999;
    return 'MERCH' + Math.floor(min + Math.random()*(max - min + 1))
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
