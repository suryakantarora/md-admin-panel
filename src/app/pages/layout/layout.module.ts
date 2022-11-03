import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsComponent } from './others/news/news.component';
import { PromotionsComponent } from './others/promotions/promotions.component';
import { FeedbackComponent } from './others/feedback/feedback.component';
import { RatesComponent } from './others/rates/rates.component';
import { BalanceSheetComponent } from './wallet/balance-sheet/balance-sheet.component';
import { RegisterMerchantComponent } from './merchant/register-merchant/register-merchant.component';
import { RegisterQrComponent } from './merchant/register-qr/register-qr.component';
import { MerchantGroupingComponent } from './merchant/merchant-grouping/merchant-grouping.component';
import { ManageBillersComponent } from './merchant/manage-billers/manage-billers.component';
import { MerchantPromotionComponent } from './merchant/merchant-promotion/merchant-promotion.component';
import { AddBillerComponent } from './bill/add-biller/add-biller.component';
import { ManageBillerComponent } from './bill/manage-biller/manage-biller.component';
import { Page404Component } from './other/page404/page404.component';
import { AddNewMerchantComponent } from './merchant/add-new-merchant/add-new-merchant.component';
import { MccComponent } from './merchant/mcc/mcc.component';
import { LoanRequestComponent } from './loan/loan-request/loan-request.component';
import { LoanSanctionComponent } from './loan/loan-sanction/loan-sanction.component';
import { LoanConfigurationComponent } from './loan/loan-configuration/loan-configuration.component';
import { LoanRepaymentComponent } from './loan/loan-repayment/loan-repayment.component';
import { LoanDisbursementComponent } from './loan/loan-disbursement/loan-disbursement.component';
import { LoanClosureComponent } from './loan/loan-closure/loan-closure.component';
import { BlacklistCustomerComponent } from './loan/config/blacklist-customer/blacklist-customer.component';
import { ConfigTenureComponent } from './loan/config/config-tenure/config-tenure.component';
import { ConfigLoanfeeComponent } from './loan/config/config-loanfee/config-loanfee.component';
import { ConfigMaxloanComponent } from './loan/config/config-maxloan/config-maxloan.component';
import { LoanSanctionReportComponent } from './report/loan-report/loan-sanction-report/loan-sanction-report.component';
import { LoanDisbursementReportComponent } from './report/loan-report/loan-disbursement-report/loan-disbursement-report.component';
import { LoanOutstandingReportComponent } from './report/loan-report/loan-outstanding-report/loan-outstanding-report.component';
import { LoanClosureReportComponent } from './report/loan-report/loan-closure-report/loan-closure-report.component';
import { LoanRequestReportComponent } from './report/loan-report/loan-request-report/loan-request-report.component';
import { LoanReportComponent } from './report/loan-report/loan-report.component';
import { TxnReportComponent } from './report/txn-report/txn-report.component';
import { MerchantCommisionReportComponent } from './report/merchant-commision-report/merchant-commision-report.component';
import { TxnSummaryReportComponent } from './report/txn-summary-report/txn-summary-report.component';
import { LoyalityReportComponent } from './report/loyality-report/loyality-report.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
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
    NewsComponent,
    PromotionsComponent,
    FeedbackComponent,
    RatesComponent,
    BalanceSheetComponent,
    RegisterMerchantComponent,
    RegisterQrComponent,
    MerchantGroupingComponent,
    ManageBillersComponent,
    MerchantPromotionComponent,
    AddBillerComponent,
    ManageBillerComponent,
    Page404Component,
    AddNewMerchantComponent,
    MccComponent,
    LoanRequestComponent,
    LoanSanctionComponent,
    LoanConfigurationComponent,
    LoanRepaymentComponent,
    LoanDisbursementComponent,
    LoanClosureComponent,
    BlacklistCustomerComponent,
    ConfigTenureComponent,
    ConfigLoanfeeComponent,
    ConfigMaxloanComponent,
    LoanSanctionReportComponent,
    LoanDisbursementReportComponent,
    LoanOutstandingReportComponent,
    LoanClosureReportComponent,
    LoanRequestReportComponent,
    LoanReportComponent,
    TxnReportComponent,
    MerchantCommisionReportComponent,
    TxnSummaryReportComponent,
    LoyalityReportComponent,
  ], providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutModule { }
