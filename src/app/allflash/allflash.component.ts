import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { VsanparametersService } from '../services/vsanparameters.service';
import { Chart } from 'chart.js';
// import { COMPOSITION_BUFFER_MODE } from '@angular/forms/src/directives/default_value_accessor';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatRadioModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs/hammer';


@Component({
  selector: 'app-allflash',
  templateUrl: './allflash.component.html',
  styleUrls: ['./allflash.component.css']
})
export class AllflashComponent implements OnInit, AfterViewInit {

  constructor( public allflash: VsanparametersService ) { 
    
  }

  usableSpace() {
    
    this.canvas.width = 350;
    this.canvas.height = 350;
    
    if (this.allflash.newPieChart) {
      this.allflash.newPieChart.destroy();
    }

                  this.allflash.effectiveSpace = ((this.allflash.totalNodes * 
                                                    this.allflash.totalDiskGroups * 
                                                    this.allflash.disksPerDiskGroup * 
                                                    this.allflash.value) / 
                                                    (this.allflash.FTTvalue)/ 
                                                    (this.allflash.inTerabytes)*
                                                    (1-((this.allflash.slackSpace + this.allflash.checksum)/100))*
                                                    this.allflash.spaceSaveDC).toFixed(2);

                  if (isNaN(this.allflash.effectiveSpace)) {
                    this.allflash.effectiveSpace = 0;
                  }  

                  if (this.allflash.totalNodes <= 3) {
                    this.allflash.FTTvalue = 2;
                  }


                  this.allflash.chartEF = ((this.allflash.effectiveSpace)*1000).toFixed(0);


                  this.allflash.chartSlack = ((this.allflash.totalNodes * 
                                                      this.allflash.totalDiskGroups * 
                                                      this.allflash.disksPerDiskGroup * 
                                                      this.allflash.value)*
                                                      ((this.allflash.slackSpace)/100)).toFixed(0);

                  this.allflash.chartchecksum = ((this.allflash.totalNodes * 
                                                  this.allflash.totalDiskGroups * 
                                                  this.allflash.disksPerDiskGroup * 
                                                  this.allflash.value)*
                                                  ((this.allflash.checksum)/100)).toFixed(0);
                                                
                  this.allflash.chartRF = ((((this.allflash.effectiveSpace)*
                                    (this.allflash.FTTvalue))-
                                    (this.allflash.effectiveSpace))*1000).toFixed(0); 
                                    
                  this.allflash.chartFsUtil = ((this.allflash.totalNodes * 
                                                    this.allflash.totalDiskGroups * 
                                                    this.allflash.disksPerDiskGroup * 
                                                    this.allflash.value)*.01).toFixed(0);
                  
                  this.allflash.rawCapacity = (((this.allflash.totalNodes * 
                                                this.allflash.totalDiskGroups * 
                                                this.allflash.disksPerDiskGroup * 
                                                this.allflash.value))/1000).toFixed(2);
                  

    this.allflash.values = [this.allflash.chartEF, this.allflash.chartchecksum,  this.allflash.chartRF, this.allflash.chartSlack, this.allflash.chartFsUtil ];
    
    this.allflash.newPieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
          labels: ["Workload space", "Checksum", "Replica or Parity", "HA and Maintenance", "Filesystem"],
          datasets: [{
              label: 'vSAN Space',
              data: this.allflash.values,
              backgroundColor: [
                'rgba(46, 204, 113, 1)',
                'rgba(46, 134, 193, 1)',
                'rgba(231, 76, 60, 1)',
                'rgba(142, 68, 173, 1)',
                'rgba(243, 156, 18, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        cutoutPercentage: 50,
        responsive: true,
        display:true
      }
    }); 
  }
 
 

  ngOnInit() {    
    this.allflash.FTTvalue = 2;
   
  }
  
  
 
  canvas: any;
     ctx: any;
 
     ngAfterViewInit() {

      this.canvas = document.getElementById('myChart');
      this.ctx = this.canvas.getContext('2d');

      let myChart = new Chart(this.ctx, {
        type: 'pie',
        data: {
            labels: ["Workload space", "Checksum", "Replica or Parity", "HA and Maintenance", "Filesystem"],
            datasets: [{
                label: 'vSAN Space',
                data: [this.allflash.chartEF, this.allflash.chartchecksum, this.allflash.chartRF, this.allflash.chartSlack, this.allflash.chartFsUtil ],
                backgroundColor: [
                    'rgba(46, 204, 113,   1)',
                    'rgba(46, 134, 193, 1)',
                    'rgba(231, 76, 60, 1)',
                    'rgba(142, 68, 173, 1)',
                    'rgba(243, 156, 18, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          cutoutPercentage: 50,
          responsive: true,
          display:true
        }
      }); 
    }
        
   
}
