import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VsanefComponent } from './vsanef/vsanef.component';
import { HybridComponent } from './hybrid/hybrid.component';
import { AllflashComponent } from './allflash/allflash.component';
import { VsanchartComponent } from './vsanchart/vsanchart.component';

import { VsanparametersService } from './services/vsanparameters.service';

const  routeList: Routes = [

  {path: "", component: AllflashComponent },
  {path: "allflash", component: AllflashComponent },
  {path: "hybrid", component: HybridComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    VsanefComponent,
    HybridComponent,
    AllflashComponent,
    VsanchartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeList)

  ],
  schemas: [],
  providers: [VsanparametersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
