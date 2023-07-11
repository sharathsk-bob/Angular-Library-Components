import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {

  title = "";
  // img1="../assets/images/WellBeingHubLogo.png";
  // img2="../assets/images/notify.png";
  // img3="../assets/images/cg_logo.svg";
  // img4="../assets/images/Capgemini white logo.png";
  // whitewbh="../assets/images/WBH logo-on dark surface.png";
  closeicon="../assets/images/close.png";

  drawerdata:any;
  htmlcontent="active";
  csscontent:any;
  bgcolor:any;
  color:any;
  Copy="Copy";
  CSS=`.drawer-content {
    text-align: center;
    margin: 80px 0px;
}

.btn-custom {
    background-color: #0070AD;
    color: white;
}

.btn-custom:focus {
    border: 2px black solid;
}

.drawer-slide-low {
    transition: 1000ms ease-in;
}

.drawer-slide-medium {
    transition: 2000ms ease-in;
}

.drawer-slide-high {
    transition: 5000ms ease-in;
}`
  
  @ViewChild('myModalClose15') modalClose1:any;
  @ViewChild("drawer") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
  }
  
  ngOnInit() {
    if(localStorage.getItem("drawerdata")) {
      var data1:any =  localStorage.getItem("drawerdata");
      this.drawerdata = JSON.parse(data1);
      if(this.drawerdata.color == "Dark"){
        this.bgcolor="black";
        this.color="white";
      } else if(this.drawerdata.color == "Blue"){
        this.bgcolor="#0070ad";
        this.color="white";
      } else if(this.drawerdata.color == "Purple"){
        this.bgcolor="#2b0a3d";
        this.color="white";
      } else if(this.drawerdata.color == "Light"){
        this.bgcolor="#B7C9E2";
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
  }openhtml(){
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
