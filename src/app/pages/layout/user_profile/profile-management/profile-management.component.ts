import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.scss']
})
export class ProfileManagementComponent implements OnInit {
  selectedTab=0;
  displayedColumns = ['position', 'name', 'role', 'date', 'action'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
const today= new Date().toISOString();
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Manibharathi S', role: 'Admin', date: today, symbol: 'H'},
  {position: 2, name: 'Ashwan Kumar', role: 'Manager', date: today, symbol: 'He'},
  {position: 3, name: 'Durga Prasad Nagesh', role: 'HR', date: today, symbol: 'Li'},
  {position: 4, name: 'Chandrakant Kumar', role: 'Sr. Executive', date: today, symbol: 'Be'},
  {position: 5, name: 'Manish Prajapati', role: 'Executive', date: today, symbol: 'B'},
  {position: 6, name: 'Subedar Prajapati', role: 'Sr. Developer', date: today, symbol: 'C'},
  {position: 7, name: 'Rashmi Kumari', role: 'Jr. Developer', date: today, symbol: 'N'},
  {position: 8, name: 'Abha Arora', role: 'IT Head', date: today, symbol: 'O'},
  {position: 9, name: 'Suryakant Kumar', role: 'IT Manager', date: today, symbol: 'F'},
  {position: 10, name: 'Ramesh S', role: 'App Manager', date: today, symbol: 'Ne'},
];

export interface PeriodicElement {
  name: string;
  role: string;
  position: number;
  date: string;
  symbol: string;
}
