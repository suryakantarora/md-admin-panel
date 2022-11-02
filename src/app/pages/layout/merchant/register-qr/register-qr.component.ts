import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register-qr',
  templateUrl: './register-qr.component.html',
  styleUrls: ['./register-qr.component.scss']
})
export class RegisterQrComponent implements OnInit {
  merchant={
    id: 'MERCH00000001', name: 'Suryakant Kumar', mobile:'9430868694', email:'surya@cgs.com',
  };
  qrList: any = [];
  pageStatus:any='QRLIST';
  today = new Date().toISOString();

  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;
  showQr:any=5;
  showQrList:any=[];
  mccList: { mccId: string; mccName: string; }[] | undefined;
  constructor(
    public global: GlobalService
  ) {
    this.options=this.global.nameList;
  }

  ngOnInit(): void {
    this.initQRList();
    this.initMCC();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  initMCC(){
    this.mccList=[
      {mccId: 'MCC001', mccName: 'Medical & Dental Lab'},
      {mccId: 'MCC002', mccName: 'Tax Payments - Government Agencies'},
      {mccId: 'MCC003', mccName: 'Agricultural Cooperative'},
      {mccId: 'MCC004', mccName: 'General Contractors'},
      {mccId: 'MCC005', mccName: 'Electrical Contractors'},
      {mccId: 'MCC006', mccName: 'Special Trade Contractors'},
      {mccId: 'MCC007', mccName: 'Travel Agencies, Tour Operators'},
      {mccId: 'MCC008', mccName: 'Computer Network Services'},
      {mccId: 'MCC009', mccName: 'Money Transfer Agent'},
      {mccId: 'MCC010', mccName: 'Metal Service Centers'},
      {mccId: 'MCC011', mccName: 'Hardware Stores'},
      {mccId: 'MCC012', mccName: 'Duty Free Stores'},
      {mccId: 'MCC013', mccName: 'Departmental Stores'},
      {mccId: 'MCC014', mccName: 'Motor Shop & Dealers'},
    ];
  }
  initQRList() {
    this.qrList = [
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[0], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[1], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[2], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[3], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[4], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[5], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[6], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[7], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[8], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[9], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[10], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[11], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[12], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[13], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[14], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[15], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[16], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[17], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[18], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[19], createdDate: this.getDate(), status: this.qrStatus()},
      { qrId: this.getQRId(), merchantId: this.getMerchantId(), merchantName: this.global.nameList[20], createdDate: this.getDate(), status: this.qrStatus()},
    ];
    this.initShowQrList(5);
    this.showQr=5;

  }
  initShowQrList(max: number) {
    this.showQrList=[];
    for(let i=0;i<max;i++) {
      this.showQrList[i]=this.qrList[i];
    }
  }
  getDate() {
    return new Date().toISOString();
  }
  getQRId() {
    const min = 1000000000;
    const max = 9999999999;
    return 'QR' + Math.floor(min + Math.random() * (max - min + 1))
  }
  getMerchantId() {
    const min = 1000000000;
    const max = 9999999999;
    return 'MERCH' + Math.floor(min + Math.random() * (max - min + 1))
  }
  qrStatus() {
    const min = 1;
    const max = 10;
    if ((Math.floor(min + Math.random() * (max - min + 1))) % 2 == 1) {
      return 'P';
    } else {
      return 'A';
    }
  }

}
