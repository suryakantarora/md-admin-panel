import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ImagePickerConf } from 'ngp-image-picker';
import { AlertService } from 'src/app/services/alert/alert.service';
import { GlobalService } from 'src/app/services/global.service';
import { PromotionDetails } from '../promotions/promotions.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  selectedTab: number = 0;
  editPromotionLable: string = 'Create New News';

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
      this.editPromotionLable = 'Create New News';
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
      this.globalDisplay.showAlert('Alert', 'Checker can not edit News')
      return;
    }
    this.editPromotionLable = 'Edit News';
    this.selectedTab = 1;
    this.newPromotion = this.promotionList[i];
  }
  deletePromotion():void{
    this.globalDisplay.showSuccessAlert('Information', 'News is deleted successfully')
    this.selectedTab = 0;
  }

  profileOperation(v: number) {
    if (v == 1) {
      this.globalDisplay.showSuccessAlert(
        'Delete News Authorized',
        'delete News is Authorized successfully'
      );
    } else if (v == 2) {
      this.globalDisplay.showSuccessAlert(
        'Delete News De-Authorized',
        'delete News is Deauthorized successfully'
      );
    } else if (v == 3) {
      this.globalDisplay.showSuccessAlert(
        'New News authorized',
        'new News is Authorized successfully'
      );
    } else if (v == 4) {
      this.globalDisplay.showSuccessAlert(
        'new News De-Authorized',
        'new News is Deauthorized successfully'
      );
    } else if (v == 5) {
      this.globalDisplay.showSuccessAlert(
        'update News Authorized',
        'update News is Authorized successfully'
      );
    } else if (v == 6) {
      this.globalDisplay.showSuccessAlert(
        'update News De-Authorized',
        'update News is Deauthorized successfully'
      );
    }
    this.selectedTab = 0;
  }

  initPromotionDetailsList(): void {
    this.promotionList = [
      {
        promotionName: 'closeBank',
        title: 'Bank close',
        fromDate: '12/10/2022',
        toDate: '22/10/2022',
        description:
          'Bank will be close for 2 days',
        image: 'https://thumbs.dreamstime.com/z/banking-vector-trendy-banner-design-concept-modern-style-thin-line-art-icons-gradient-colors-background-93259387.jpg',
        createdBy: 'Mr. Ritunjay Kumar',
        verifiedBy: 'Mr. Arunjay Kumar',
      },
      {
        promotionName: 'update Signature',
        title: 'Update your signature',
        fromDate: '12/10/2022',
        toDate: '22/10/2022',
        description: 'Update your hindi signature as per the RBI guidline',
        image: 'https://image.shutterstock.com/image-vector/web-concept-online-banking-modern-260nw-603967571.jpg',
        createdBy: 'Kavitha',
        verifiedBy: 'Richa',
      },
      {
        promotionName: 'NewYearCelebration',
        title: 'Internet banking',
        fromDate: '12/10/2022',
        toDate: '22/10/2022',
        description: 'From 01/11/2022 bank will give facility of internet banking',
        image: 'https://cdn2.vectorstock.com/i/1000x1000/78/41/internet-banking-banner-vector-15197841.jpg',
        createdBy: 'ujjwal',
        verifiedBy: 'Boopathi',
      },
      {
        promotionName: 'NewYearCelebration',
        title: 'pay credit card bill',
        fromDate: '12/10/2022',
        toDate: '22/10/2022',
        description: 'pay creadit card bill and get up to 10% cashback',
        image: 'https://cdn2.vectorstock.com/i/1000x1000/34/81/online-banking-banner-vector-21293481.jpg',
        createdBy: 'Selva',
        verifiedBy: 'Nitesh',
      },
      {
        promotionName: 'NewYearCelebration',
        title: 'get 5% cashback on paying to flipkart',
        fromDate: '12/10/2022',
        toDate: '22/10/2022',
        description: 'pay to flipkart and get up 5% cashback',
        image: 'https://image.shutterstock.com/image-vector/web-concept-online-banking-modern-260nw-603967571.jpg',
        createdBy: 'Suryakant',
        verifiedBy: 'Mr. Arunjay Kumar',
      },
      {
        promotionName: 'NewYearCelebration',
        title: 'get 5% cashback on paying to flipkart',
        fromDate: '12/10/2022',
        toDate: '22/10/2022',
        description: 'pay to flipkart and get up 5% cashback',
        image: 'https://cdn2.vectorstock.com/i/1000x1000/34/81/online-banking-banner-vector-21293481.jpg',
        createdBy: 'Mr. Ritunjay Kumar',
        verifiedBy: 'Anitha',
      },
      {
        promotionName: 'NewYearCelebration',
        title: 'get 5% cashback on paying to flipkart',
        fromDate: '12/10/2022',
        toDate: '22/10/2022',
        description: 'pay to flipkart and get up 5% cashback',
        image: 'https://image.shutterstock.com/image-vector/web-concept-online-banking-modern-260nw-603967571.jpg',
        createdBy: 'Ravikant',
        verifiedBy: 'Ajay',
      },
      {
        promotionName: 'NewYearCelebration',
        title: 'get 5% cashback on paying to flipkart',
        fromDate: '12/10/2022',
        toDate: '22/10/2022',
        description: 'pay to flipkart and get up 5% cashback',
        image: 'https://cdn2.vectorstock.com/i/1000x1000/34/81/online-banking-banner-vector-21293481.jpg',
        createdBy: 'Mr. Ritunjay Kumar',
        verifiedBy: 'Suryakant',
      },
    ];
  }

}
