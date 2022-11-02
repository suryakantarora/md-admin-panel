import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-mcc',
  templateUrl: './mcc.component.html',
  styleUrls: ['./mcc.component.scss']
})
export class MccComponent implements OnInit {
  mccList: any=[];
  pageStatus=1;
  constructor(
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.initMcc();
  }
  initMcc() {
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
  showAlert() {
    this.alert.showSuccessAlert('Success!', 'MCC Modified successfully');
  }
}
