import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotificationsComponent } from 'src/app/components/notifications/notifications.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  faHeart = faHeart;
  faBell = faBell;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<any>
  ) { }
  openNotificationBox(ev: any) {
    console.log(ev.target.value);
    const dialogRef = this.dialog.open(NotificationsComponent, {
      width: '350px',
      panelClass: 'post-dialog-container',
      hasBackdrop: true,
      backdropClass: 'no-shadow',
      position: {
        top: '60px',
        right: '10px'
      }
    });
  }
}
