import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent {
  title = "";
  closeicon="../assets/images/close.png";

  barchartdata:any;
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

  close(){
    this.modalClose1.nativeElement.click();
  }

  backwindow(){
    this.router.navigate(['/modal']);
  }

  ngOnInit() {
    if(localStorage.getItem("barchartdata")) {
      var data1:any =  localStorage.getItem("barchartdata");
      this.barchartdata = JSON.parse(data1);
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

    }
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
