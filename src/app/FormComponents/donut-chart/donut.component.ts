import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutChartComponent {

  registerForm:any;
  submitted = false;
  errordata:any;
  color:any;

  @Output() onclose = new EventEmitter<any>;

  
  constructor( private router:Router,
     private formBuilder: FormBuilder,
     private commonservice:CommonService
    ) {}

  ngOnInit() {

    // if(localStorage.getItem("data")) {
    //   var data1:any =  localStorage.getItem("data");
    //   this.errordata = JSON.parse(data1);
    // //   console.log(">>>>>",this.tabledata);
    // // console.log(">>>>>>>>>>>>>>>>>headerdata",this.headerdata);
    // }

//    const  tablestrip = () => {
//       if(this..tablestrip == "Yes"){
//         return "Yes";
//         } else {
//           return "No";
//         }
//     }
this.registerForm = this.formBuilder.group({
  title: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(250)]],
  selectedType:['Error Page', [Validators.required]],
  cardwidth:['100%', [Validators.required]],
  theme:['Dark', [Validators.required]]
});

if(localStorage.getItem("maintenancedata")){
  var data1:any =  localStorage.getItem("maintenancedata");
  this.errordata = JSON.parse(data1);
  console.log(">>>>",this.errordata );
  this.registerForm.get("title")?.setValue(this.errordata ?.title);
  this.registerForm.get("selectedType")?.setValue(this.errordata ?.selectedType);
  this.registerForm.get("theme")?.setValue(this.errordata ?.theme);
  this.registerForm.get("cardwidth")?.setValue(this.errordata ?.cardwidth);
}


 
};

  get f(){
    return this.registerForm.controls;
  }


  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid) { 
      return true;
      
    }
    else {
      console.log(">>>",this.registerForm.value);

      if(this.registerForm.value.theme == "light"){
        this.registerForm.value.color = "#F1F4F8";
      } else if(this.registerForm.value.theme == "dark"){
        this.registerForm.value.color = "black"
      } else if(this.registerForm.value.theme == "blue"){
        this.registerForm.value.color = "#0070ad"
      } else if(this.registerForm.value.theme == "purple"){
        this.registerForm.value.color = "#2b0a3d"
      }

      this.onclose.emit();
      const data = {
        "title":this.registerForm.value.title,
        "selectedType":this.registerForm.value.selectedType,
        "cardwidth":this.registerForm.value.cardwidth,
        "color":this.registerForm.value.color,
        "theme":this.registerForm.value.theme
      }
      console.log(">>",data);
      this.commonservice.maintenancecompletedata(data);
      localStorage.setItem("maintenancedata",JSON.stringify(data));
      this.router.navigate(['/component/errorpage']);
    }
  }

}
