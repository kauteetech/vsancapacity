import { Component, OnInit, AfterViewInit } from '@angular/core';
import { VsanparametersService } from '../services/vsanparameters.service';
import { Chart } from 'chart.js';
// import { COMPOSITION_BUFFER_MODE } from '@angular/forms/src/directives/default_value_accessor';


@Component({
  selector: 'app-allflash',
  templateUrl: './allflash.component.html',
  styleUrls: ['./allflash.component.css']
})
export class AllflashComponent implements OnInit, AfterViewInit {

  constructor( public allflash: VsanparametersService ) { }

  /*
  chartEF = null;
  chartSlack = null;
  chartRF = null;
  values = [];
  newPieChart = null;
 */
  usableSpace() {
            
    this.canvas.width = 500;
    this.canvas.height = 500;
    
    if (this.allflash.newPieChart) {
      this.allflash.newPieChart.destroy();
    }
        
                  this.allflash.effectiveSpace = ((((this.allflash.totalNodes * 
                                                    this.allflash.totalDiskGroups * 
                                                    this.allflash.disksPerDiskGroup * 
                                                    this.allflash.value) / 
                                                    (this.allflash.FTTvalue + 1))/ 
                                                    (this.allflash.inTerabytes))*
                                                    (1.0 - this.allflash.slackSpace)*
                                                    this.allflash.spaceSaveDC).toFixed(2) ;

                  this.allflash.chartEF = ((this.allflash.effectiveSpace)*1000).toFixed(0);


                  this.allflash.chartSlack = (( this.allflash.totalNodes * 
                                                      this.allflash.totalDiskGroups * 
                                                      this.allflash.disksPerDiskGroup * 
                                                      this.allflash.value)*
                                                      (1.0 - this.allflash.chartSlackspacevalue)).toFixed(0);
                  
                  this.allflash.chartRF = ((((this.allflash.effectiveSpace)*
                                    (this.allflash.FTTvalue + 1))-
                                    (this.allflash.effectiveSpace))*1000).toFixed(0);  


    this.allflash.values = [this.allflash.chartEF, this.allflash.chartRF, this.allflash.chartSlack ];
    
    this.allflash.newPieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
          labels: ["Workload space", "Replica Workload", "HA and Maintenance"],
          datasets: [{
              label: 'vSAN Space',
              data: this.allflash.values,
              backgroundColor: [
                'rgba(46, 204, 113,   1)',
                'rgba(231, 76, 60, 1)',
                'rgba(142, 68, 173, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        cutoutPercentage: 50,
        responsive: true,
        display:false
      }
      
    }); 
    
   
  }


  ngOnInit() {    

  }
  
  
 
  canvas: any;
     ctx: any;
 
     ngAfterViewInit() {

      this.canvas = document.getElementById('myChart');
      this.ctx = this.canvas.getContext('2d');

      let myChart = new Chart(this.ctx, {
        type: 'pie',
        data: {
            labels: ["Workload space", "Replica Workload", "HA and Maintenance"],
            datasets: [{
                label: 'vSAN Space',
                data: [this.allflash.chartEF, this.allflash.chartRF, this.allflash.chartSlack ],
                backgroundColor: [
                    'rgba(46, 204, 113,   1)',
                    'rgba(231, 76, 60, 1)',
                    'rgba(142, 68, 173, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          cutoutPercentage: 50,
          responsive: false,
          display:false   
        }
        
      });
    }
        
   
}
