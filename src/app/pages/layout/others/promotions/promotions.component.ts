import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ImagePickerConf } from 'ngp-image-picker';
import { AlertService } from 'src/app/services/alert/alert.service';
import { GlobalService } from 'src/app/services/global.service';

export interface PromotionDetails {
  promotionName: string;
  fromDate: string;
  createdBy: string;
  verifiedBy: string;
  toDate: string;
  description: string;
  image: string;
  title: string;
}

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent implements OnInit {
  selectedTab: number = 0;
  editPromotionLable: string = 'Create New Promotion';

  promotionList: PromotionDetails[] = [];

  promotionDetails: PromotionDetails = {
    promotionName: 'DiwaliCelebration',
    title: '10 transaction free on Diwali',
    fromDate: '12/10/2022',
    toDate: '22/10/2022',
    description: 'do free transaction up to 10 transaction on till 22/10/2022',
    image: 'not',
    createdBy: 'Mr. Ritunjay Kumar',
    verifiedBy: 'Mr. Arunjay Kumar',
  };
  newPromotion: PromotionDetails = {
    promotionName: 'DiwaliCelebration',
    title: '10 transaction free on Diwali',
    fromDate: '12/10/2022',
    toDate: '22/10/2022',
    description: 'do free transaction up to 10 transaction on till 22/10/2022',
    image: 'not',
    createdBy: 'Mr. Ritunjay Kumar',
    verifiedBy: 'Mr. Arunjay Kumar',
  };

  initialImage: string = '';
  imagePickerConf: ImagePickerConf = {
    borderRadius: '12px',
    language: 'en',
    width: '320px',
    height: '140px',
    hideDownloadBtn: true,
    objectFit: 'fill',
  };
  imagePickerConfView: ImagePickerConf = {
    borderRadius: '12px',
    language: 'en',
    width: '320px',
    height: '140px',
    hideAddBtn:true,
    hideDeleteBtn:true,
    hideEditBtn:true,
    objectFit: 'fill',
  };
  constructor(
    public globalDisplay: AlertService,
    public globalServce: GlobalService
  ) {}

  ngOnInit(): void {
    this.initPromotionDetailsList();
  }
  onImageChanged(even: any): void {}

  onTabChanged(event: MatTabChangeEvent) {
    if (event.index != 1) {
      this.editPromotionLable = 'Create New Promotion';
      this.newPromotion = {
        promotionName: '',
        title: '',
        fromDate: '',
        toDate: '',
        description: '',
        image: '',
        createdBy: '',
        verifiedBy: '',
      };
    }
    
  }

  showAlert() {
    this.globalDisplay.showSuccessAlert('Information', 'Promotion is created');
    this.selectedTab = 0;
  }

  viewDetails(i: number): void {
    this.selectedTab = 2;
    this.promotionDetails = this.promotionList[i];
  }

  editPromotion(i: number) {
    if(this.globalServce.userProfile == 'c'){
      this.globalDisplay.showAlert('Alert', 'Checker can not edit Promotion')
      return;
    }
    this.editPromotionLable = 'Edit Promotion';
    this.selectedTab = 1;
    this.newPromotion = this.promotionList[i];
  }
  deletePromotion():void{
    this.globalDisplay.showSuccessAlert('Information', 'Promotion is deleted successfully')
    this.selectedTab = 0;
  }

  profileOperation(v: number) {
    if (v == 1) {
      this.globalDisplay.showSuccessAlert(
        'Delete Promotion Authorized',
        'delete promotion is Authorized successfully'
      );
    } else if (v == 2) {
      this.globalDisplay.showSuccessAlert(
        'Delete Promotion De-Authorized',
        'delete promotion is Deauthorized successfully'
      );
    } else if (v == 3) {
      this.globalDisplay.showSuccessAlert(
        'New Promotion authorized',
        'new promotion is Authorized successfully'
      );
    } else if (v == 4) {
      this.globalDisplay.showSuccessAlert(
        'new Promotion De-Authorized',
        'new promotion is Deauthorized successfully'
      );
    } else if (v == 5) {
      this.globalDisplay.showSuccessAlert(
        'update Promotion Authorized',
        'update promotion is Authorized successfully'
      );
    } else if (v == 6) {
      this.globalDisplay.showSuccessAlert(
        'update Promotion De-Authorized',
        'update promotion is Deauthorized successfully'
      );
    }
    this.selectedTab = 0;
  }

  initPromotionDetailsList(): void {
    this.promotionList = [
      {
        promotionName: 'DiwaliCelebration',
        title: '10 transaction free on Diwali',
        fromDate: '12/10/2022',
        toDate: '22/10/2022',
        description:
          'do free transaction up to 10 transaction on till 22/10/2022',
        image: 'not',
        createdBy: 'Mr. Ritunjay Kumar',
        verifiedBy: 'Mr. Arunjay Kumar',
      },
      {
        promotionName: 'NewYearCelebration',
        title: 'get 5% cashback on paying to flipkart',
        fromDate: '12/10/2022',
        toDate: '22/10/2022',
        description: 'pay to flipkart and get up 5% cashback',
        image: 'not',
        createdBy: 'Kavitha',
        verifiedBy: 'Richa',
      },
      {
        promotionName: 'NewYearCelebration',
        title: 'Buy gold and get offer',
        fromDate: '12/10/2022',
        toDate: '22/10/2022',
        description: 'Buy gold and get chance to win bike',
        image: 'not',
        createdBy: 'ujjwal',
        verifiedBy: 'Boopathi',
      },
      {
        promotionName: 'NewYearCelebration',
        title: 'pay credit card bill',
        fromDate: '12/10/2022',
        toDate: '22/10/2022',
        description: 'pay creadit card bill and get up to 10% cashback',
        image: 'not',
        createdBy: 'Selva',
        verifiedBy: 'Nitesh',
      },
      {
        promotionName: 'NewYearCelebration',
        title: 'get 5% cashback on paying to flipkart',
        fromDate: '12/10/2022',
        toDate: '22/10/2022',
        description: 'pay to flipkart and get up 5% cashback',
        image: 'not',
        createdBy: 'Suryakant',
        verifiedBy: 'Mr. Arunjay Kumar',
      },
      {
        promotionName: 'NewYearCelebration',
        title: 'get 5% cashback on paying to flipkart',
        fromDate: '12/10/2022',
        toDate: '22/10/2022',
        description: 'pay to flipkart and get up 5% cashback',
        image: 'not',
        createdBy: 'Mr. Ritunjay Kumar',
        verifiedBy: 'Anitha',
      },
      {
        promotionName: 'NewYearCelebration',
        title: 'get 5% cashback on paying to flipkart',
        fromDate: '12/10/2022',
        toDate: '22/10/2022',
        description: 'pay to flipkart and get up 5% cashback',
        image: 'not',
        createdBy: 'Ravikant',
        verifiedBy: 'Ajay',
      },
      {
        promotionName: 'NewYearCelebration',
        title: 'get 5% cashback on paying to flipkart',
        fromDate: '12/10/2022',
        toDate: '22/10/2022',
        description: 'pay to flipkart and get up 5% cashback',
        image: 'not',
        createdBy: 'Mr. Ritunjay Kumar',
        verifiedBy: 'Suryakant',
      },
    ];
  }
}
