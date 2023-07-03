import { Component ,ElementRef,OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-erroroutput',
  templateUrl: './erroroutput.component.html',
  styleUrls: ['./erroroutput.component.scss']
})
export class ErroroutputComponent implements OnInit  {

  maintenancedata:any;
  color:any;
  dynamicdata:any = [];
  tabdata:any = [] 
  closeicon="../assets/images/close.png";
  errorimage1="../assets/images/image1.jpg";
  updatedropdown:boolean = true;
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=`.main-error{
    height: 100vh;
    .Blue{
      background-color: #0070ad;;
    }
    .Dark{
      background-color: black;
      .error-container{
        color: white;
      }
  
    }
    .Purple{
      background-color: #2b0a3d;
      .error-container{
        color: white;
      }
    }
    .Light{
      background-color: white;
      .error-container{
        color: black;
      }
    }
  }
  .error-container{
    height: 90vh;
    // .w-50{
    //   background-color: red;
    // }
    
  }
  .error-page{
      // border: 1px solid black;
      border-radius: 4px;
      // height: 90vh;
      margin-bottom: 1.5rem!important;
      background-color: white;
      box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
    
        .error-container{
          margin: 20px;
    //       position: absolute;
    // top: 20%;
    // left: 15%;
    // right: 15%;
    // bottom: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .header{
      font-size: 16vw;
    line-height: 1em;
    // text-align: center;
    // position: relative;
    
    content: attr(data-text);
    top: 0;
    left: 0;
    right: 0;
    background: -webkit-repeating-linear-gradient(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176, #b98acc, #69a6ce, #9b59b6);
    background-size: 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 1px 1px 2px rgba(255,255,255,0.25);
    animation: animate 10s ease-in-out infinite;
    }
    .error-header{
      font-size: 1.5em;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #000;
  
    max-width: 600px;
    position: relative;
    }
    .error-header:after{
      position: absolute;
    content: attr(data-text);
    top: 0;
    left: 0;
    right: 0;
    text-shadow: 1px 1px 2px rgba(255,255,255,0.4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    .btns{
      display: inline-block;
    // margin: 0 10px;
    text-decoration: none;
    border: 2px solid #69a6ce;
  //   color: #69a6ce;
    font-weight: 500;
    padding: 10px 25px;
    border-radius: 25px;
    text-transform: uppercase;
    transition: all 0.3s ease;
    background: #69a6ce;
    }
    .btns a{
     
    color: #fff!important;
    }
         
        }
  }
`;

  @ViewChild('myModalClose16') modalClose16:any;
  @ViewChild("mainerror") elRef: ElementRef;

  constructor(private router : Router, private commonservice:CommonService, elRef: ElementRef) {
    this.elRef = elRef;
  }

  

  ngOnInit() {

    
    if(localStorage.getItem("maintenancedata")) {
      var data1:any =  localStorage.getItem("maintenancedata");
      this.maintenancedata = JSON.parse(data1);
      console.log(this.maintenancedata, "data in page");
 

    }

    this.commonservice.maintenancestatusdata.subscribe((responsive)=>{

      if(responsive.length != 0) {
      this.maintenancedata = responsive;
  }

    });



  }

  
  close(){
    this.modalClose16.nativeElement.click();
  }




  backwindow(){
    this.router.navigate(['/modal']);
    localStorage.removeItem("maintenancedata");

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
