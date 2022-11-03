import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBillerComponent } from './bill/add-biller/add-biller.component';
import { ManageBillerComponent } from './bill/manage-biller/manage-biller.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExecutiveComponent } from './dashboard/executive/executive.component';
import { LayoutComponent } from './layout.component';
import { BlacklistCustomerComponent } from './loan/config/blacklist-customer/blacklist-customer.component';
import { ConfigLoanfeeComponent } from './loan/config/config-loanfee/config-loanfee.component';
import { ConfigMaxloanComponent } from './loan/config/config-maxloan/config-maxloan.component';
import { ConfigTenureComponent } from './loan/config/config-tenure/config-tenure.component';
import { LoanClosureComponent } from './loan/loan-closure/loan-closure.component';
import { LoanConfigurationComponent } from './loan/loan-configuration/loan-configuration.component';
import { LoanDisbursementComponent } from './loan/loan-disbursement/loan-disbursement.component';
import { LoanRepaymentComponent } from './loan/loan-repayment/loan-repayment.component';
import { LoanRequestComponent } from './loan/loan-request/loan-request.component';
import { LoanSanctionComponent } from './loan/loan-sanction/loan-sanction.component';
import { AddNewMerchantComponent } from './merchant/add-new-merchant/add-new-merchant.component';
import { ManageBillersComponent } from './merchant/manage-billers/manage-billers.component';
import { MccComponent } from './merchant/mcc/mcc.component';
import { MerchantGroupingComponent } from './merchant/merchant-grouping/merchant-grouping.component';
import { MerchantPromotionComponent } from './merchant/merchant-promotion/merchant-promotion.component';
import { RegisterMerchantComponent } from './merchant/register-merchant/register-merchant.component';
import { RegisterQrComponent } from './merchant/register-qr/register-qr.component';
import { Page404Component } from './other/page404/page404.component';
import { FeedbackComponent } from './others/feedback/feedback.component';
import { NewsComponent } from './others/news/news.component';
import { PromotionsComponent } from './others/promotions/promotions.component';
import { RatesComponent } from './others/rates/rates.component';
import { LoanClosureReportComponent } from './report/loan-report/loan-closure-report/loan-closure-report.component';
import { LoanDisbursementReportComponent } from './report/loan-report/loan-disbursement-report/loan-disbursement-report.component';
import { LoanOutstandingReportComponent } from './report/loan-report/loan-outstanding-report/loan-outstanding-report.component';
import { LoanReportComponent } from './report/loan-report/loan-report.component';
import { LoanRequestReportComponent } from './report/loan-report/loan-request-report/loan-request-report.component';
import { LoanSanctionReportComponent } from './report/loan-report/loan-sanction-report/loan-sanction-report.component';
import { LoyalityReportComponent } from './report/loyality-report/loyality-report.component';
import { MerchantCommisionReportComponent } from './report/merchant-commision-report/merchant-commision-report.component';
import { TxnReportComponent } from './report/txn-report/txn-report.component';
import { TxnSummaryReportComponent } from './report/txn-summary-report/txn-summary-report.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProfileManagementComponent } from './user_profile/profile-management/profile-management.component';
import { UserManagementComponent } from './user_profile/user-management/user-management.component';
import { AddMoneyComponent } from './wallet/add-money/add-money.component';
import { BalanceSheetComponent } from './wallet/balance-sheet/balance-sheet.component';
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
      { path: 'balance-sheet', component: BalanceSheetComponent },
      { path: 'txn-monitor', component: TxnMonitorComponent },
      { path: 'create-wallet', component: CreateWalletComponent },
      { path: 'statement', component: StatementComponent },
      { path: 'transfer', component: FundTransferComponent },
      { path: 'block-unblock', component: BlockUnblockComponent },
      { path: 'withdrawal', component: WithdrawalComponent },
      { path: 'user-management', component: UserManagementComponent },
      { path: 'profile-management', component: ProfileManagementComponent },
      { path: 'user-details', component: UserDetailComponent },
      { path: 'news', component: NewsComponent },
      { path: 'promotions', component: PromotionsComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'rates', component: RatesComponent },
      { path: 'add-biller', component: AddBillerComponent },
      { path: 'manage-biller', component: ManageBillerComponent },
      { path: 'register-merchant', component: RegisterMerchantComponent },
      { path: 'register-qr', component: RegisterQrComponent },
      { path: 'merchant-promotion', component: MerchantPromotionComponent },
      { path: 'merchant-grouping', component: MerchantGroupingComponent },
      { path: 'manage-billers', component: ManageBillersComponent },
      { path: 'add-new-merchant', component: AddNewMerchantComponent },
      { path: 'mcc', component: MccComponent },
      { path: 'loan-request', component: LoanRequestComponent },
      { path: 'loan-sanction', component: LoanSanctionComponent },
      { path: 'loan-configuration', component: LoanConfigurationComponent },
      { path: 'loan-repayment', component: LoanRepaymentComponent },
      { path: 'loan-disbursement', component: LoanDisbursementComponent },
      { path: 'loan-closure', component: LoanClosureComponent },
      { path: 'blacklist-customer', component: BlacklistCustomerComponent },
      { path: 'config-maxloan', component: ConfigMaxloanComponent },
      { path: 'config-loanfee', component: ConfigLoanfeeComponent },
      { path: 'config-tenure', component: ConfigTenureComponent },
      { path: 'loan-request-report', component: LoanRequestReportComponent },
      { path: 'loan-closure-report', component: LoanClosureReportComponent },
      { path: 'loan-disbursement-report', component: LoanDisbursementReportComponent },
      { path: 'loan-outstanding-report', component: LoanOutstandingReportComponent },
      { path: 'loan-sanction-report', component: LoanSanctionReportComponent },
      { path: 'loan-report', component: LoanReportComponent },
      { path: 'loyality-report', component: LoyalityReportComponent },
      { path: 'txn-report', component: TxnReportComponent },
      { path: 'merchant-commision-report', component: MerchantCommisionReportComponent },
      { path: 'txn-summary-report', component: TxnSummaryReportComponent },

      /*  { path: '**', component: Page404Component } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
