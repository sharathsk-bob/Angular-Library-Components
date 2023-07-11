import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {
 
  constructor(private router: Router) {

  }
  
@ViewChild("myModalClose") ModalClose:any;
@ViewChild("myModalClose1") ModalClose1:any;
@ViewChild("myModalClose2") ModalClose2:any


 
  chartscomponentarray = [
    {id:1,name:"Pie Chart"},
    {id:2,name:"Donut Chart"},
    {id:3,name:"Bar Chart"},
     
   

];
 
formsubheading = "This components help to create and customize the";
closeicon="../assets/images/close.png";


close(){
  this.ModalClose.nativeElement.click();
  this.ModalClose1.nativeElement.click();
  this.ModalClose2.nativeElement.click();
  
  
}


  backwindow(){
    this.router.navigate(['/modal']);
  } 

  turncate=(str:any)=>{
    return str.length>10? str.substring(0,95):str;
  } 

 

}
