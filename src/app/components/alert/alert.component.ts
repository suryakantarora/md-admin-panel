import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  title: string = 'Alert!';
  message: string='';
  type:string='ALERT';
  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { 
      console.log('Data: ' + JSON.stringify(data));
      this.title= data.title;
      this.message= data.message;
      this.type= data.type;
    }

  ngOnInit(): void {
  }
  close(data: string){
    this.dialogRef.close(data);
  }
}
export interface DialogData {
  title: string;
  message: string;
  type: string;
}