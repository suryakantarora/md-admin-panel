import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';

export interface ExchangeCurrency {
  curName: string;
  curCode: string;
  buyRate: number;
  sellRate: number;
  configBy: string;
  authBy: string;
}

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss'],
})
export class RatesComponent implements OnInit {
  newExchange: boolean = false;
  buttonTitle: string = 'Add New Rate';

  exchangeList: ExchangeCurrency[] = [];

  constructor(public globalDialog: AlertService) {}

  ngOnInit(): void {
    this.initExchangeRate();
  }
  viewDetails() {
    this.newExchange = !this.newExchange;

    if (this.newExchange) {
      this.buttonTitle = 'Go Back';
    } else {
      this.buttonTitle = 'Add New Rate';
    }
  }

  showAlert(): void {
    this.viewDetails();
    this.globalDialog.showSuccessAlert('Success!', 'New Exchange rate added successfully')
  }

  initExchangeRate(): void {
    this.exchangeList=[
      { curName: 'INR', curCode: '425', buyRate: 240, sellRate: 324, configBy: 'Ritunjay', authBy: 'Arunjay', },
      { curName: 'USD', curCode: '480', buyRate: 125, sellRate: 130, configBy: 'Suryakant', authBy: 'DNR', },
      { curName: 'LAK', curCode: '840', buyRate: 250, sellRate: 240, configBy: 'Selva Prabhu', authBy: 'Kavitha',},
      { curName: 'THB', curCode: '780', buyRate: 652, sellRate: 670, configBy: 'Abhishek', authBy: 'Nitesh', }
    ];
  }
}
