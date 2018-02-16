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
  spaceSaveDC = 1;
  inTerabytes = 1000;
  slackSpace = null ;
  chartSlackspacevalue = null;
  rawTotal = null;
  fttInputValue = [];
  chartEF = null;
  chartSlack = null;
  chartRF = null;
  values = [];
  newPieChart = null;
  chartFsUtil = null;
  rawCapacity = null;

  

}
