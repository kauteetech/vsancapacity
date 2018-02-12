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
        
                  this.hybrid.effectiveSpace = ((this.hybrid.totalNodes * 
                                                    this.hybrid.totalDiskGroups * 
                                                    this.hybrid.disksPerDiskGroup * 
                                                    this.hybrid.value) / 
                                                    (this.hybrid.FTTvalue)/ 
                                                    (this.hybrid.inTerabytes)*
                                                    (1.0 - this.hybrid.slackSpace))
                                                    .toFixed(2);

                  this.hybrid.chartEF = ((this.hybrid.effectiveSpace)*1000).toFixed(0);


                  this.hybrid.chartSlack = (( this.hybrid.totalNodes * 
                                                      this.hybrid.totalDiskGroups * 
                                                      this.hybrid.disksPerDiskGroup * 
                                                      this.hybrid.value)*
                                                      (1.0 - this.hybrid.chartSlackspacevalue)).toFixed(0);
                  
                  this.hybrid.chartRF = ((((this.hybrid.effectiveSpace)*
                                    (this.hybrid.FTTvalue))-
                                    (this.hybrid.effectiveSpace))*1000).toFixed(0);  
                  
                  this.hybrid.chartFsUtil = ((this.hybrid.totalNodes * 
                                                this.hybrid.totalDiskGroups * 
                                                this.hybrid.disksPerDiskGroup * 
                                                this.hybrid.value)*.01).toFixed(0);
                                                
                  this.hybrid.rawCapacity = (((this.hybrid.totalNodes * 
                                                  this.hybrid.totalDiskGroups * 
                                                  this.hybrid.disksPerDiskGroup * 
                                                  this.hybrid.value))/1000).toFixed(2);
                    

    this.hybrid.values = [this.hybrid.chartEF, this.hybrid.chartRF, this.hybrid.chartSlack, this.hybrid.chartFsUtil ];
    
    this.hybrid.newPieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
          labels: ["Workload space", "Replica", "HA and Maintenance", "Filesystem"],
          datasets: [{
              label: 'vSAN Space',
              data: this.hybrid.values,
              backgroundColor: [
                'rgba(46, 204, 113,   1)',
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
            labels: ["Workload space", "Replica", "HA and Maintenance", "Filesystem"],
            datasets: [{
                label: 'vSAN Space',
                data: [this.hybrid.chartEF, this.hybrid.chartRF, this.hybrid.chartSlack, this.hybrid.chartFsUtil ],
                backgroundColor: [
                    'rgba(46, 204, 113,   1)',
                    'rgba(231, 76, 60, 1)',
                    'rgba(142, 68, 173, 1)',
                    'rgba(243, 156, 18, 1)'
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
