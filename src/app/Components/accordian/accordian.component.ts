import { Router } from '@angular/router';
import { Component ,ElementRef,OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent {

  accordiandata:any;
  closeicon="../assets/images/close.png";
  htmlcontent="active-accordian";
  csscontent:any;
  Copy="Copy";
  bgcolor:any;
  color:any;
  CSS=`@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css");
  .accordion {
    margin: 20px 20px 20px 20px;
  }
  .accordion-item {
    margin: 20px 0px 20px 0px;
  }
  .accordion-button:not(.collapsed) {
    color: white;
    background-color: #0070ad;
    box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
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
  .accordion-button:focus {
    border: 3px solid grey !important;
    box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%) !important;
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
  
  .Arrow::after {
    background-image:url("../../../assets/images/arrow-white.png")!important;
    background-size: contain;
    width: 15px !important;
    background-position: center;
    height: 15px !important;
    transform: rotate(270deg);
  }
  
  .Arrow:not(.collapsed)::after {
    background-image: url("../../../assets/images/arrow-white.png") !important;
    background-size: contain;
    width: 15px !important;
    background-position: center;
    height: 15px !important;
    transform: rotate(90deg);
  }
  
  .Plus::after {
    background-image: none !important;
    content:"\f067";
    font-family: FontAwesome;
  }
  
  .Plus:not(.collapsed)::after {
    background-image: none !important;
    content:"\f068";
    padding-right: 5px;
    transform: rotate(0deg);
  }
  
  `
  @ViewChild('myModalClose14') modalClose1:any;
  
  @ViewChild("accordian") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
  } 
 
  ngOnInit() {
    if(localStorage.getItem("accordiandata")) {
      var data1:any =  localStorage.getItem("accordiandata");
      this.accordiandata = JSON.parse(data1);

      if(this.accordiandata.color == "dark"){
        this.bgcolor="black";
        this.color="white";
      } else if(this.accordiandata.color == "blue"){
        this.bgcolor="#0070ad";
        this.color="white";
      } else if(this.accordiandata.color == "purple"){
        this.bgcolor="#2b0a3d";
        this.color="white";
      } else if(this.accordiandata.color == "light"){
        this.bgcolor="white";
        this.color="black";
      }


    }
  } 
  close(){
    this.modalClose1.nativeElement.click();
  }
  backwindow(){
    this.router.navigate(['/modal']);
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
