import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExecutiveComponent } from './dashboard/executive/executive.component';
import { LayoutComponent } from './layout.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProfileManagementComponent } from './user_profile/profile-management/profile-management.component';
import { UserManagementComponent } from './user_profile/user-management/user-management.component';
import { AddMoneyComponent } from './wallet/add-money/add-money.component';
import { BlockUnblockComponent } from './wallet/block-unblock/block-unblock.component';
import { CreateWalletComponent } from './wallet/create-wallet/create-wallet.component';
import { FundTransferComponent } from './wallet/fund-transfer/fund-transfer.component';
import { StatementComponent } from './wallet/statement/statement.component';
import { TxnMonitorComponent } from './wallet/txn-monitor/txn-monitor.component';
import { WithdrawalComponent } from './wallet/withdrawal/withdrawal.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'analytics', pathMatch: 'prefix' },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'executive', component: ExecutiveComponent },
      { path: 'add-money', component: AddMoneyComponent },
      { path: 'txn-monitor', component: TxnMonitorComponent },
      { path: 'create-wallet', component: CreateWalletComponent },
      { path: 'statement', component: StatementComponent },
      { path: 'transfer', component: FundTransferComponent },
      { path: 'block-unblock', component: BlockUnblockComponent },
      { path: 'withdrawal', component: WithdrawalComponent },
      { path: 'user-management', component: UserManagementComponent },
      { path: 'profile-management', component: ProfileManagementComponent },
      { path: 'user-details', component: UserDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
