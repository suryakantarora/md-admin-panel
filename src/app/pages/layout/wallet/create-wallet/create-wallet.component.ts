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
  constructor(
    public global: GlobalService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.global.pageTitle = 'Wallet Management';
  }
  async showAlert() {
    this.alertService.showSuccessAlert('Success!', 'Wallet created successfully.');
  }
}
