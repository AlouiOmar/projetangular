import { BookService } from './../../../shared/book.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { UserService } from 'app/shared/user.service';
import {  ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
    selector     : 'stat',
    templateUrl  : './stat.component.html',
    styleUrls    : ['./stat.component.scss'],
})
export class StatComponent implements OnInit
{
    @ViewChild("chart", {static: false}) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private bookService: BookService) {
   
  }
    /**
     * On init
     */
    ngOnInit(): void
    {
      this.chartOptions = {
        series: this.bookService.getStat(),
        chart: {
          width: 500,
          type: "pie"
        },
        labels: ["Science-fiction", "Fantastic", "Police", "Love novel", "Comic","Dramatic","Tragic","Adventure"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
    }

    
}
