import { Injectable } from '@angular/core';

@Injectable()
export class VsanparametersService {

 constructor() { }

  totalNodes = null;
  totalDiskGroups = null;
  disksPerDiskGroup= null;
  effectiveSpace = null ;
  FTTvalue = null;
  FTTvalueOne: number = 1;
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

  

}
