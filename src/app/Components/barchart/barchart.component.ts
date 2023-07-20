import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent {
  title = "";
  closeicon="../assets/images/close.png";

  xTitle: string;
  barchartdata:any;
  barChartOptions: any;
  barChartData: any;
  htmlcontent="active";
  csscontent:any;
  bgcolor:any;
  color:any;
  Copy="Copy";
  CSS=`
  `;

  @ViewChild('myModalClose15') modalClose1:any;
  @ViewChild("barchart") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
  }

  ngOnInit() {
    if(localStorage.getItem("barchartdata")) {
      var data1:any =  localStorage.getItem("barchartdata");
      
      this.barchartdata = JSON.parse(data1);
      // console.log(this.barchartdata.xaxistitle, "<,,,,,,,,,,,,,");
      if(this.barchartdata.color == "Dark"){
        this.bgcolor="black";
        this.color="white";
      } else if(this.barchartdata.color == "Blue"){
        this.bgcolor="#0070ad";
        this.color="white";
      } else if(this.barchartdata.color == "Purple"){
        this.bgcolor="#2b0a3d";
        this.color="white";
      } else if(this.barchartdata.color == "Light"){
        this.bgcolor="#B7C9E2";
        this.color="black";
      }

      let titleArray = [];
      let valueArray = [];
      if(this.barchartdata.nobars == 1){
        titleArray.push(this.barchartdata.btitle11);
        valueArray.push(this.barchartdata.bvalue11);
      } else if ( this.barchartdata.nobars == 2) {
        titleArray.push(this.barchartdata.btitle21);
        titleArray.push(this.barchartdata.btitle22);
        valueArray.push(this.barchartdata.bvalue21);
        valueArray.push(this.barchartdata.bvalue22);
      } else if ( this.barchartdata.nobars == 3) {
        titleArray.push(this.barchartdata.btitle31);
        titleArray.push(this.barchartdata.btitle32);
        titleArray.push(this.barchartdata.btitle33);
        valueArray.push(this.barchartdata.bvalue31);
        valueArray.push(this.barchartdata.bvalue32);
        valueArray.push(this.barchartdata.bvalue33);
      } else if ( this.barchartdata.nobars == 4) {
        titleArray.push(this.barchartdata.btitle41);
        titleArray.push(this.barchartdata.btitle42);
        titleArray.push(this.barchartdata.btitle43);
        titleArray.push(this.barchartdata.btitle44);
        valueArray.push(this.barchartdata.bvalue41);
        valueArray.push(this.barchartdata.bvalue42);
        valueArray.push(this.barchartdata.bvalue43);
        valueArray.push(this.barchartdata.bvalue44);
      } else if ( this.barchartdata.nobars == 5) {
        titleArray.push(this.barchartdata.btitle51);
        titleArray.push(this.barchartdata.btitle52);
        titleArray.push(this.barchartdata.btitle53);
        titleArray.push(this.barchartdata.btitle54);
        titleArray.push(this.barchartdata.btitle55);
        valueArray.push(this.barchartdata.bvalue51);
        valueArray.push(this.barchartdata.bvalue52);
        valueArray.push(this.barchartdata.bvalue53);
        valueArray.push(this.barchartdata.bvalue54);
        valueArray.push(this.barchartdata.bvalue55);
      }

      this.barChartOptions = {
        responsive: true,
        // We use these empty structures as placeholders for dynamic theming.
        scales: {
          x: {
            title: {
              display: true,
              text: this.barchartdata.xaxistitle,
            }
          },
          y: {
            min: 10,
            max: 1000,
            title: {
              display: true,
              text: this.barchartdata.yaxistitle,
            }
          },
          
        },
        plugins: {
          legend: {
            display: true,
          },
          datalabels: {
            anchor: 'end',
            align: 'end'
          }
        }
      };

      this.barChartData = {
        labels: titleArray,
        datasets: [
          { data: valueArray, label: 'Bar-Chart of' }
        ]
      };

    }
  }

  // public barChartData: ChartData<'bar'> = {
  //   labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  //   datasets: [
  //     { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
  //     { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
  //   ]
  // };

  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartType: ChartType = 'bar';

  close(){
    this.modalClose1.nativeElement.click();
  }

  backwindow(){
    this.router.navigate(['/modal']);
  }

  getHtmlContent() {
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
    this.htmlcontent = "active";
    this.csscontent = "noactive";
  }

  opencss(){
    this.csscontent = "active";
    this.htmlcontent = "noactive";
  }

  copy(){
    this.Copy="copied!!";
    setTimeout(()=>{
        this.Copy="Copy";
    }, 2000);
  }
}
