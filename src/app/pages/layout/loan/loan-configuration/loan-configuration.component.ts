import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-configuration',
  templateUrl: './loan-configuration.component.html',
  styleUrls: ['./loan-configuration.component.scss']
})
export class LoanConfigurationComponent implements OnInit {
  pageStatus=1;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  showConfig(url:string) {
    this.router.navigateByUrl(url);
  }
}
