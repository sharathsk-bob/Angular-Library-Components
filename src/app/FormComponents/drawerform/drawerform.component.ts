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
        // title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        drawertext:['', [Validators.required, Validators.minLength(25), Validators.maxLength(250)]],
        timeout: ['1000ms', [Validators.required]],
        direction: ['Left', [Validators.required]],
        color: ['Light', [Validators.required]],
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
        // }
        // if(this.drawerForm.value['color'] == "purple"){
        //   this.bgcolor="#2b0a3d";
        //   this.color="white";
        // }
        // if(this.drawerForm.value['color'] == "dark"){
        //   this.bgcolor="black";
        //   this.color="white";
        // }
        // if(this.drawerForm.value['color'] == "light"){
        //   this.bgcolor="white";
        //   this.color="#0070ad";
        // }
        this.onclose.emit();
        const data = {
          // "image1":this.drawerForm.value.image1,
          // "title":this.drawerForm.value['title'],
          // "bgcolor":this.bgcolor,
          // "color":this.color,
          "drawertext":this.drawerForm.value.drawertext,
          "timeout":this.drawerForm.value.timeout,
          "direction":this.drawerForm.value.direction,
          "color":this.drawerForm.value.color
        }
        console.log("Angular check Data>>",data);
        localStorage.setItem("drawerdata",JSON.stringify(data));
        this.router.navigate(['/component/drawer']);
      }
    }
  

}
