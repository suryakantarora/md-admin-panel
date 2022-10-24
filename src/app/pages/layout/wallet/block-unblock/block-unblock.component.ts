import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-block-unblock',
  templateUrl: './block-unblock.component.html',
  styleUrls: ['./block-unblock.component.scss']
})
export class BlockUnblockComponent implements OnInit {
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
  today:any = new Date().toISOString();
  constructor(
    private alert:AlertService,
    public global:GlobalService) { }

  ngOnInit(): void {
  }
  validateWallet() {
    if(!this.walletNumber || this.walletNumber.length<10) {
      this.alert.showAlert('Alert!','Invalid wallet number');
    } else {
      this.pageStatus=2;
    }
  }
  blockUser() {
    if (!this.wallet.description) {
      this.alert.showAlert('Alert!','Description cannot be left empty.');
    } else {
      this.alert.showSuccessAlert('Success!', 'User blocked successfully');
    }
  }
}
