import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  xchApi = 'zOnObMAEXIcYjRUhWIRBmnLiFZYjdOoS';
  pageTitle: any = 'Dashboard';
  userProfile: string = 'M';
  nameList = [
    'Suryakant Kumar', 'Hema Kumari', 'Ritunjay Kumar', 'Awadh Kishor Prajapati', 'Meera Devi',
    'Aswan Kumar Rachakonda', 'Manibharathi S', 'Raksha Raaj', 'Shobha Kumari', 'Madhuri Maurya',
    'Pankaj Kumar', 'Aarati Kumari', 'Shalini Sinha', 'Shudhanshu Ranjan', 'Vivek Agnihotri', 'Pintu Sahu',
    'Niraj Patel', 'Abha Arora', 'Kanti Kumari', 'Shanti Prajapati', 'Toupi S', 'Durga Nagesh Rao', 'Yash Katariya',
    'Ridhi Katariya', ''
  ];
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
