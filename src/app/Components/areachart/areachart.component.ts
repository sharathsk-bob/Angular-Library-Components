import { Component ,ElementRef,OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Router } from '@angular/router';

import { default as Annotation } from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.scss']
})
export class AreachartComponent {
  areadata:any;
  closeicon="../assets/images/close.png";
  htmlcontent="active-accordian";
  csscontent:any;
  xlabel:any;
  ylabel:any;
  Copy="Copy";
  CSS=`
  .areacanvas{
    height: 450px !important;
    width: 900px !important;
    margin: auto;
}
.accordianmodal {
    max-width: 50% !important;
  }
  .modal-dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100%;
  }
.htmlelement {
    background-color: var(--color-white);
    overflow-y: scroll;
    width: 100%;
    height: 350px;
    margin: auto;
    margin-top: 30px;
    padding-top: 30px;
  }
  .active-accordian {
    border-bottom: 1px solid black !important;
    padding-bottom: 5px !important;
  }
  .copybutton {
    text-align: end;
    margin-right: 40px;
    margin-top: 30px;
    button {
      border: 1.5px solid black;
      background: transparent;
      border-radius: 10px;
      padding: 5px 10px;
    }
    .copyicon {
      margin-right: 5px;
    }
  }
  .list-inline {
    padding-left: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    li:first-child {
      margin-right: 10px;
    }
    li {
      cursor: pointer;
      button {
        border: none;
        background: transparent;
        padding: 0px;
      }
    }
  }
  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    .areacanvas{
      height: 350px !important;
      width: 600px !important;
  }
  }
  @media only screen and (min-width: 567px) and (max-width: 767px) {
    .areacanvas{
      height: 350px !important;
      width: 400px !important;
  }
  }
  @media only screen and (min-width: 300px) and (max-width: 567px) {
    .areacanvas{
      height: 250px !important;
      width: 300px !important;
  }
  }
  
  `
  @ViewChild('myModalClose4') ModalClose4:any;
  
  @ViewChild("areachart") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
    Chart.register(Annotation)
  } 
  ngOnInit() {
    if(localStorage.getItem("areachartdata")) {
      var data1:any =  localStorage.getItem("areachartdata");
      this.areadata = JSON.parse(data1);
      const count=this.areadata.count;
      let numOptions = this.areadata.nolayout;
      

      let labels=[];
      let valuesx=[];
      let values=[];
      let bgcolor=[];
if(count=='Multiple'){
 if(numOptions=='2'){
  this.xlabel=this.areadata.legendXlabel2;
  this.ylabel=this.areadata.legendYlabel2;
  console.log(this.areadata.legendMultipleName,this.areadata.legendMultipleValuesx)
    labels.push(this.areadata.legendMultipleName);
    values.push(this.areadata.legendMultipleValues);
    bgcolor.push('#78cb87');
    valuesx.push(this.areadata.legendMultipleValuesx);
    labels.push(this.areadata.legendMultiple1Name);
    values.push(this.areadata.legendMultiple1Values);
    bgcolor.push('#0070ad');
   // valuesx.push(this.areadata.legendMultiple1Valuesx);
    }else if(numOptions=='3'){
      this.xlabel=this.areadata.legendXlabel3;
      this.ylabel=this.areadata.legendYlabel3;
      labels.push(this.areadata.legendMultiple3Name);
    values.push(this.areadata.legendMultiple3Values);
    valuesx.push(this.areadata.legendMultiple3Valuesx);
    bgcolor.push('#ed6373');
    labels.push(this.areadata.legendMultiple31Name);
    values.push(this.areadata.legendMultiple31Values);
    bgcolor.push('#0070ad');
    labels.push(this.areadata.legendMultiple32Name);
    values.push(this.areadata.legendMultiple32Values);
    bgcolor.push('#e557ad');
    }
  }else{
    numOptions = 1;
    this.xlabel=this.areadata.legendXlabel;
    this.ylabel=this.areadata.legendYlabel;
    console.log(this.areadata.legendName,this.areadata.legendValues)
    labels.push(this.areadata.legendName);
    values.push(this.areadata.legendValues);
    valuesx.push(this.areadata.legendValuesx);
    bgcolor.push('#0070ad');
  }
  let labelsnew=labels.filter(elements => {
    return elements !== null;
   });
  let valuesnew=values.map((e)=>e.filter((elements:any)=> {
    return elements !== null;
   }));
  let valuesxnew=valuesx.map((e)=>e.filter((elements:any)=> {
    return elements !== '';
   }));
  console.log(labelsnew,valuesnew,valuesxnew);

    this.lineChartData = {
      //labels: labels,
      labels: valuesxnew[0],
      datasets: [],
    };
    this.lineChartOptions={
      elements: {
        line: {
          tension: 0
        }
      },
      responsive: true,
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        y:
          {
            position: 'left',
            title:{
              display:true,
              text:  this.ylabel
            },
            
          },
        y1: {
          position: 'right',
          grid: {
            display:false,
          },
          ticks: {
            color: 'red'
          }
        },
        x:
        {
          title:{
            display:true,
            text:this.xlabel
          }
          
        },
      },
      
  
      plugins: {
        legend: { display: true },
       
      }
    }

    for (let i = 0; i < parseInt(numOptions); i++) {
      const dataset = {
        data: valuesnew[i], 
        label: labelsnew[i], 
        backgroundColor: bgcolor[i],
        borderColor: bgcolor[i],
        pointBackgroundColor: bgcolor[i],
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: bgcolor[i],
        fill: 'origin',
      };
      this.lineChartData.datasets.push(dataset);
    }
    }
  } 


  private newLabel? = 'New label';

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        backgroundColor: 'rgba(148,159,177)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [ 28, 48, 40, 19, 40, 27, 40 ],
        label: 'Series B',
        backgroundColor: 'rgba(77,83,96)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: [ 180, 480, 770, 90, 1000, 270, 400 ],
        label: 'Series C',
        yAxisID: 'y1',
        backgroundColor: 'rgba(255,0,0,0.9)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177)',
        fill: 'origin',
      }
    ],
    //labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0
      }
    },
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y:
        {
          position: 'left',
          title:{
            display:true,
            text:  'Y-axis'
          },
          
        },
      y1: {
        position: 'right',
        grid: {
          display:false,
        },
        ticks: {
          color: 'red'
        }
      },
      x:
      {
        title:{
          display:true,
          text:'X-axis'
        }
        
      },
    },
    

    plugins: {
      legend: { display: true },
     
    }
  };

  public lineChartType: ChartType = 'line';
  
  close(){
    this.ModalClose4.nativeElement.click();
  }
  backwindow(){
    this.router.navigate(['/component/charts']);
  }

  getHtmlContent() {
    //This will return '<p> Text </p>' as a string
    const html = this.elRef.nativeElement.innerHTML;
    const lines = html.split('>');
    var indentSize = 2;
    for (let i = 0; i < lines.length - 1; i++) {
      if (i >= 1 && i < lines.length - 2) {
        // indentSize++;
        // lines[i] = ' '.startsWith('</')
        lines[i] = ' '.repeat(indentSize) + lines[i].trim() + '>';
      } else {
        lines[i] = lines[i].trim() + '>';
      }
    }
    const formattedCode = lines.join('\n');
    // console.log(formattedCode);
    return formattedCode;
  }
  openhtml(){
    this.htmlcontent = "active-accordian";
    this.csscontent = "noactive-accordian";
  }
  
  opencss(){
    this.csscontent = "active-accordian";
    this.htmlcontent = "noactive-accordian";
  }
  
  copy(){
    this.Copy="copied!!";
    setTimeout(()=>{
        this.Copy="Copy";
    }, 2000);
  }
}
