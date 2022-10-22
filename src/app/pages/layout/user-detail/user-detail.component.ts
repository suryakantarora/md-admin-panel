import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  today: any = new Date().toISOString();
  user:any ={
    firstName:'Suryakant', lastName: 'Kumar', dob: '08/03/1989', gender: 'Male', userType:'Maker',
    userProfile: 'Admin', mobile:'+91-9430868694', email: 'surya@finotech.com'
  }
  constructor(
    public global:GlobalService
  ) {
    this.global.pageTitle='User Detail';
  }

  ngOnInit(): void {
  }

}
