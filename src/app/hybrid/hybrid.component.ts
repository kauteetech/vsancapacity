import { Component, OnInit, AfterViewInit } from '@angular/core';
import { VsanparametersService } from '../services/vsanparameters.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-hybrid',
  templateUrl: './hybrid.component.html',
  styleUrls: ['./hybrid.component.css']
})
export class HybridComponent implements OnInit {

  constructor( public hybrid: VsanparametersService ) { }


  usableSpace() {
            
    this.canvas.width = 500;
    this.canvas.height = 500;
    
    if (this.hybrid.newPieChart) {
      this.hybrid.newPieChart.destroy();
    }
        
                  this.hybrid.effectiveSpace = ((((this.hybrid.totalNodes * 
                                                    this.hybrid.totalDiskGroups * 
                                                    this.hybrid.disksPerDiskGroup * 
                                                    this.hybrid.value) / 
                                                    (this.hybrid.FTTvalue + 1))/ 
                                                    (this.hybrid.inTerabytes))*
                                                    (1.0 - this.hybrid.slackSpace)*
                                                    this.hybrid.spaceSaveDC).toFixed(2) ;

                  this.hybrid.chartEF = ((this.hybrid.effectiveSpace)*1000).toFixed(0);


                  this.hybrid.chartSlack = (( this.hybrid.totalNodes * 
                                                      this.hybrid.totalDiskGroups * 
                                                      this.hybrid.disksPerDiskGroup * 
                                                      this.hybrid.value)*
                                                      (1.0 - this.hybrid.chartSlackspacevalue)).toFixed(0);
                  
                  this.hybrid.chartRF = ((((this.hybrid.effectiveSpace)*
                                    (this.hybrid.FTTvalue + 1))-
                                    (this.hybrid.effectiveSpace))*1000).toFixed(0);  


    this.hybrid.values = [this.hybrid.chartEF, this.hybrid.chartRF, this.hybrid.chartSlack ];
    
    this.hybrid.newPieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
          labels: ["Workload space", "Replica Workload", "HA and Maintenance"],
          datasets: [{
              label: 'vSAN Space',
              data: this.hybrid.values,
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
                data: [this.hybrid.chartEF, this.hybrid.chartRF, this.hybrid.chartSlack ],
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