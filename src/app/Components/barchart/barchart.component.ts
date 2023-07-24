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
  singleChartData: any;
  columnChartData: any;
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
      let legend1valueArray = [];
      let legend2valueArray = [];
      let legend3valueArray = [];
      let legend4valueArray = [];
      let legend5valueArray = [];

      if(this.barchartdata.barchartType == 'Column') {
        if(this.barchartdata.nobars >= 5){
          titleArray.push(this.barchartdata.btitle1);
          titleArray.push(this.barchartdata.btitle2);
          titleArray.push(this.barchartdata.btitle3);
          titleArray.push(this.barchartdata.btitle4);
          titleArray.push(this.barchartdata.btitle5);
          legend1valueArray.push(this.barchartdata.bvalue201);
          legend2valueArray.push(this.barchartdata.bvalue211);
          legend1valueArray.push(this.barchartdata.bvalue202);
          legend2valueArray.push(this.barchartdata.bvalue212);
          legend1valueArray.push(this.barchartdata.bvalue203);
          legend2valueArray.push(this.barchartdata.bvalue213);
          legend1valueArray.push(this.barchartdata.bvalue204);
          legend2valueArray.push(this.barchartdata.bvalue214);
          legend1valueArray.push(this.barchartdata.bvalue205);
          legend2valueArray.push(this.barchartdata.bvalue215);
  
          legend3valueArray.push(this.barchartdata.bvalue221);
          legend3valueArray.push(this.barchartdata.bvalue222);
          legend3valueArray.push(this.barchartdata.bvalue223);
          legend3valueArray.push(this.barchartdata.bvalue224);
          legend3valueArray.push(this.barchartdata.bvalue225);
          legend4valueArray.push(this.barchartdata.bvalue231);
          legend4valueArray.push(this.barchartdata.bvalue232);
          legend4valueArray.push(this.barchartdata.bvalue233);
          legend4valueArray.push(this.barchartdata.bvalue234);
          legend4valueArray.push(this.barchartdata.bvalue235);
          legend5valueArray.push(this.barchartdata.bvalue241);
          legend5valueArray.push(this.barchartdata.bvalue242);
          legend5valueArray.push(this.barchartdata.bvalue243);
          legend5valueArray.push(this.barchartdata.bvalue244);
          legend5valueArray.push(this.barchartdata.bvalue245);
        } else if ( this.barchartdata.nobars >= 4) {
          titleArray.push(this.barchartdata.btitle1);
          titleArray.push(this.barchartdata.btitle2);
          titleArray.push(this.barchartdata.btitle3);
          titleArray.push(this.barchartdata.btitle4);
          legend1valueArray.push(this.barchartdata.bvalue201);
          legend2valueArray.push(this.barchartdata.bvalue211);
          legend1valueArray.push(this.barchartdata.bvalue202);
          legend2valueArray.push(this.barchartdata.bvalue212);
          legend1valueArray.push(this.barchartdata.bvalue203);
          legend2valueArray.push(this.barchartdata.bvalue213);
          legend1valueArray.push(this.barchartdata.bvalue204);
          legend2valueArray.push(this.barchartdata.bvalue214);
          legend3valueArray.push(this.barchartdata.bvalue221);
          legend3valueArray.push(this.barchartdata.bvalue222);
          legend3valueArray.push(this.barchartdata.bvalue223);
          legend3valueArray.push(this.barchartdata.bvalue224);
          legend4valueArray.push(this.barchartdata.bvalue231);
          legend4valueArray.push(this.barchartdata.bvalue232);
          legend4valueArray.push(this.barchartdata.bvalue233);
          legend4valueArray.push(this.barchartdata.bvalue234);
          legend5valueArray.push(this.barchartdata.bvalue241);
          legend5valueArray.push(this.barchartdata.bvalue242);
          legend5valueArray.push(this.barchartdata.bvalue243);
          legend5valueArray.push(this.barchartdata.bvalue244);
        } else if ( this.barchartdata.nobars >= 3) {
          titleArray.push(this.barchartdata.btitle1);
          titleArray.push(this.barchartdata.btitle2);
          titleArray.push(this.barchartdata.btitle3);
          legend1valueArray.push(this.barchartdata.bvalue201);
          legend2valueArray.push(this.barchartdata.bvalue211);
          legend1valueArray.push(this.barchartdata.bvalue202);
          legend2valueArray.push(this.barchartdata.bvalue212);
          legend1valueArray.push(this.barchartdata.bvalue203);
          legend2valueArray.push(this.barchartdata.bvalue213);
          legend3valueArray.push(this.barchartdata.bvalue221);
          legend3valueArray.push(this.barchartdata.bvalue222);
          legend3valueArray.push(this.barchartdata.bvalue223);
          legend4valueArray.push(this.barchartdata.bvalue231);
          legend4valueArray.push(this.barchartdata.bvalue232);
          legend4valueArray.push(this.barchartdata.bvalue233);
          legend5valueArray.push(this.barchartdata.bvalue241);
          legend5valueArray.push(this.barchartdata.bvalue242);
          legend5valueArray.push(this.barchartdata.bvalue243);
        } else if ( this.barchartdata.nobars >= 2) {
          titleArray.push(this.barchartdata.btitle1);
          titleArray.push(this.barchartdata.btitle2);
          legend1valueArray.push(this.barchartdata.bvalue201);
          legend2valueArray.push(this.barchartdata.bvalue211);
          legend1valueArray.push(this.barchartdata.bvalue202);
          legend2valueArray.push(this.barchartdata.bvalue212);
          legend3valueArray.push(this.barchartdata.bvalue221);
          legend3valueArray.push(this.barchartdata.bvalue222);
          legend4valueArray.push(this.barchartdata.bvalue231);
          legend4valueArray.push(this.barchartdata.bvalue232);
          legend5valueArray.push(this.barchartdata.bvalue241);
          legend5valueArray.push(this.barchartdata.bvalue242);
        } else if ( this.barchartdata.nobars >= 1) {
          titleArray.push(this.barchartdata.btitle51);
          titleArray.push(this.barchartdata.btitle52);
          titleArray.push(this.barchartdata.btitle53);
          titleArray.push(this.barchartdata.btitle54);
          titleArray.push(this.barchartdata.btitle55);
          titleArray.push(this.barchartdata.btitle1);
          legend1valueArray.push(this.barchartdata.bvalue201);
          legend2valueArray.push(this.barchartdata.bvalue211);
          legend3valueArray.push(this.barchartdata.bvalue221);
          legend4valueArray.push(this.barchartdata.bvalue231);
          legend5valueArray.push(this.barchartdata.bvalue241);
        }
      } else {
        if(this.barchartdata.nobars >= 5){
          titleArray.push(this.barchartdata.btitle1);
          titleArray.push(this.barchartdata.btitle2);
          titleArray.push(this.barchartdata.btitle3);
          titleArray.push(this.barchartdata.btitle4);
          titleArray.push(this.barchartdata.btitle5);
          // valueArray.push(this.barchartdata.bvalue11);
          valueArray.push(this.barchartdata.bvalue1);
          valueArray.push(this.barchartdata.bvalue2);
          valueArray.push(this.barchartdata.bvalue3);
          valueArray.push(this.barchartdata.bvalue4);
          valueArray.push(this.barchartdata.bvalue5);
        } else if ( this.barchartdata.nobars >= 4) {
          // valueArray.push(this.barchartdata.bvalue21);
          // valueArray.push(this.barchartdata.bvalue22);
          titleArray.push(this.barchartdata.btitle1);
          titleArray.push(this.barchartdata.btitle2);
          titleArray.push(this.barchartdata.btitle3);
          titleArray.push(this.barchartdata.btitle4);
          valueArray.push(this.barchartdata.bvalue1);
          valueArray.push(this.barchartdata.bvalue2);
          valueArray.push(this.barchartdata.bvalue3);
          valueArray.push(this.barchartdata.bvalue4);
        } else if ( this.barchartdata.nobars >= 3) {
          // valueArray.push(this.barchartdata.bvalue31);
          // valueArray.push(this.barchartdata.bvalue32);
          // valueArray.push(this.barchartdata.bvalue33);
          titleArray.push(this.barchartdata.btitle1);
          titleArray.push(this.barchartdata.btitle2);
          titleArray.push(this.barchartdata.btitle3);
          valueArray.push(this.barchartdata.bvalue1);
          valueArray.push(this.barchartdata.bvalue2);
          valueArray.push(this.barchartdata.bvalue3);
        } else if ( this.barchartdata.nobars >= 2) {
          // valueArray.push(this.barchartdata.bvalue41);
          // valueArray.push(this.barchartdata.bvalue42);
          titleArray.push(this.barchartdata.btitle1);
          titleArray.push(this.barchartdata.btitle2);
          valueArray.push(this.barchartdata.bvalue1);
          valueArray.push(this.barchartdata.bvalue2);
        } else if ( this.barchartdata.nobars >= 1) {
          // valueArray.push(this.barchartdata.bvalue51);
          titleArray.push(this.barchartdata.btitle1);
          valueArray.push(this.barchartdata.bvalue1);
        }
      }
      

      // console.log("LEGEND VALUE ARRAY", legend1valueArray);
      // console.log("LEGEND VALUE ARRAY", legend2valueArray);
      // console.log("Title ARRAY", titleArray);

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

      let legenddata1 = {
        label: this.barchartdata.blegend1,
        data: legend1valueArray,
        borderColor: '#36A2EB',
        backgroundColor: '#0070AD',
      };

      let legenddata2 = {
        label: this.barchartdata.blegend2,
        data: legend2valueArray,
        borderColor: '#FF6384',
        backgroundColor: '#FFDA80',
      };

      let legenddata3 = {
        label: this.barchartdata.blegend3,
        data: legend3valueArray,
        borderColor: '#FF6384',
        backgroundColor: '#E557AD',
      };
      let legenddata4 = {
        label: this.barchartdata.blegend4,
        data: legend4valueArray,
        borderColor: '#FF6384',
        backgroundColor: '#FF5770',
      };
      let legenddata5 = {
        label: this.barchartdata.blegend5,
        data: legend5valueArray,
        borderColor: '#FF6384',
        backgroundColor: '#57CF80',
      };

      let realLegendDataset = [];
      if(this.barchartdata.nolegends == 5) {
        realLegendDataset.push(legenddata1);
        realLegendDataset.push(legenddata2);
        realLegendDataset.push(legenddata3);
        realLegendDataset.push(legenddata4);
        realLegendDataset.push(legenddata5);
      } else if (this.barchartdata.nolegends == 4) {
        realLegendDataset.push(legenddata1);
        realLegendDataset.push(legenddata2);
        realLegendDataset.push(legenddata3);
        realLegendDataset.push(legenddata4);
      } else if (this.barchartdata.nolegends == 3) {
        realLegendDataset.push(legenddata1);
        realLegendDataset.push(legenddata2);
        realLegendDataset.push(legenddata3);
      } else if (this.barchartdata.nolegends == 2) {
        realLegendDataset.push(legenddata1);
        realLegendDataset.push(legenddata2);
      } else if (this.barchartdata.nolegends == 1) {
        realLegendDataset.push(legenddata1);
      }

      this.columnChartData = {
        labels: titleArray,
        datasets: realLegendDataset,
        // datasets: [
        //   {
        //     label: this.barchartdata.blegend1,
        //     data: legend1valueArray,
        //     borderColor: '#36A2EB',
        //     backgroundColor: '#0070AD',
        //   },
        //   {
        //     label: this.barchartdata.blegend2,
        //     data: legend2valueArray,
        //     borderColor: '#FF6384',
        //     backgroundColor: '#FFDA80',
        //   },
        //   {
        //     label: this.barchartdata.blegend3,
        //     data: legend3valueArray,
        //     borderColor: '#FF6384',
        //     backgroundColor: '#E557AD',
        //   },
        //   {
        //     label: this.barchartdata.blegend4,
        //     data: legend4valueArray,
        //     borderColor: '#FF6384',
        //     backgroundColor: '#FF5770',
        //   },
        //   {
        //     label: this.barchartdata.blegend5,
        //     data: legend5valueArray,
        //     borderColor: '#FF6384',
        //     backgroundColor: '#57CF80',
        //   }
        // ]

      };

      let fillcolor = [ '#0070AD', '#FFDA80', '#E557AD', '#FF5770', '#57CF80'];

      this.singleChartData = {   
        labels: titleArray,
        datasets: [
          { data: valueArray, label: 'No Label', backgroundColor: fillcolor},
        ]
      };
    }
  }


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
