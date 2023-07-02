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
  CSS=`.nav.nav-tabs li {
    padding: 10px 5px;
    cursor: pointer;
    width: 12%;
    text-align: center;
}

.tab-content {
    padding: 20px 0px;
}

.dynamics_tab{
    padding: 20px 20px;
    background-color: #fff;
    margin: 30px 0px;
}
.dynamics_tab h3 {
    text-decoration: underline;
    padding: 20px 0px;
}


.Active.dark {
    background-color: #000;
    color: #fff;
}
.Active.blue {
    background-color: #0070ad;
    color: #fff;
}
.Active.purple {
    background-color: #2b0a3d;
    color: #fff;
}
.Active.light {
    background-color: #ebebeb;
    color: #000;
}

.nav-tabs li.Inactive:hover{
    background-color: #737272;

}


.nav-tabs li.Active{
    border-bottom: 2px solid #d6aaaa;
}

.nav-tabs li.Inactive{
    background-color: #ccc;

}


@media only screen and (max-width: 767px) {
    .nav.nav-tabs li {
        width: 100%;
    }
}
`;

  @ViewChild('myModalClose16') modalClose16:any;
  @ViewChild("tabs") elRef: ElementRef;

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
