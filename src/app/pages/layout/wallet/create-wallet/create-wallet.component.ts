import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-create-wallet',
  templateUrl: './create-wallet.component.html',
  styleUrls: ['./create-wallet.component.scss']
})
export class CreateWalletComponent implements OnInit {
  user:any={};
  selectedTab:any;
  walletList:any=[];
  today: any=new Date().toISOString();
  displayedColumns = ['mobile', 'name', 'date', 'createdBy', 'verifiedBy', 'action'];
  dataSource = ELEMENT_DATA;
  constructor(
    public global: GlobalService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.global.pageTitle = 'Wallet Management';
    this.setTabValue(0);
    this.initWalletList();
  }
  async showAlert() {
    this.alertService.showSuccessAlert('Success!', 'Wallet created successfully.');
  }
  setTabValue(ev:any) {
    console.log(ev)
    this.selectedTab=ev;
  }
  initWalletList(){
    this.walletList = [
      {mobile: '2052102030', name: 'Suryakant Kumar', date: this.today, createdBy: 'Admin', verifiedBy: 'Admin'},
      {mobile: '2052102032', name: 'Ashutosh Kumar', date: this.today, createdBy: 'Admin', verifiedBy: 'Admin'},
      {mobile: '2052102033', name: 'Manish Kumar', date: this.today, createdBy: 'Admin', verifiedBy: 'Admin'},
      {mobile: '2052102034', name: 'Pankaj Kumar', date: this.today, createdBy: 'Admin', verifiedBy: 'Admin'},
      {mobile: '2052102035', name: 'Sajnay Kumar', date: this.today, createdBy: 'Admin', verifiedBy: 'Admin'},
      {mobile: '2052102036', name: 'Rahul Kumar', date: this.today, createdBy: 'Admin', verifiedBy: 'Admin'},
      {mobile: '2052102037', name: 'Deepak Kumar', date: this.today, createdBy: 'Admin', verifiedBy: 'Admin'},
      {mobile: '2052102038', name: 'Yash Kumar', date: this.today, createdBy: 'Admin', verifiedBy: 'Admin'},
      {mobile: '2052102039', name: 'Rakesh Kumar', date: this.today, createdBy: 'Admin', verifiedBy: 'Admin'},
      {mobile: '2052102040', name: 'Sandhu Kumar', date: this.today, createdBy: 'Admin', verifiedBy: 'Admin'},
    ];
  }
}
const ELEMENT_DATA: WalletDetail[] = [];

export interface WalletDetail {
  mobile: string;
  name: string;
  date: number;
  createdBy: string;
  verifiedBy: string;
}
