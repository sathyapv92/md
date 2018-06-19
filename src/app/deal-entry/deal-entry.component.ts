import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'deal-entry',
  templateUrl: './deal-entry.component.html',
  styleUrls: ['./deal-entry.component.css']
})
export class DealEntryComponent implements OnInit {
  public loading = false;
  @HostBinding('class') componentCssClass;
  constructor(private fb : FormBuilder,public overlayContainer: OverlayContainer) { }
  myGroup :FormGroup;
  ngOnInit() {
     this.myGroup = new FormGroup({
       branch: new FormControl('Demo Branch'),
      currency: new FormControl('Eur'),
      caterpillarName :new FormControl('Demo Name'),
      stripCycle: new FormControl(''),
      description: new FormControl(''),
      startDate: new FormControl('28/2/1992'),
      productType: new FormControl('Global'),
      notionalAmount  : new FormControl('1,93,00000')
     });
  
  }

  onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
   currency = ['INR', 'USD', 'OHI', 'VAS'];
   stripCycle =['Weekly','Monthly'];
   description =['Weekly','Monthly'];
   vectorAllocation=[
     { tenor:"ON",
       fundAllocationPer:"40%",
       fundAllocation:"22121221",
       legalReserve:"11%",
       legalReserveAmt:"50,000",
       benchMarkAdjPerc:"89%",
       benchMarkAdjAmt:"116,358",
      netAllocation:"891,442"
     },
     { tenor:"1y",
     fundAllocationPer:"40%",
     fundAllocation:"22121221",
     legalReserve:"11%",
     legalReserveAmt:"150,000",
     benchMarkAdjPerc:"89%",
     benchMarkAdjAmt:"11,16,358",
    netAllocation:"88,91,442"
   }
   ]
  save(formValues :FormGroup){
  console.log(formValues);
this.loading = true;
  }
}
