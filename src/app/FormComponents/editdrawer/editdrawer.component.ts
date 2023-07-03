import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editdrawer',
  templateUrl: './editdrawer.component.html',
  styleUrls: ['./editdrawer.component.scss']
})
export class EditdrawerComponent implements OnInit {

  // title = "";
  drawertext: any;
  drawerForm: FormGroup;
  submitted = false;
  drawerdata: any;

  @Output() onclose = new EventEmitter<any>;

  constructor( private router:Router,
    private formBuilder: FormBuilder
   ) {}

   ngOnInit() {
    if(localStorage.getItem("drawerdata")) {
      var data1:any =  localStorage.getItem("drawerdata");
      this. drawerdata = JSON.parse(data1);
      console.log(">>>>>",this.drawerdata);
      this.drawertext = this.drawerdata.drawertext;
    }
    
  this.drawerForm = this.formBuilder.group({
    // image1:[image1value(), [Validators.required]],
    // title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    // welcome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    drawertext:['', [Validators.required, Validators.minLength(25), Validators.maxLength(250)]],
    timeout: ['1000ms', [Validators.required]],
    direction: ['Left', [Validators.required]],
    color: ['light', [Validators.required]],
  });


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
      console.log(">>>",this.drawerForm.value);

      const data = {
        // "image4":this.drawerForm.value.image4,
        // "title":this.drawerForm.value['title'],
        // "welcome":this.drawerForm.value['welcome'],
        // "bgcolor":this.bgcolor,
        // "color":this.color,
        "drawertext":this.drawerForm.value.drawertext,
        "timeout":this.drawerForm.value.timeout,
        "direction":this.drawerForm.value.direction,
        "color":this.drawerForm.value.color
      }

      this.onclose.emit();
      console.log(">>",data);
      localStorage.setItem("drawerdata",JSON.stringify(data));
      this.router.navigate(['/component/drawer']);
      this.reloadComponent(true);
    }
  }

}
