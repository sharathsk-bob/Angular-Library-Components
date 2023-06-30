import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawerform',
  templateUrl: './drawerform.component.html',
  styleUrls: ['./drawerform.component.scss']
})
export class DrawerformComponent implements OnInit{

    // title = "";
    bgcolor:any;
    color:any;
    drawerForm: FormGroup;
    submitted = false;
  
    @Output() onclose = new EventEmitter<any>;
  
    constructor( private router:Router,
      private formBuilder: FormBuilder
    ) {}
  
    ngOnInit() {
  
    this.drawerForm = this.formBuilder.group({
      // image1:['', [Validators.required]],
      // image2: ['', [Validators.required]],
      // image3: ['', [Validators.required]],
      // title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      // welcome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      color: ['Light', [Validators.required]],
      direction: ['--Select--', [Validators.required]],
    });
  
  };
  
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
  
        // if(this.drawerForm.value['color'] == "blue"){
        //   this.bgcolor="#0070ad";
        //   this.color="white";
        //   if(this.drawerForm.value['image1']== "Yes"){
        //     this.drawerForm.value['whitewbh']="Yes";
        //   } else {
        //     this.drawerForm.value['whitewbh']="No";
        //   }
        //   if(this.drawerForm.value['image3']== "Yes"){
        //     this.drawerForm.value.image4="Yes";
        //   } else {
        //     this.drawerForm.value.image4="No";
        //   }
        // }
        // if(this.drawerForm.value['color'] == "purple"){
        //   this.bgcolor="#2b0a3d";
        //   this.color="white";
        //   if(this.drawerForm.value['image1']== "Yes"){
        //     this.drawerForm.value['whitewbh']="No";
        //   } else {
        //     this.drawerForm.value['whitewbh']="No";
        //   }
        //   if(this.drawerForm.value['image3']== "Yes"){
        //     this.drawerForm.value.image4="Yes";
        //   } else {
        //     this.drawerForm.value.image4="No";
        //   }
        // }
        // if(this.drawerForm.value['color'] == "dark"){
        //   this.bgcolor="black";
        //   this.color="white";
        //   if(this.drawerForm.value['image1']== "Yes"){
        //     this.drawerForm.value['whitewbh']="No";
        //   } else {
        //     this.drawerForm.value['whitewbh']="No";
        //   }
        //   if(this.drawerForm.value['image3']== "Yes"){
        //     this.drawerForm.value.image4="Yes";
        //   } else {
        //     this.drawerForm.value.image4="No";
        //   }
        // }
        // if(this.drawerForm.value['color'] == "light"){
        //   this.bgcolor="white";
        //   this.color="#0070ad";
        //   if(this.drawerForm.value['image1']== "Yes"){
        //     this.drawerForm.value['whitewbh']="No";
        //   } else {
        //     this.drawerForm.value['whitewbh']="No";
        //   }
        //   if(this.drawerForm.value['image3']== "Yes"){
        //     this.drawerForm.value.image4="No";
        //   } else {
        //     this.drawerForm.value.image4="No";
        //   }
        // }
        this.onclose.emit();
        const data = {
          // "image1":this.drawerForm.value.image1,
          // "image2":this.drawerForm.value.image2,
          // "image3":this.drawerForm.value.image3,
          // "image4":this.drawerForm.value.image4,
          // "title":this.drawerForm.value['title'],
          // "welcome":this.drawerForm.value['welcome'],
          // "bgcolor":this.bgcolor,
          "color":this.color,
          // "whitewbh":this.drawerForm.value.whitewbh
        }
        console.log(">>",data);
  
  
        localStorage.setItem("data",JSON.stringify(data));
        this.router.navigate(['/component/drawer']);
      }
    }
  

}
