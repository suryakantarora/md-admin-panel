import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { AlertService } from 'src/app/services/alert/alert.service';
import { GlobalService } from 'src/app/services/global.service';
import { MenuData, Role } from './profile-list-data';

export class Profile {
  profileName: any;
  profileType: any;
  profileExpiry: any;
  description: any;
}
@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.scss']
})
export class ProfileManagementComponent implements OnInit {
  selectedTab = 0;
  profileList:any=[];
  filterProfileList:any=[];
  disableViewTab: boolean = true;
  displayedColumns = ['position', 'name', 'role', 'date', 'action'];
  dataSource = ELEMENT_DATA;
  profile: Profile = new Profile();
  profileRoles: Role[] = [];
  selectedRole?: Role;
  selectedProfile: Profile = new Profile();
  editProfileLabel: string = 'Add New Profile';
  rowLength: any = 5;
  constructor(private alertService: AlertService,
    public globalServce: GlobalService
  ) {
    this.globalServce.userProfile = 'M';
  }

  showAlert() {
    this.alertService.showSuccessAlert('Success!', 'Profile is created');
    this.selectedTab = 0;
    console.log(JSON.stringify(this.profile));
  }

  ngOnInit(): void {
    this.profileRoles = MenuData.initRoles();
    this.initProfileList();
  }
  initProfileList() {
    this.profileList = [
      { position: 1, id: 'ID000000001', name: 'Manibharathi S', role: 'Admin', date: today, status: 'A', },
      { position: 2, id: 'ID000000002', name: 'Ashwan Kumar', role: 'Manager', date: today, status: 'A', },
      { position: 3, id: 'ID000000003', name: 'Durga Prasad Nagesh', role: 'HR', date: today, status: 'A' },
      { position: 4, id: 'ID000000004', name: 'Chandrakant Kumar', role: 'Sr. Executive', date: today, status: 'A', },
      { position: 5, id: 'ID000000005', name: 'Manish Prajapati', role: 'Executive', date: today, status: 'D', },
      { position: 6, id: 'ID000000006', name: 'Subedar Prajapati', role: 'Sr. Developer', date: today, status: 'A' },
      { position: 7, id: 'ID000000007', name: 'Rashmi Kumari', role: 'Jr. Developer', date: today, status: 'A', },
      { position: 8, id: 'ID000000008', name: 'Abha Arora', role: 'IT Head', date: today, status: 'D', },
      { position: 9, id: 'ID000000009', name: 'Suryakant Kumar', role: 'IT Manager', date: today, status: 'A', },
      { position: 10, id: 'ID000000010', name: 'Manish Kumar', role: 'IT Manager', date: today, status: 'A', },
    ];
    this.filteredProfileList(this.rowLength);
  }
  filteredProfileList(max:number) {
    this.filterProfileList=[];
    for(let i=0;i<max;i++){
      if(max<=this.profileList.length) {
        this.filterProfileList[i]=this.profileList[i];
      }
    }
  }
  onTabChanged(event: MatTabChangeEvent) {
    if (event.index != 2) {
      this.disableViewTab = true;
    }
    if (event.index != 1) {
      this.editProfileLabel = 'Add New Profile';
      this.profile = new Profile();
    }

  }

  parentCheck(parent: Role) {
    var selected: boolean = parent.selected;
    for (var i = 0; i < parent.children.length; i++) {
      parent.children[i].selected = selected;

      var subRole: Role = parent.children[i];
      for (var j = 0; j < subRole.children.length; j++) {
        subRole.children[j].selected = selected;
      }
    }
  }

  onClickMenu(role: Role) {
    this.disableViewTab = false;
    this.selectedRole = role;
  }

  roleChildCheck(roleChild: Role) {
    for (var i = 0; i < roleChild.children.length; i++) {
      roleChild.children[i].selected = roleChild.selected;
    }
  }

  roleSubChildCheck(role: Role) {
    var parentSelected: boolean = false;
    for (var i = 0; i < role.children.length; i++) {
      parentSelected = role.children[i].selected || parentSelected;
    }
    console.log('selectd: ' + parentSelected);
    role.selected = parentSelected;
  }
  viewProfile() {
    this.disableViewTab = false;
    this.selectedTab = 2;
    this.selectedProfile.profileName = 'Bank Maker';
    this.selectedProfile.description = 'This profile for main branch';
    this.selectedProfile.profileExpiry = '12/12/2022';
    this.selectedProfile.profileType = 'm';
  }

  profileOperation(v: number) {
    if (v == 1) {
      this.alertService.showSuccessAlert('Delete profile Authorized', 'delete profile is Authorized successfully')
    } else if (v == 2) {
      this.alertService.showSuccessAlert('Delete profile De-Authorized', 'delete profile is Deauthorized successfully')
    } else if (v == 3) {
      this.alertService.showSuccessAlert('New profile authorized', 'new profile is Authorized successfully')
    } else if (v == 4) {
      this.alertService.showSuccessAlert('new profile De-Authorized', 'profile is Deauthorized successfully')
    } else if (v == 5) {
      this.alertService.showSuccessAlert('update profile Authorized', 'update profile is Authorized successfully')
    } else if (v == 6) {
      this.alertService.showSuccessAlert('update profile De-Authorized', 'update profile is Deauthorized successfully')
    }
    this.selectedTab = 0;
  }

  editProfile() {
    if (this.globalServce.userProfile === 'c') {
      this.alertService.showAlert('Alert', 'Checker can not edit profile')
      return;
    }
    this.selectedTab = 1;
    this.editProfileLabel = 'Edit Profile';
    this.profile.profileName = 'Bank Maker';
    this.profile.description = 'This profile for main branch';
    this.profile.profileExpiry = '12/12/2022';
    this.profile.profileType = 'm';
  }
}

//data
const today = new Date().toISOString();
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Manibharathi S', role: 'Admin', date: today, symbol: 'H', },
  { position: 2, name: 'Ashwan Kumar', role: 'Manager', date: today, symbol: 'He', },
  { position: 3, name: 'Durga Prasad Nagesh', role: 'HR', date: today, symbol: 'Li' },
  { position: 4, name: 'Chandrakant Kumar', role: 'Sr. Executive', date: today, symbol: 'Be', },
  { position: 5, name: 'Manish Prajapati', role: 'Executive', date: today, symbol: 'B', },
  { position: 6, name: 'Subedar Prajapati', role: 'Sr. Developer', date: today, symbol: 'C' },
  { position: 7, name: 'Rashmi Kumari', role: 'Jr. Developer', date: today, symbol: 'N', },
  { position: 8, name: 'Abha Arora', role: 'IT Head', date: today, symbol: 'O', },
  { position: 9, name: 'Suryakant Kumar', role: 'IT Manager', date: today, symbol: 'F', },
  { position: 10, name: 'Manish Kumar', role: 'IT Manager', date: today, symbol: 'F', },
];

export interface PeriodicElement {
  name: string;
  role: string;
  position: number;
  date: string;
  symbol: string;
}
