import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpiechart',
  templateUrl: './editpiechart.component.html',
  styleUrls: ['./editpiechart.component.scss']
})
export class EditpiechartComponent {
  title = "";
  layout:any;
  registerForm: FormGroup;
  submitted = false;
  piechartdata:any;

  @Output() onclose = new EventEmitter<any>;
 
  constructor( private router:Router,
     private formBuilder: FormBuilder
    ) {}


  ngOnInit() {
    if(localStorage.getItem("piechartdata")) {
      var data1:any =  localStorage.getItem("piechartdata");
      this.piechartdata = JSON.parse(data1);
      console.log(">>>>>",this.piechartdata);
      this.layout = this.piechartdata.nolayout;
    }
    this.registerForm = this.formBuilder.group({
      nolayout:['',[Validators.required]],
      title1:[''],
      title11:[''],
      title21:[''],
      title22:[''],
      title31:[''],
      title32:[''],
      title33:[''],
      title51:[''],
      title52:[''],
      title53:[''],
      title54:[''],
      title55:[''],
      description1:[''],
      description11:[''],
      description21:[''],
      description22:[''],
      description31:[''],
      description32:[''],
      description33:[''],
      description51:[''],
      description52:[''],
      description53:[''],
      description54:[''],
      description55:[''],
      title2:[''],
      description2:[''],
      title3:[''],
      description3:[''],
      title4:[''],
      description4:[''],
      symbol:['small',[Validators.required]]
    });

    this.registerForm.get("nolayout")?.valueChanges.subscribe((result)=>{

      console.log("sharath",result);

      if(result == 1) {
        this.registerForm.get("title11")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description11")?.setValidators([Validators.required,Validators.min(1), Validators.max(1000)]);
        this.registerForm.get("title1")?.clearValidators();
        this.registerForm.get("description1")?.clearValidators();
        this.registerForm.get("title2")?.clearValidators();
        this.registerForm.get("description2")?.clearValidators();
        this.registerForm.get("title3")?.clearValidators();
        this.registerForm.get("description3")?.clearValidators();
        this.registerForm.get("title4")?.clearValidators();
        this.registerForm.get("description4")?.clearValidators();
        this.registerForm.get("title1")?.setValue("");
        this.registerForm.get("description1")?.setValue("");
        this.registerForm.get("title2")?.setValue("");
        this.registerForm.get("description2")?.setValue("");
        this.registerForm.get("title3")?.setValue("");
        this.registerForm.get("description3")?.setValue("");
        this.registerForm.get("title4")?.setValue("");
        this.registerForm.get("description4")?.setValue("");

        this.registerForm.get("title51")?.clearValidators();
        this.registerForm.get("description51")?.clearValidators();
        this.registerForm.get("title52")?.clearValidators();
        this.registerForm.get("description52")?.clearValidators();
        this.registerForm.get("title53")?.clearValidators();
        this.registerForm.get("description53")?.clearValidators();
        this.registerForm.get("title54")?.clearValidators();
        this.registerForm.get("description54")?.clearValidators();
        this.registerForm.get("title51")?.setValue("");
        this.registerForm.get("description51")?.setValue("");
        this.registerForm.get("title52")?.setValue("");
        this.registerForm.get("description52")?.setValue("");
        this.registerForm.get("title53")?.setValue("");
        this.registerForm.get("description53")?.setValue("");
        this.registerForm.get("title54")?.setValue("");
        this.registerForm.get("description54")?.setValue("");

        this.registerForm.get("title21")?.clearValidators();
        this.registerForm.get("description21")?.clearValidators();
        this.registerForm.get("title22")?.clearValidators();
        this.registerForm.get("description22")?.clearValidators();
        this.registerForm.get("title21")?.setValue("");
        this.registerForm.get("description21")?.setValue("");
        this.registerForm.get("title22")?.setValue("");
        this.registerForm.get("description22")?.setValue("");

        this.registerForm.get("title31")?.clearValidators();
        this.registerForm.get("description31")?.clearValidators();
        this.registerForm.get("title32")?.clearValidators();
        this.registerForm.get("description32")?.clearValidators();
        this.registerForm.get("title33")?.clearValidators();
        this.registerForm.get("description33")?.clearValidators();
        this.registerForm.get("title31")?.setValue("");
        this.registerForm.get("description31")?.setValue("");
        this.registerForm.get("title32")?.setValue("");
        this.registerForm.get("description32")?.setValue("");
        this.registerForm.get("title33")?.setValue("");
        this.registerForm.get("description33")?.setValue("");
      } else if(result == 2){
        this.registerForm.get("title21")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description21")?.setValidators([Validators.required,Validators.min(1), Validators.max(1000)]);
        this.registerForm.get("title22")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description22")?.setValidators([Validators.required,Validators.min(1), Validators.max(1000)]);

        this.registerForm.get("title1")?.clearValidators();
        this.registerForm.get("description1")?.clearValidators();
        this.registerForm.get("title2")?.clearValidators();
        this.registerForm.get("description2")?.clearValidators();
        this.registerForm.get("title3")?.clearValidators();
        this.registerForm.get("description3")?.clearValidators();
        this.registerForm.get("title4")?.clearValidators();
        this.registerForm.get("description4")?.clearValidators();
        this.registerForm.get("title1")?.setValue("");
        this.registerForm.get("description1")?.setValue("");
        this.registerForm.get("title2")?.setValue("");
        this.registerForm.get("description2")?.setValue("");
        this.registerForm.get("title3")?.setValue("");
        this.registerForm.get("description3")?.setValue("");
        this.registerForm.get("title4")?.setValue("");
        this.registerForm.get("description4")?.setValue("");

        this.registerForm.get("title51")?.clearValidators();
        this.registerForm.get("description51")?.clearValidators();
        this.registerForm.get("title52")?.clearValidators();
        this.registerForm.get("description52")?.clearValidators();
        this.registerForm.get("title53")?.clearValidators();
        this.registerForm.get("description53")?.clearValidators();
        this.registerForm.get("title54")?.clearValidators();
        this.registerForm.get("description54")?.clearValidators();
        this.registerForm.get("title51")?.setValue("");
        this.registerForm.get("description51")?.setValue("");
        this.registerForm.get("title52")?.setValue("");
        this.registerForm.get("description52")?.setValue("");
        this.registerForm.get("title53")?.setValue("");
        this.registerForm.get("description53")?.setValue("");
        this.registerForm.get("title54")?.setValue("");
        this.registerForm.get("description54")?.setValue("");

        this.registerForm.get("title11")?.clearValidators();
        this.registerForm.get("description11")?.clearValidators();
        this.registerForm.get("title11")?.setValue("");
        this.registerForm.get("description11")?.setValue("");

        this.registerForm.get("title31")?.clearValidators();
        this.registerForm.get("description31")?.clearValidators();
        this.registerForm.get("title32")?.clearValidators();
        this.registerForm.get("description32")?.clearValidators();
        this.registerForm.get("title33")?.clearValidators();
        this.registerForm.get("description33")?.clearValidators();
        this.registerForm.get("title31")?.setValue("");
        this.registerForm.get("description31")?.setValue("");
        this.registerForm.get("title32")?.setValue("");
        this.registerForm.get("description32")?.setValue("");
        this.registerForm.get("title33")?.setValue("");
        this.registerForm.get("description33")?.setValue("");

      } else if(result == 3){
        this.registerForm.get("title31")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description31")?.setValidators([Validators.required,Validators.min(1), Validators.max(1000)]);
        this.registerForm.get("title32")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description32")?.setValidators([Validators.required,Validators.min(1), Validators.max(1000)]);
        this.registerForm.get("title33")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description33")?.setValidators([Validators.required,Validators.min(1), Validators.max(1000)]);

        this.registerForm.get("title1")?.clearValidators();
        this.registerForm.get("description1")?.clearValidators();
        this.registerForm.get("title2")?.clearValidators();
        this.registerForm.get("description2")?.clearValidators();
        this.registerForm.get("title3")?.clearValidators();
        this.registerForm.get("description3")?.clearValidators();
        this.registerForm.get("title4")?.clearValidators();
        this.registerForm.get("description4")?.clearValidators();
        this.registerForm.get("title1")?.setValue("");
        this.registerForm.get("description1")?.setValue("");
        this.registerForm.get("title2")?.setValue("");
        this.registerForm.get("description2")?.setValue("");
        this.registerForm.get("title3")?.setValue("");
        this.registerForm.get("description3")?.setValue("");
        this.registerForm.get("title4")?.setValue("");
        this.registerForm.get("description4")?.setValue("");

        this.registerForm.get("title51")?.clearValidators();
        this.registerForm.get("description51")?.clearValidators();
        this.registerForm.get("title52")?.clearValidators();
        this.registerForm.get("description52")?.clearValidators();
        this.registerForm.get("title53")?.clearValidators();
        this.registerForm.get("description53")?.clearValidators();
        this.registerForm.get("title54")?.clearValidators();
        this.registerForm.get("description54")?.clearValidators();
        this.registerForm.get("title51")?.setValue("");
        this.registerForm.get("description51")?.setValue("");
        this.registerForm.get("title52")?.setValue("");
        this.registerForm.get("description52")?.setValue("");
        this.registerForm.get("title53")?.setValue("");
        this.registerForm.get("description53")?.setValue("");
        this.registerForm.get("title54")?.setValue("");
        this.registerForm.get("description54")?.setValue("");

        this.registerForm.get("title11")?.clearValidators();
        this.registerForm.get("description11")?.clearValidators();
        this.registerForm.get("title11")?.setValue("");
        this.registerForm.get("description11")?.setValue("");

        this.registerForm.get("title21")?.clearValidators();
        this.registerForm.get("description21")?.clearValidators();
        this.registerForm.get("title22")?.clearValidators();
        this.registerForm.get("description22")?.clearValidators();
        this.registerForm.get("title21")?.setValue("");
        this.registerForm.get("description21")?.setValue("");
        this.registerForm.get("title22")?.setValue("");
        this.registerForm.get("description22")?.setValue("");

      } else if(result == 4){
        this.registerForm.get("title1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description1")?.setValidators([Validators.required,Validators.min(1), Validators.max(1000)]);
        this.registerForm.get("title2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description2")?.setValidators([Validators.required,Validators.min(1), Validators.max(1000)]);
        this.registerForm.get("title3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description3")?.setValidators([Validators.required,Validators.min(1), Validators.max(1000)]);
        this.registerForm.get("title4")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description4")?.setValidators([Validators.required,Validators.min(1), Validators.max(1000)]);
        
      }else if(result == 5){
        this.registerForm.get("title51")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description51")?.setValidators([Validators.required,Validators.min(1), Validators.max(1000)]);
        this.registerForm.get("title52")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description52")?.setValidators([Validators.required,Validators.min(1), Validators.max(1000)]);
        this.registerForm.get("title53")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description53")?.setValidators([Validators.required,Validators.min(1), Validators.max(1000)]);
        this.registerForm.get("title54")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description54")?.setValidators([Validators.required,Validators.min(1), Validators.max(1000)]);
        this.registerForm.get("title55")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description55")?.setValidators([Validators.required,Validators.min(1), Validators.max(1000)]);
      } else {
        this.registerForm.get("title1")?.clearValidators();
        this.registerForm.get("description1")?.clearValidators();
        this.registerForm.get("title2")?.clearValidators();
        this.registerForm.get("description2")?.clearValidators();
        this.registerForm.get("title3")?.clearValidators();
        this.registerForm.get("description3")?.clearValidators();
        this.registerForm.get("title4")?.clearValidators();
        this.registerForm.get("description4")?.clearValidators();
        this.registerForm.get("title1")?.setValue("");
        this.registerForm.get("description1")?.setValue("");
        this.registerForm.get("title2")?.setValue("");
        this.registerForm.get("description2")?.setValue("");
        this.registerForm.get("title3")?.setValue("");
        this.registerForm.get("description3")?.setValue("");
        this.registerForm.get("title4")?.setValue("");
        this.registerForm.get("description4")?.setValue("");

        this.registerForm.get("title51")?.clearValidators();
        this.registerForm.get("description51")?.clearValidators();
        this.registerForm.get("title52")?.clearValidators();
        this.registerForm.get("description52")?.clearValidators();
        this.registerForm.get("title53")?.clearValidators();
        this.registerForm.get("description53")?.clearValidators();
        this.registerForm.get("title54")?.clearValidators();
        this.registerForm.get("description54")?.clearValidators();
        this.registerForm.get("title51")?.setValue("");
        this.registerForm.get("description51")?.setValue("");
        this.registerForm.get("title52")?.setValue("");
        this.registerForm.get("description52")?.setValue("");
        this.registerForm.get("title53")?.setValue("");
        this.registerForm.get("description53")?.setValue("");
        this.registerForm.get("title54")?.setValue("");
        this.registerForm.get("description54")?.setValue("");

        this.registerForm.get("title11")?.clearValidators();
        this.registerForm.get("description11")?.clearValidators();
        this.registerForm.get("title11")?.setValue("");
        this.registerForm.get("description11")?.setValue("");

        this.registerForm.get("title21")?.clearValidators();
        this.registerForm.get("description21")?.clearValidators();
        this.registerForm.get("title22")?.clearValidators();
        this.registerForm.get("description22")?.clearValidators();
        this.registerForm.get("title21")?.setValue("");
        this.registerForm.get("description21")?.setValue("");
        this.registerForm.get("title22")?.setValue("");
        this.registerForm.get("description22")?.setValue("");

        this.registerForm.get("title31")?.clearValidators();
        this.registerForm.get("description31")?.clearValidators();
        this.registerForm.get("title32")?.clearValidators();
        this.registerForm.get("description32")?.clearValidators();
        this.registerForm.get("title33")?.clearValidators();
        this.registerForm.get("description33")?.clearValidators();
        this.registerForm.get("title31")?.setValue("");
        this.registerForm.get("description31")?.setValue("");
        this.registerForm.get("title32")?.setValue("");
        this.registerForm.get("description32")?.setValue("");
        this.registerForm.get("title33")?.setValue("");
        this.registerForm.get("description33")?.setValue("");
      }
    });
  }
  reloadComponent(self:boolean,urlToNavigateTo ?:string){
    //skipLocationChange:true means dont update the url to / when navigating
   const url=self ? this.router.url : "component/piechart";
   this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this.router.navigate([`/${url}`]).then(()=>{
      //  console.log(`After navigation I am on:${this.router.url}`)
     })
   })
  }
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

      const data = {
        "nolayout":this.registerForm.value.nolayout,
        "title1":this.registerForm.value.title1,
        "description1":this.registerForm.value.description1,
        "title2":this.registerForm.value.title2,
        "description2":this.registerForm.value.description2,
        "title3":this.registerForm.value.title3,
        "description3":this.registerForm.value.description3,
        "title4":this.registerForm.value.title4,
        "description4":this.registerForm.value.description4,
        "title11":this.registerForm.value.title11,
        "description11":this.registerForm.value.description11,
        "title21":this.registerForm.value.title21,
        "description21":this.registerForm.value.description21,
        "title22":this.registerForm.value.title22,
        "description22":this.registerForm.value.description22,
        "title31":this.registerForm.value.title31,
        "description31":this.registerForm.value.description31,
        "title32":this.registerForm.value.title32,
        "description32":this.registerForm.value.description32,
        "title33":this.registerForm.value.title33,
        "description33":this.registerForm.value.description33,
        "title51":this.registerForm.value.title51,
        "description51":this.registerForm.value.description51,
        "title52":this.registerForm.value.title52,
        "description52":this.registerForm.value.description52,
        "title53":this.registerForm.value.title53,
        "description53":this.registerForm.value.description53,
        "title54":this.registerForm.value.title54,
        "description54":this.registerForm.value.description54,
        "title55":this.registerForm.value.title55,
        "description55":this.registerForm.value.description55,
        "symbol":this.registerForm.value.symbol
      };

      
      this.onclose.emit();
      localStorage.setItem("piechartdata",JSON.stringify(data));
      this.router.navigate(['component/piechart']);
      this.reloadComponent(true);
    }
  }
}
