import { MissionService } from './../mission/service/mission.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { UserService } from 'app/services/user.service';
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

  constructor(private missionService: MissionService) {
    this.chartOptions = {
      series: this.missionService.getStat(),
      chart: {
        width: 500,
        type: "pie"
      },
      labels: ["Science-fiction", "Fantastique", "Policier", "Roman d'amour", "Bande dessinée","Dramatique","Tragique"],
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
    /**
     * On init
     */
    ngOnInit(): void
    {
    }

    
}
