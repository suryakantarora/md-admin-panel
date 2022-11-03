import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AlertService } from 'src/app/services/alert/alert.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-add-biller',
  templateUrl: './add-biller.component.html',
  styleUrls: ['./add-biller.component.scss']
})


export class AddBillerComponent implements OnInit {

  selectedBiller = new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z]*/)]);

  selectFormControl = new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z]*/)]);

  nativeSelectFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/[a-zA-Z]*/),
  ]);

  matcher = new MyErrorStateMatcher();
  categoryList: any = [];
  constructor(
    private alert:AlertService
  ) { }

  ngOnInit(): void {
    this.getCategoryList();
  }
  getCategoryList() {
    this.categoryList = [
      { id: 'finance', name: 'Finance' },
      { id: 'property', name: 'Property' },
      { id: 'resturant', name: 'Resturant & Hotel' },
      { id: 'education', name: 'Education' },
    ];
  }
  addBiller() {
    this.alert.showSuccessAlert('Success!', 'Biller added successfully.')
  }
}
