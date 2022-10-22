import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from 'src/app/components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }
  showAlert(head: string, body: string): void {
    const dialogRef = this.dialog.open(
      AlertComponent, {
      panelClass: 'alert-box',
      width:'450px',
      data: { title: head, message: body, type:'ALERT' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Alert Data: ' + result);
    });
  }
  showSuccessAlert(head: string, body: string): void {
    const dialogRef = this.dialog.open(
      AlertComponent, {
      panelClass: 'alert-box',
      width:'450px',
      data: { title: head, message: body, type:'SUCCESS' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Alert Data: ' + result);
    });
  }
  showCnfAlert(head: string, body: string) {
    const dialogRef = this.dialog.open(
      AlertComponent, {
      panelClass: 'alert-box',
      width:'450px',
      data: { title: head, message: body, type:'CNF_ALERT' },
    });
    return dialogRef;
    /* dialogRef.afterClosed().subscribe(result => {
      console.log('Alert Data: ' + result);
      return result;
    });
    return ''; */
  }
  showToast(msg:string) {
    this.snackBar.open(msg, 'Close', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
