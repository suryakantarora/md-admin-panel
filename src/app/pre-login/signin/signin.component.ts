import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  showSpinner='block';
  hidePassword = true; 
  userType='INST';
  customerId:any;
  customerPass:any;
  constructor(private alertService: AlertService,private router: Router) {}
  ngOnInit(): void {
  }
  resetForm() {
    setTimeout(() => {
      this.userType='INST';
    }, 100);
  }
  login() {

  }
  validateForm() {
    console.log('Validating Form');
    console.log('User Name: ' + this.customerId);
    console.log('Password: ' + this.customerPass);
    if(this.customerId === this.customerPass && this.customerId) {
      this.router.navigate(['/layout']);
    } else {
      this.alertService.showAlert('Alert!', 'Invalid username or password');
    }
  }
  async forgotPass() {
    const alert = await this.alertService.showCnfAlert('Forgot Password?', 'Proceed to reset your account Password?');
    alert.afterClosed().subscribe(result => {
      console.log('Alert Data: ' + result);
      return result;
    });
  }
}
