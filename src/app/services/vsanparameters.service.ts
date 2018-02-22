import { Injectable } from '@angular/core';

@Injectable()
export class VsanparametersService {

 constructor() { }

  totalNodes = 2;
  totalDiskGroups = 1;
  disksPerDiskGroup= 1;
  effectiveSpace = null ;
  FTTvalue = null;
  FTTvalueOne: number = 1;
  value = 465.66;
  spaceSaveDC = 1;
  inTerabytes = 1000;
  slackSpace = 30 ;
  chartSlackspacevalue = null;
  rawTotal = null;
  fttInputValue = [];
  chartEF = null;
  chartSlack = null;
  chartRF = null;
  chartchecksum = null;
  values = [];
  newPieChart = null;
  chartFsUtil = null;
  rawCapacity = null;
  checksum = 5;

  

}
