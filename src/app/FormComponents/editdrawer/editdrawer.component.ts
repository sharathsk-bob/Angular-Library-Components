import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editdrawer',
  templateUrl: './editdrawer.component.html',
  styleUrls: ['./editdrawer.component.scss']
})
export class EditdrawerComponent implements OnInit {
  title = "";
  bgcolor:any;
  color:any;
  themecolor:any;
  drawerForm: FormGroup;
  submitted = false;
  headerdata:any;
  image1checked:any;
  noimage1checked:any;
  image2checked:any;
  noimage2checked:any;
  image3checked:any;
  noimage3checked:any;

  @Output() onclose = new EventEmitter<any>;
  constructor( private router:Router,
    private formBuilder: FormBuilder
   ) {}

   ngOnInit() {
    if(localStorage.getItem("data")) {
      var data1:any =  localStorage.getItem("data");
      this.headerdata = JSON.parse(data1);

      console.log(">>>",this.headerdata);
      if(this.headerdata.bgcolor == "#0070ad"){
        this.themecolor = "blue";
      } else if(this.headerdata.bgcolor == "#2b0a3d"){
        this.themecolor = "purple";
      } else if(this.headerdata.bgcolor == "black"){
        this.themecolor = "dark";
      } else if(this.headerdata.bgcolor == "white"){
        this.themecolor = "light";
      }

      const image1value = () => {
        if(this.headerdata.bgcolor == "#0070ad"){
          if(this.headerdata.image1  == "Yes" && this.headerdata.whitewbh  == "Yes"){
            return "Yes";
          } else if(this.headerdata.image1  == "No" && this.headerdata.whitewbh  == "Yes") {
            return "Yes";
          } else {
            return "No";
          }
        } else if(this.headerdata.bgcolor == "black"){
          if(this.headerdata.image1  == "Yes"){
            return "Yes";
          } else {
            return "No";
          }
        } else if(this.headerdata.bgcolor == "#2b0a3d"){
          if(this.headerdata.image1  == "Yes"){
            return "Yes";
          } else {
            return "No";
          }
        } else if(this.headerdata.bgcolor == "white"){
          if(this.headerdata.image1  == "Yes"){
            return "Yes";
          } else {
            return "No";
          }
        } 
       }
  
       const image2value = () => {
        if(this.headerdata.image2  == "Yes"){
          return "Yes";
        } else {
          return "No";
        }
       }
  
       const image3value = () => {
        if(this.headerdata.bgcolor == "#0070ad"){
          if(this.headerdata.image3  == "Yes" && this.headerdata.image4  == "Yes"){
            return "Yes";
          } else if(this.headerdata.image3  == "No" && this.headerdata.image4  == "No"){
            return "No";
          } else {
            return "No";
          }
        } else if(this.headerdata.bgcolor == "#2b0a3d") {
          if(this.headerdata.image3  == "Yes"){
            return "Yes";
          } else if(this.headerdata.image3  == "No" && this.headerdata.image4  == "Yes") {
            return "Yes";
          } else if(this.headerdata.image3  == "No" && this.headerdata.image4  == "No"){
            return "No";
          } else {
            return "";
          }
        } else if(this.headerdata.bgcolor == "black") {
          if(this.headerdata.image3  == "Yes" && this.headerdata.image4  == "Yes"){
            return "Yes";
          } else if(this.headerdata.image3  == "No" && this.headerdata.image4  == "No"){
            return "No";
          } else {
            return "";
          }
        } else if(this.headerdata.bgcolor == "white") {
          if(this.headerdata.image3  == "Yes"){
            return "Yes";
          } else if(this.headerdata.image3  == "No" && this.headerdata.image4  == "Yes") {
            return "Yes";
          } else if(this.headerdata.image3  == "No" && this.headerdata.image4  == "No"){
            return "No";
          } else {
            return "";
          }
        }  else {
          return "";
        }
      
      }
  this.drawerForm = this.formBuilder.group({
    image1:[image1value(), [Validators.required]],
    image2: [image2value(), [Validators.required]],
    image3: [image3value(), [Validators.required]],
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    welcome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    color: ['light', [Validators.required]],
  });
  }

};

   reloadComponent(self:boolean,urlToNavigateTo ?:string){
    //skipLocationChange:true means dont update the url to / when navigating
   const url=self ? this.router.url : "component/drawer";
   this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this.router.navigate([`/${url}`]).then(()=>{
      //  console.log(`After navigation I am on:${this.router.url}`)
     })
   })
  }

  get f(){
    return this.drawerForm.controls;
  }
  


  onSubmit(){
    this.submitted = true;
    if(this.drawerForm.invalid) {
      return true;
    }
    else {
      // if(this.drawerForm.value['image1']== "Yes"){
      //   this.drawerForm.value['image1']="block";
      // } else {
      //   this.drawerForm.value['image1']="none";
      // }
      // if(this.drawerForm.value['image2']== "Yes"){
      //   this.drawerForm.value['image2']="block";
      // } else {
      //   this.drawerForm.value['image2']="none";
      // }
      if(this.drawerForm.value['color'] == "blue"){
        this.bgcolor="#0070ad";
        this.color="white";
        if(this.drawerForm.value['image1']== "Yes"){
          this.drawerForm.value['whitewbh']="Yes";
        } else {
          this.drawerForm.value['whitewbh']="No";
        }
        if(this.drawerForm.value['image3']== "Yes"){
          this.drawerForm.value.image4="Yes";
        } else {
          this.drawerForm.value.image4="No";
        }
      }
      if(this.drawerForm.value['color'] == "purple"){
        this.bgcolor="#2b0a3d";
        this.color="white";
        if(this.drawerForm.value['image1']== "Yes"){
          this.drawerForm.value['whitewbh']="No";
        } else {
          this.drawerForm.value['whitewbh']="No";
        }
        if(this.drawerForm.value['image3']== "Yes"){
          this.drawerForm.value.image4="Yes";
        } else {
          this.drawerForm.value.image4="No";
        }
      }
      if(this.drawerForm.value['color'] == "dark"){
        this.bgcolor="black";
        this.color="white";
        if(this.drawerForm.value['image1']== "Yes"){
          this.drawerForm.value['whitewbh']="No";
        } else {
          this.drawerForm.value['whitewbh']="No";
        }
        if(this.drawerForm.value['image3']== "Yes"){
          this.drawerForm.value.image4="Yes";
        } else {
          this.drawerForm.value.image4="No";
        }
      }
      if(this.drawerForm.value['color'] == "light"){
        this.bgcolor="white";
        this.color="#0070ad";
        if(this.drawerForm.value['image1']== "Yes"){
          this.drawerForm.value['whitewbh']="No";
        } else {
          this.drawerForm.value['whitewbh']="No";
        }
        if(this.drawerForm.value['image3']== "Yes"){
          this.drawerForm.value.image4="No";
        } else {
          this.drawerForm.value.image4="No";
        }
      }

      this.onclose.emit();
      const data = {
        "image1":this.drawerForm.value.image1,
        "image2":this.drawerForm.value.image2,
        "image3":this.drawerForm.value.image3,
        "image4":this.drawerForm.value.image4,
        "title":this.drawerForm.value['title'],
        "welcome":this.drawerForm.value['welcome'],
        "bgcolor":this.bgcolor,
        "color":this.color,
        "whitewbh":this.drawerForm.value.whitewbh
      }
      console.log(">>",data);


      localStorage.setItem("data",JSON.stringify(data));
      this.router.navigate(['/component/header']);
      this.reloadComponent(true);
    }
  }

}
