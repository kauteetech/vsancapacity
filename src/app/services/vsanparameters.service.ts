import { Injectable } from '@angular/core';

@Injectable()
export class VsanparametersService {

 constructor() { }

  totalNodes = null;
  totalDiskGroups = null;
  disksPerDiskGroup= null;
  effectiveSpace = null ;
  FTTvalue = null;
  value = null;
  spaceSaveDC = null;
  inTerabytes = 1000;
  slackSpace = 0.25 ;
  chartSlackspacevalue = 0.75;
  rawTotal = null;
  fttInputValue = [];
  chartEF = null;
  chartSlack = null;
  chartRF = null;
  values = [];
  newPieChart = null;

  fttInput() {
    if (this.totalNodes >= 2) {
         return this.fttInputValue = [1];
    }
    else if ( this.totalNodes >= 5) {
          return this.fttInputValue = [1,2];
    }
    else if ( this.totalNodes >= 7) {
          return this.fttInputValue = [1,2,3];
    }
  }

}
