import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion = new MatAccordion;
  panelOpenState = false;
  menuList: any = [];
  activeMenu: string = '';
  subActiveMenu: string = '';
  constructor(
    private global: GlobalService
  ) { }

  ngOnInit(): void {
    this.initMenuList();
  }
  setHeaderName(name:string){
    this.global.pageTitle=name
  }
  checkActiveMenu(id: string, name:string) {
    this.global.pageTitle=name
    this.activeMenu = id;
  }
  initMenuList() {
    this.menuList = [
      {
        menuId: 'M00', active: false, name: 'Dashboard', icon: 'dashboard',
        child: [
          { menuId: 'SM0001', active: false, name: 'Analytics Dashboard', link: 'analytics',},
          { menuId: 'SM0002', active: false, name: 'Executive Dashboard', link: 'executive', },
        ]
      },
      {
        menuId: 'M01', active: false, name: 'Wallet Management', icon: 'account_balance_wallet',
        child: [
          { menuId: 'SM1000', active: false, name: 'Wallet Creation', link: 'create-wallet', },
          { menuId: 'SM1001', active: false, name: 'Add Money',  link: 'add-money',},
          { menuId: 'SM1002', active: false, name: 'Fund Transfer', link: 'transfer', },
          { menuId: 'SM1003', active: false, name: 'Check Statement', link: 'statement', },
          { menuId: 'SM1004', active: false, name: 'Balance Sheet', link: 'balance-sheet', },
          { menuId: 'SM1005', active: false, name: 'Wallet Withdrawal', link: 'withdrawal', },
          { menuId: 'SM1006', active: false, name: 'Wallet Block/Unblock', link: 'block-unblock', },
          { menuId: 'SM1007', active: false, name: 'Transaction Monitoring', link: 'txn-monitor', },
        ]
      }, {
        menuId: 'M02', active: false, name: 'Merchant Management', icon: 'store',
        child: [
          { menuId: 'SM2001', active: false, name: 'Merchant Registration', link: 'register-merchant' },
          { menuId: 'SM2002', active: false, name: 'QR Code Registration', link: 'register-qr' },
          { menuId: 'SM2003', active: false, name: 'Merchant grouping', link: 'merchant-grouping' },
          { menuId: 'SM2004', active: false, name: 'Biller Management', link: 'manage-billers' },
          { menuId: 'SM2005', active: false, name: 'Topup Wallet', link: 'topup-wallet' },
          { menuId: 'SM2006', active: false, name: 'Promotion updates', link: 'merchant-promotion' },
        ]
      }, {
        menuId: 'M03', active: false, name: 'Loan Management', icon: 'real_estate_agent',
        child: [
          { menuId: 'SM3001', active: false, name: 'Loan Request/apply' },
          { menuId: 'SM3002', active: false, name: 'Loan sanction' },
          { menuId: 'SM3003', active: false, name: 'Loan Configuration' },
          { menuId: 'SM3004', active: false, name: 'Loan Repayment' },
          { menuId: 'SM3005', active: false, name: 'Loan Disbursement' },
          { menuId: 'SM3006', active: false, name: 'Loan Closure' },
        ]
      }, {
        menuId: 'M04', active: false, name: 'Biller Management', icon: 'social_distance',
        child: [
          { menuId: 'SM4001', active: false, name: 'Add New Biller', link:'add-biller' },
          { menuId: 'SM4002', active: false, name: 'Manage Billers', link:'manage-biller' },
        ]
      }, {
        menuId: 'M05', active: false, name: 'Exchange Rate', icon: 'currency_exchange', child: []
      }, {
        menuId: 'M08', active: false, name: 'Reports', icon: 'summarize',
        child: [
          { menuId: 'SM8001', active: false, name: 'Loan Reports' },
          { menuId: 'SM8002', active: false, name: 'Transaction reports' },
          { menuId: 'SM8003', active: false, name: 'Merchant commission reports' },
          { menuId: 'SM8004', active: false, name: 'Transaction summary report' },
          { menuId: 'SM8005', active: false, name: 'Loyalty reports' },
        ]
      }, {
        menuId: 'M09', active: false, name: 'User & Profile', icon: 'account_circle', child: [
          {menuId: 'SM9001', active: false, name: 'Profile Management', link: 'profile-management'},
          {menuId: 'SM9002', active: false, name: 'User Management', link: 'user-management'},
        ]
      }, {
        menuId: 'M10', active: false, name: 'Others', icon: 'dynamic_feed',child:[
          {menuId: 'SM10001',active: false, name: 'News', link: 'news'},
          {menuId: 'SM10002',active: false, name: 'Promotions', link: 'promotions'},
          {menuId: 'SM10003',active: false, name: 'Feedback', link: 'feedback'},
          {menuId: 'SM10004',active: false, name: 'Exchange Rates', link: 'rates'},
        ]
      }
    ]
  }
}
