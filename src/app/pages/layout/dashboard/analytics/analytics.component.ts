import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexNonAxisChartSeries,
  ApexFill,
  ApexLegend,
  ApexResponsive
} from "ng-apexcharts";
import * as ApexCharts from 'apexcharts';
export type AreaChartOptions = {
  series: ApexAxisChartSeries | undefined;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};
export type PieChartOptions = {
  series: ApexNonAxisChartSeries | undefined;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};
export type CircleChartOptions = {
  series: ApexNonAxisChartSeries | undefined;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  txnGraphPanelOpenState: boolean = true;
  // https://apexcharts.com/docs/chart-types/area-chart/
  // chart variable
  @ViewChild("chart") chart: ChartComponent | undefined;
  @ViewChild("pieChart") pieChart: ChartComponent | undefined;
  public chartOptions: Partial<AreaChartOptions> | any;
  public pieChartOptions: Partial<PieChartOptions> | any;
  public circleChartOptions: Partial<CircleChartOptions> | any;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.chartOptions = {
      series: [
        {
          name: "All Transactions",
          data: [100, 20, 30, 25, 30, 31, 40, 55, 51, 62, 109, 100]
        },
        {
          name: "Success Transaction",
          data: [99, 18, 10, 24, 26, 21, 32, 45, 32, 34, 52, 41]
        },
        {
          name: "Failed Transaction",
          data: [1, 2, 1, 20, 1, 4, 10, 8, 10, 19, 57, 91]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2022-12-19T00:00:00.000Z",
          "2022-11-19T00:00:00.000Z",
          "2022-10-19T00:00:00.000Z",
          "2022-09-19T00:00:00.000Z",
          "2022-08-19T01:30:00.000Z",
          "2022-07-19T02:30:00.000Z",
          "2022-06-19T03:30:00.000Z",
          "2022-05-19T04:30:00.000Z",
          "2022-04-19T05:30:00.000Z",
          "2022-03-19T06:30:00.000Z",
          "2022-02-19T06:30:00.000Z",
          "2022-01-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };

    this.pieChartOptions = {
      labels: ['Loan', 'Wallet', 'Payment', 'Offers', 'Promotions'],
      chart: {
        type: 'donut',
        toolbar: {
          show: true
        }
      },
      series: [44, 55, 41, 17, 15],
      pie: {
        donut: {
          labels: {
            show: true,
          }
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
    };
    // circle chart
    this.circleChartOptions = {
      chart: {
        type: 'radialBar',
        toolbar: {
          show: true
        }
      },
      series: [70],
      labels: ['Progress'],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
    };
  }

  ngOnInit(): void {

  }
  initChart() {
    this.chartOptions = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }
  public generateData(baseval: any, count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
