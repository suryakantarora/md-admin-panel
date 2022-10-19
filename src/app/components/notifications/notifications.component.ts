import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  today: string = new Date().toISOString();
  yesterdayDate: Date = new Date();
  constructor() { }

  ngOnInit(): void {
    this.yesterdayDate=new Date(this.yesterdayDate.setDate(this.yesterdayDate.getDate() - 1));
  }

}
