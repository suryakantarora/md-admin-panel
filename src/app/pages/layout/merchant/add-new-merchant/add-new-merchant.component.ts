import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-add-new-merchant',
  templateUrl: './add-new-merchant.component.html',
  styleUrls: ['./add-new-merchant.component.scss']
})
export class AddNewMerchantComponent implements OnInit {

  selectedBiller = new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z]*/)]);

  selectFormControl = new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z]*/)]);

  nativeSelectFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/[a-zA-Z]*/),
  ]);

  matcher = new MyErrorStateMatcher();
  categoryList: any = [];
  constructor() { }

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
}
