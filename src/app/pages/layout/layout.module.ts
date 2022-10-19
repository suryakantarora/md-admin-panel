import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from 'src/app/material-module';
import { NavigationComponent } from 'src/app/pages/layout/navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDialogRef } from '@angular/material/dialog';
import { IconAvatarDirective } from 'src/app/avatar-icon/icon-avatar.directive';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AddMoneyComponent } from './wallet/add-money/add-money.component';
import { TxnMonitorComponent } from './wallet/txn-monitor/txn-monitor.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { ExecutiveComponent } from './dashboard/executive/executive.component';
import { CreateWalletComponent } from './wallet/create-wallet/create-wallet.component';
import { StatementComponent } from './wallet/statement/statement.component';
import { FundTransferComponent } from './wallet/fund-transfer/fund-transfer.component';
import { WithdrawalComponent } from './wallet/withdrawal/withdrawal.component';
import { BlockUnblockComponent } from './wallet/block-unblock/block-unblock.component';
import { ProfileManagementComponent } from './user_profile/profile-management/profile-management.component';
import { UserManagementComponent } from './user_profile/user-management/user-management.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavigationComponent,
    DashboardComponent,
    IconAvatarDirective,
    SideMenuComponent,
    AddMoneyComponent,
    TxnMonitorComponent,
    AnalyticsComponent,
    ExecutiveComponent,
    CreateWalletComponent,
    StatementComponent,
    FundTransferComponent,
    WithdrawalComponent,
    BlockUnblockComponent,
    ProfileManagementComponent,
    UserManagementComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    NgApexchartsModule,

  ], providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ]
})
export class LayoutModule { }
