import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  xchApi = 'zOnObMAEXIcYjRUhWIRBmnLiFZYjdOoS';
  pageTitle: any = 'Dashboard';
  userProfile='m';
  constructor() { }

  public formatAmount(num: any) {
    try {
      let numParts;
      const num1 = num + '';
      numParts = num1.toString().split('.');
      numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return numParts.join('.');
    } catch (e) {
      console.log('Exception while formatting number: ' + e);
      return num;
    }
  }
}
