import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { AlertService } from 'src/app/services/alert/alert.service';
import { GlobalService } from 'src/app/services/global.service';

export class User {
  firstName?: string;
  lastName?: string;
  userName?: string;
  profileName?: string;
  gender?: string;
  dob?: string;
  mobileNumber?: string;
  emailId?: string;
  city?: string;
  district?: string;
  state?: string;
  pinCode?: string;
  country?: string;
  description?: string;
  date?: string;
}

export interface UserInfo {
  fullName: string;
  profileName: string;
  date: string;
  change: string;
  actionBy: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  selectedTab: number = 0;
  editUserLabel: string = 'New User';
  user: User = new User();
  users: User[] = [];
  userName: string = '';
  isUserFind: boolean = false;
  searchUser: boolean = false;
  usersChecker: UserInfo[] = [];
  userList: any = [];
  filterUserList: any = [];
  today = new Date().toISOString();
  rowCount: any = 5;
  constructor(
    public globalServce: GlobalService,
    public globalDialog: AlertService
  ) { }

  ngOnInit(): void {
    this.initList();
  }

  onTabChanged(event: MatTabChangeEvent) {
    if (event.index != 1) {
      this.editUserLabel = 'New User';
    }
    if (event.index != 2) {
      this.searchUser = false;
    }

  }

  showAlert() { }


  search(): void {
    this.selectedTab = 2;
    this.searchUser = true;
    this.isUserFind = false;
  }

  userSeachForm(): void {
    this.isUserFind = true;

  }

  viewDetails(): void {
    this.selectedTab = 2;
    this.isUserFind = true;
    this.searchUser = false;
    this.user.firstName = 'Ritunjay';
    this.user.lastName = 'Kumar';
    this.user.userName = 'ritu1234';
    this.user.profileName = 'bankMaker';
    this.user.gender = 'M';
    this.user.dob = '12/11/1996';
    this.user.mobileNumber = '+91 8083816290';
    this.user.emailId = 'ritu1234@gmail.com';
    this.user.city = 'Patna';
    this.user.state = 'Bihar';
    this.user.district = 'Aurangabad';
    this.user.pinCode = 'Bihar';
    this.user.country = 'India';
    this.user.description = 'this user only for main branch maker'
    this.user.date = '12/10/2022'


  }

  editUser(): void {
    if (this.globalServce.userProfile == 'c') {
      this.globalDialog.showAlert('Alert', 'Checker can not edit the user')
      return;
    }
    this.editUserLabel = 'Edit User';
    this.selectedTab = 1;
  }
  profileOperation(v: number) {
    if (v == 1) {
      this.globalDialog.showSuccessAlert('Delete user Authorized', 'Delete user is Authorized successfully')
    } else if (v == 2) {
      this.globalDialog.showSuccessAlert('Delete user De-Authorized', 'Delete user is Deauthorized successfully')
    } else if (v == 3) {
      this.globalDialog.showSuccessAlert('Unblock user authorized', 'Unblock user is Authorized successfully')
    } else if (v == 4) {
      this.globalDialog.showSuccessAlert('Unblock user De-Authorized', 'Unblock user is Deauthorized successfully')
    } else if (v == 5) {
      this.globalDialog.showSuccessAlert('Block user Authorized', 'Block user is Authorized successfully')
    } else if (v == 6) {
      this.globalDialog.showSuccessAlert('Block user De-Authorized', 'block user is Deauthorized successfully')
    } else if (v == 7) {
      this.globalDialog.showSuccessAlert('Reset password Authorized', 'Reset password is Authorized successfully')
    } else if (v == 8) {
      this.globalDialog.showSuccessAlert('Reset password De-Authorized', 'Reset password is Deauthorized successfully')
    } else if (v == 9) {
      this.globalDialog.showSuccessAlert('New user Authorized', 'New user is Authorized successfully')
    } else if (v == 10) {
      this.globalDialog.showSuccessAlert('New user De-Authorized', 'New user is Deauthorized successfully')
    } else if (v == 11) {
      this.globalDialog.showSuccessAlert('Update user Authorized', 'Update user is Authorized successfully')
    } else if (v == 12) {
      this.globalDialog.showSuccessAlert('Update user De-Authorized', 'Update user is Deauthorized successfully')
    }
    this.selectedTab = 0;
  }


  initList() {
    this.userList = [
      { id: this.getUserID(), firstName: 'Ritunjay', lastName: 'kumar', userName: 'ritunay', profileName: 'Bank Maker', date: this.today },
      { id: this.getUserID(), firstName: 'Arunjay', lastName: 'kumar', userName: 'arunjay', profileName: 'Bank Maker', date: this.today },
      { id: this.getUserID(), firstName: 'Ankita', lastName: 'kumari', userName: 'ankita', profileName: 'Bank Checker', date: this.today },
      { id: this.getUserID(), firstName: 'DNR', lastName: 'kumar', userName: 'dnr12', profileName: 'Bank Maker', date: this.today },
      { id: this.getUserID(), firstName: 'Boopathi', lastName: 'Raja', userName: 'boopathi256', profileName: 'Bank Maker', date: this.today },
      { id: this.getUserID(), firstName: 'Selva', lastName: 'Prabhu', userName: 'selva589', profileName: 'Bank Checker', date: this.today },
      { id: this.getUserID(), firstName: 'Ujjwal', lastName: 'Kumar', userName: 'ujjwal365', profileName: 'Bank Maker', date: this.today },
      { id: this.getUserID(), firstName: 'Kavitha', lastName: 'D', userName: 'kavitha365', profileName: 'Bank Checker', date: this.today },
      { id: this.getUserID(), firstName: 'RituRaj', lastName: 'kumar', userName: 'ritu785', profileName: 'Bank Maker', date: this.today },
      { id: this.getUserID(), firstName: 'Nitesh', lastName: 'kumar', userName: 'nitesh896', profileName: 'Bank Checker', date: this.today },
      { id: this.getUserID(), firstName: 'ritunjay', lastName: 'kumar', userName: 'rijk145', profileName: 'Bank Maker', date: this.today },
      { id: this.getUserID(), firstName: 'ritunjay', lastName: 'kumar', userName: 'hiyr12', profileName: 'Bank Checker', date: this.today }
    ];
    this.initFilterUserList(this.rowCount);
  }
  getUserID() {
    const min = 1000000000;
    const max = 9999999999;
    return 'FIN' + Math.floor(min + Math.random() * (max - min + 1))
  }

  initFilterUserList(max: number) {
    this.filterUserList = [];
    console.log(this.userList.length);
    console.log(max + ':' + (max <= this.userList.length));
    for (let i = 0; i < max; i++) {
      if (max <= this.userList.length) {
        this.filterUserList[i] = this.userList[i];
      }
    }
  }
  initListChecker(): void {
    this.usersChecker.push({
      fullName: 'Ritunjay Kumar',
      profileName: 'Bank Maker',
      date: '20/10/2022',
      change: 'password change',
      actionBy: 'Admin',
    });
    this.usersChecker.push({
      fullName: 'Rani Kumar',
      profileName: 'Bank Checker',
      date: '20/10/2022',
      change: 'password change',
      actionBy: 'Admin',
    });
    this.usersChecker.push({
      fullName: 'Ritunjay Kumar',
      profileName: 'Bank Maker',
      date: '20/10/2022',
      change: 'password change',
      actionBy: 'Admin',
    });
    this.usersChecker.push({
      fullName: 'Ritunjay Kumar',
      profileName: 'Bank Maker',
      date: '20/10/2022',
      change: 'password change',
      actionBy: 'Admin',
    });
    this.usersChecker.push({
      fullName: 'Ritunjay Kumar',
      profileName: 'Bank Maker',
      date: '20/10/2022',
      change: 'password change',
      actionBy: 'Admin',
    });
    this.usersChecker.push({
      fullName: 'Ritunjay Kumar',
      profileName: 'Bank Maker',
      date: '20/10/2022',
      change: 'password change',
      actionBy: 'Admin',
    });
    this.usersChecker.push({
      fullName: 'Ritunjay Kumar',
      profileName: 'Bank Maker',
      date: '20/10/2022',
      change: 'password change',
      actionBy: 'Admin',
    });
  }
}
