import { Component ,ElementRef,OnInit, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent {
  piedata:any;
  closeicon="../assets/images/close.png";
  htmlcontent="active-accordian";
  csscontent:any;
  Copy="Copy";
  CSS=`.large{
    height: 600px !important;
    width: 600px !important;
}
.medium{
  height: 500px !important;
  width: 500px !important;
}
.small{
  height: 400px !important;
  width: 400px !important;
}
.chart {
    width: 600px;
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
canvas{
    aspect-ratio: auto 900 / 898;
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
  
  `
  @ViewChild('myModalClose') ModalClose:any;
  
  @ViewChild("chart") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
  } 
  ngOnInit() {
    if(localStorage.getItem("piechartdata")) {
      var data1:any =  localStorage.getItem("piechartdata");
      this.piedata = JSON.parse(data1);

      const numOptions = this.piedata.nolayout;

      let labels=[];
      let values=[];
      let backgroundColor=[];
  if(numOptions=='1'){
      labels.push(this.piedata.title11);
      values.push(this.piedata.description11);
      backgroundColor.push('#0070ad');
    }else if(numOptions=='2'){
      labels.push(this.piedata.title21);
      values.push(this.piedata.description21);
      backgroundColor.push('#0070ad');
      labels.push(this.piedata.title22);
      values.push(this.piedata.description22);
      backgroundColor.push('#e557ad');
    }else if(numOptions=='3'){
      labels.push(this.piedata.title31);
      values.push(this.piedata.description31);
      backgroundColor.push('#0070ad');
      labels.push(this.piedata.title32);
      values.push(this.piedata.description32);
      backgroundColor.push('#2b0a3d');
      labels.push(this.piedata.title33);
      values.push(this.piedata.description33);
      backgroundColor.push('#e557ad');
    }else if(numOptions=='4'){
      labels.push(this.piedata.title1);
      values.push(this.piedata.description1);
      backgroundColor.push('#0070ad');
      labels.push(this.piedata.title2);
      values.push(this.piedata.description2);
      backgroundColor.push('#2b0a3d');
      labels.push(this.piedata.title3);
      values.push(this.piedata.description3);
      backgroundColor.push('#e557ad');
      labels.push(this.piedata.title4);
      values.push(this.piedata.description4);
      backgroundColor.push('#78cb87');
    }else if(numOptions=='5'){
      labels.push(this.piedata.title51);
      values.push(this.piedata.description51);
      backgroundColor.push('#0070ad');
      labels.push(this.piedata.title52);
      values.push(this.piedata.description52);
      backgroundColor.push('#f8d078');
      labels.push(this.piedata.title53);
      values.push(this.piedata.description53);
      backgroundColor.push('#e557ad');
      labels.push(this.piedata.title54);
      values.push(this.piedata.description54);
      backgroundColor.push('#78cb87');
      labels.push(this.piedata.title55);
      values.push(this.piedata.description55);
      backgroundColor.push('#ed6373');
    }

    this.pieChartData = {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor:backgroundColor
        },
      ],
    };

    }
  } 
  // Pie

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'left',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return '';
          }
        },
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    datasets: [ {
      data: [ 300, 500, 100 ]
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  close(){
    this.ModalClose.nativeElement.click();
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
