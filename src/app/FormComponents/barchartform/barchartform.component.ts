import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barchartform',
  templateUrl: './barchartform.component.html',
  styleUrls: ['./barchartform.component.scss']
})
export class BarchartformComponent {
  bgcolor:any;
  color:any;
  barchartForm: FormGroup;
  submitted = false;
  friendslist = [
    {
      name: 'Abhishek',
      age: 36
    },
    {
      name: 'Akshay',
      age: 65
    },
    {
      name: 'Ashish',
      age: 12
    },
    {
      name: 'Mayank',
      age: 45
    }
  ]
  

  @Output() onclose = new EventEmitter<any>;

  constructor( private router:Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.barchartForm = this.formBuilder.group({ 
      barchartType: ['', [Validators.required]],
      nobars:['',[Validators.required]], 
      nolegends:[''],

      blegend1:[''],
      blegend2:[''],
      blegend3:[''],
      blegend4:[''],
      blegend5:[''],

      // For single
      btitle1:[''],
      btitle2:[''],
      btitle3:[''],
      btitle4:[''],
      btitle5:[''],
      bvalue1:[''],
      bvalue2:[''],
      bvalue3:[''],
      bvalue4:[''],
      bvalue5:[''],

      // For column
      bvalue201:[''],
      bvalue202:[''],
      bvalue203:[''],
      bvalue204:[''],
      bvalue205:[''],

      bvalue211:[''],
      bvalue212:[''],
      bvalue213:[''],
      bvalue214:[''],
      bvalue215:[''],
      
      bvalue221:[''],
      bvalue222:[''],
      bvalue223:[''],
      bvalue224:[''],
      bvalue225:[''],

      bvalue231:[''],
      bvalue232:[''],
      bvalue233:[''],
      bvalue234:[''],
      bvalue235:[''],

      bvalue241:[''],
      bvalue242:[''],
      bvalue243:[''],
      bvalue244:[''],
      bvalue245:[''],

      xaxistitle:['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      yaxistitle:['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      size: ['Small', [Validators.required]],
      // color: ['Light', [Validators.required]],
    });

    this.barchartForm.get("barchartType")?.valueChanges.subscribe((result)=>{
      console.log("Yehi check hua????", result, "Damn kya hai ye");
      if(result == 'Column') {
        this.barchartForm.get("nolegends")?.setValidators([Validators.required]);
        this.barchartForm.get("nobars")?.valueChanges.subscribe((result)=>{ 
          if(result == 5){
            this.barchartForm.get("btitle1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle4")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle5")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);

            this.barchartForm.get("nolegends")?.valueChanges.subscribe((result)=>{
              if(result == 5) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend4")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend5")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue221")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue222")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue223")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue224")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue225")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue231")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue232")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue233")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue234")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue235")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue241")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue242")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue243")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue244")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue245")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
              } else if (result == 4) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend4")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue221")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue222")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue223")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue224")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue225")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue231")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue232")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue233")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue234")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue235")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              } else if (result == 3) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue221")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue222")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue223")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue224")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue225")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);

                this.barchartForm.get("bvalue231")?.clearValidators();
                this.barchartForm.get("bvalue232")?.clearValidators(); 
                this.barchartForm.get("bvalue233")?.clearValidators();
                this.barchartForm.get("bvalue234")?.clearValidators();
                this.barchartForm.get("bvalue235")?.clearValidators();
                this.barchartForm.get("bvalue231")?.setValue("");
                this.barchartForm.get("bvalue232")?.setValue("");
                this.barchartForm.get("bvalue233")?.setValue("");
                this.barchartForm.get("bvalue234")?.setValue("");
                this.barchartForm.get("bvalue235")?.setValue("");
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              } else if (result == 2) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);

                this.barchartForm.get("bvalue221")?.clearValidators();
                this.barchartForm.get("bvalue222")?.clearValidators(); 
                this.barchartForm.get("bvalue223")?.clearValidators();
                this.barchartForm.get("bvalue224")?.clearValidators();
                this.barchartForm.get("bvalue225")?.clearValidators();
                this.barchartForm.get("bvalue221")?.setValue("");
                this.barchartForm.get("bvalue222")?.setValue("");
                this.barchartForm.get("bvalue223")?.setValue("");
                this.barchartForm.get("bvalue224")?.setValue("");
                this.barchartForm.get("bvalue225")?.setValue("");
                this.barchartForm.get("bvalue231")?.clearValidators();
                this.barchartForm.get("bvalue232")?.clearValidators(); 
                this.barchartForm.get("bvalue233")?.clearValidators();
                this.barchartForm.get("bvalue234")?.clearValidators();
                this.barchartForm.get("bvalue235")?.clearValidators();
                this.barchartForm.get("bvalue231")?.setValue("");
                this.barchartForm.get("bvalue232")?.setValue("");
                this.barchartForm.get("bvalue233")?.setValue("");
                this.barchartForm.get("bvalue234")?.setValue("");
                this.barchartForm.get("bvalue235")?.setValue("");
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              } else if (result == 1) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                
                this.barchartForm.get("bvalue211")?.clearValidators();
                this.barchartForm.get("bvalue212")?.clearValidators(); 
                this.barchartForm.get("bvalue213")?.clearValidators();
                this.barchartForm.get("bvalue214")?.clearValidators();
                this.barchartForm.get("bvalue215")?.clearValidators();
                this.barchartForm.get("bvalue211")?.setValue("");
                this.barchartForm.get("bvalue212")?.setValue("");
                this.barchartForm.get("bvalue213")?.setValue("");
                this.barchartForm.get("bvalue214")?.setValue("");
                this.barchartForm.get("bvalue215")?.setValue("");
                this.barchartForm.get("bvalue221")?.clearValidators();
                this.barchartForm.get("bvalue222")?.clearValidators(); 
                this.barchartForm.get("bvalue223")?.clearValidators();
                this.barchartForm.get("bvalue224")?.clearValidators();
                this.barchartForm.get("bvalue225")?.clearValidators();
                this.barchartForm.get("bvalue221")?.setValue("");
                this.barchartForm.get("bvalue222")?.setValue("");
                this.barchartForm.get("bvalue223")?.setValue("");
                this.barchartForm.get("bvalue224")?.setValue("");
                this.barchartForm.get("bvalue225")?.setValue("");
                this.barchartForm.get("bvalue231")?.clearValidators();
                this.barchartForm.get("bvalue232")?.clearValidators(); 
                this.barchartForm.get("bvalue233")?.clearValidators();
                this.barchartForm.get("bvalue234")?.clearValidators();
                this.barchartForm.get("bvalue235")?.clearValidators();
                this.barchartForm.get("bvalue231")?.setValue("");
                this.barchartForm.get("bvalue232")?.setValue("");
                this.barchartForm.get("bvalue233")?.setValue("");
                this.barchartForm.get("bvalue234")?.setValue("");
                this.barchartForm.get("bvalue235")?.setValue("");
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              }
            });

          } else if (result == 4) {
            this.barchartForm.get("btitle1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle4")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);

            this.barchartForm.get("nolegends")?.valueChanges.subscribe((result)=>{
              if(result == 5) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend4")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend5")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue221")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue222")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue223")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue224")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue225")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue231")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue232")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue233")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue234")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue235")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue241")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue242")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue243")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue244")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue245")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
              } else if (result == 4) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend4")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue221")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue222")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue223")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue224")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue225")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue231")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue232")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue233")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue234")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue235")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              } else if (result == 3) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue221")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue222")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue223")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue224")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue225")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);

                this.barchartForm.get("bvalue231")?.clearValidators();
                this.barchartForm.get("bvalue232")?.clearValidators(); 
                this.barchartForm.get("bvalue233")?.clearValidators();
                this.barchartForm.get("bvalue234")?.clearValidators();
                this.barchartForm.get("bvalue235")?.clearValidators();
                this.barchartForm.get("bvalue231")?.setValue("");
                this.barchartForm.get("bvalue232")?.setValue("");
                this.barchartForm.get("bvalue233")?.setValue("");
                this.barchartForm.get("bvalue234")?.setValue("");
                this.barchartForm.get("bvalue235")?.setValue("");
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              } else if (result == 2) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);

                this.barchartForm.get("bvalue221")?.clearValidators();
                this.barchartForm.get("bvalue222")?.clearValidators(); 
                this.barchartForm.get("bvalue223")?.clearValidators();
                this.barchartForm.get("bvalue224")?.clearValidators();
                this.barchartForm.get("bvalue225")?.clearValidators();
                this.barchartForm.get("bvalue221")?.setValue("");
                this.barchartForm.get("bvalue222")?.setValue("");
                this.barchartForm.get("bvalue223")?.setValue("");
                this.barchartForm.get("bvalue224")?.setValue("");
                this.barchartForm.get("bvalue225")?.setValue("");
                this.barchartForm.get("bvalue231")?.clearValidators();
                this.barchartForm.get("bvalue232")?.clearValidators(); 
                this.barchartForm.get("bvalue233")?.clearValidators();
                this.barchartForm.get("bvalue234")?.clearValidators();
                this.barchartForm.get("bvalue235")?.clearValidators();
                this.barchartForm.get("bvalue231")?.setValue("");
                this.barchartForm.get("bvalue232")?.setValue("");
                this.barchartForm.get("bvalue233")?.setValue("");
                this.barchartForm.get("bvalue234")?.setValue("");
                this.barchartForm.get("bvalue235")?.setValue("");
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              } else if (result == 1) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                
                this.barchartForm.get("bvalue211")?.clearValidators();
                this.barchartForm.get("bvalue212")?.clearValidators(); 
                this.barchartForm.get("bvalue213")?.clearValidators();
                this.barchartForm.get("bvalue214")?.clearValidators();
                this.barchartForm.get("bvalue215")?.clearValidators();
                this.barchartForm.get("bvalue211")?.setValue("");
                this.barchartForm.get("bvalue212")?.setValue("");
                this.barchartForm.get("bvalue213")?.setValue("");
                this.barchartForm.get("bvalue214")?.setValue("");
                this.barchartForm.get("bvalue215")?.setValue("");
                this.barchartForm.get("bvalue221")?.clearValidators();
                this.barchartForm.get("bvalue222")?.clearValidators(); 
                this.barchartForm.get("bvalue223")?.clearValidators();
                this.barchartForm.get("bvalue224")?.clearValidators();
                this.barchartForm.get("bvalue225")?.clearValidators();
                this.barchartForm.get("bvalue221")?.setValue("");
                this.barchartForm.get("bvalue222")?.setValue("");
                this.barchartForm.get("bvalue223")?.setValue("");
                this.barchartForm.get("bvalue224")?.setValue("");
                this.barchartForm.get("bvalue225")?.setValue("");
                this.barchartForm.get("bvalue231")?.clearValidators();
                this.barchartForm.get("bvalue232")?.clearValidators(); 
                this.barchartForm.get("bvalue233")?.clearValidators();
                this.barchartForm.get("bvalue234")?.clearValidators();
                this.barchartForm.get("bvalue235")?.clearValidators();
                this.barchartForm.get("bvalue231")?.setValue("");
                this.barchartForm.get("bvalue232")?.setValue("");
                this.barchartForm.get("bvalue233")?.setValue("");
                this.barchartForm.get("bvalue234")?.setValue("");
                this.barchartForm.get("bvalue235")?.setValue("");
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              }
            });
          } else if (result == 3) {
            this.barchartForm.get("btitle1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);

            this.barchartForm.get("nolegends")?.valueChanges.subscribe((result)=>{
              if(result == 5) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend4")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend5")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue221")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue222")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue223")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue224")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue225")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue231")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue232")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue233")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue234")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue235")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue241")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue242")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue243")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue244")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue245")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
              } else if (result == 4) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend4")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue221")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue222")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue223")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue224")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue225")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue231")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue232")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue233")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue234")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue235")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              } else if (result == 3) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue221")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue222")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue223")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue224")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue225")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);

                this.barchartForm.get("bvalue231")?.clearValidators();
                this.barchartForm.get("bvalue232")?.clearValidators(); 
                this.barchartForm.get("bvalue233")?.clearValidators();
                this.barchartForm.get("bvalue234")?.clearValidators();
                this.barchartForm.get("bvalue235")?.clearValidators();
                this.barchartForm.get("bvalue231")?.setValue("");
                this.barchartForm.get("bvalue232")?.setValue("");
                this.barchartForm.get("bvalue233")?.setValue("");
                this.barchartForm.get("bvalue234")?.setValue("");
                this.barchartForm.get("bvalue235")?.setValue("");
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              } else if (result == 2) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);

                this.barchartForm.get("bvalue221")?.clearValidators();
                this.barchartForm.get("bvalue222")?.clearValidators(); 
                this.barchartForm.get("bvalue223")?.clearValidators();
                this.barchartForm.get("bvalue224")?.clearValidators();
                this.barchartForm.get("bvalue225")?.clearValidators();
                this.barchartForm.get("bvalue221")?.setValue("");
                this.barchartForm.get("bvalue222")?.setValue("");
                this.barchartForm.get("bvalue223")?.setValue("");
                this.barchartForm.get("bvalue224")?.setValue("");
                this.barchartForm.get("bvalue225")?.setValue("");
                this.barchartForm.get("bvalue231")?.clearValidators();
                this.barchartForm.get("bvalue232")?.clearValidators(); 
                this.barchartForm.get("bvalue233")?.clearValidators();
                this.barchartForm.get("bvalue234")?.clearValidators();
                this.barchartForm.get("bvalue235")?.clearValidators();
                this.barchartForm.get("bvalue231")?.setValue("");
                this.barchartForm.get("bvalue232")?.setValue("");
                this.barchartForm.get("bvalue233")?.setValue("");
                this.barchartForm.get("bvalue234")?.setValue("");
                this.barchartForm.get("bvalue235")?.setValue("");
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              } else if (result == 1) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                
                this.barchartForm.get("bvalue211")?.clearValidators();
                this.barchartForm.get("bvalue212")?.clearValidators(); 
                this.barchartForm.get("bvalue213")?.clearValidators();
                this.barchartForm.get("bvalue214")?.clearValidators();
                this.barchartForm.get("bvalue215")?.clearValidators();
                this.barchartForm.get("bvalue211")?.setValue("");
                this.barchartForm.get("bvalue212")?.setValue("");
                this.barchartForm.get("bvalue213")?.setValue("");
                this.barchartForm.get("bvalue214")?.setValue("");
                this.barchartForm.get("bvalue215")?.setValue("");
                this.barchartForm.get("bvalue221")?.clearValidators();
                this.barchartForm.get("bvalue222")?.clearValidators(); 
                this.barchartForm.get("bvalue223")?.clearValidators();
                this.barchartForm.get("bvalue224")?.clearValidators();
                this.barchartForm.get("bvalue225")?.clearValidators();
                this.barchartForm.get("bvalue221")?.setValue("");
                this.barchartForm.get("bvalue222")?.setValue("");
                this.barchartForm.get("bvalue223")?.setValue("");
                this.barchartForm.get("bvalue224")?.setValue("");
                this.barchartForm.get("bvalue225")?.setValue("");
                this.barchartForm.get("bvalue231")?.clearValidators();
                this.barchartForm.get("bvalue232")?.clearValidators(); 
                this.barchartForm.get("bvalue233")?.clearValidators();
                this.barchartForm.get("bvalue234")?.clearValidators();
                this.barchartForm.get("bvalue235")?.clearValidators();
                this.barchartForm.get("bvalue231")?.setValue("");
                this.barchartForm.get("bvalue232")?.setValue("");
                this.barchartForm.get("bvalue233")?.setValue("");
                this.barchartForm.get("bvalue234")?.setValue("");
                this.barchartForm.get("bvalue235")?.setValue("");
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              }
            });
          } else if (result == 2) {
            this.barchartForm.get("btitle1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);

            this.barchartForm.get("nolegends")?.valueChanges.subscribe((result)=>{
              if(result == 5) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend4")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend5")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue221")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue222")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue223")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue224")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue225")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue231")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue232")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue233")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue234")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue235")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue241")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue242")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue243")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue244")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue245")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
              } else if (result == 4) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend4")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue221")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue222")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue223")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue224")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue225")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue231")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue232")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue233")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue234")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue235")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              } else if (result == 3) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue221")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue222")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue223")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue224")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue225")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);

                this.barchartForm.get("bvalue231")?.clearValidators();
                this.barchartForm.get("bvalue232")?.clearValidators(); 
                this.barchartForm.get("bvalue233")?.clearValidators();
                this.barchartForm.get("bvalue234")?.clearValidators();
                this.barchartForm.get("bvalue235")?.clearValidators();
                this.barchartForm.get("bvalue231")?.setValue("");
                this.barchartForm.get("bvalue232")?.setValue("");
                this.barchartForm.get("bvalue233")?.setValue("");
                this.barchartForm.get("bvalue234")?.setValue("");
                this.barchartForm.get("bvalue235")?.setValue("");
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              } else if (result == 2) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);

                this.barchartForm.get("bvalue221")?.clearValidators();
                this.barchartForm.get("bvalue222")?.clearValidators(); 
                this.barchartForm.get("bvalue223")?.clearValidators();
                this.barchartForm.get("bvalue224")?.clearValidators();
                this.barchartForm.get("bvalue225")?.clearValidators();
                this.barchartForm.get("bvalue221")?.setValue("");
                this.barchartForm.get("bvalue222")?.setValue("");
                this.barchartForm.get("bvalue223")?.setValue("");
                this.barchartForm.get("bvalue224")?.setValue("");
                this.barchartForm.get("bvalue225")?.setValue("");
                this.barchartForm.get("bvalue231")?.clearValidators();
                this.barchartForm.get("bvalue232")?.clearValidators(); 
                this.barchartForm.get("bvalue233")?.clearValidators();
                this.barchartForm.get("bvalue234")?.clearValidators();
                this.barchartForm.get("bvalue235")?.clearValidators();
                this.barchartForm.get("bvalue231")?.setValue("");
                this.barchartForm.get("bvalue232")?.setValue("");
                this.barchartForm.get("bvalue233")?.setValue("");
                this.barchartForm.get("bvalue234")?.setValue("");
                this.barchartForm.get("bvalue235")?.setValue("");
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              } else if (result == 1) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                
                this.barchartForm.get("bvalue211")?.clearValidators();
                this.barchartForm.get("bvalue212")?.clearValidators(); 
                this.barchartForm.get("bvalue213")?.clearValidators();
                this.barchartForm.get("bvalue214")?.clearValidators();
                this.barchartForm.get("bvalue215")?.clearValidators();
                this.barchartForm.get("bvalue211")?.setValue("");
                this.barchartForm.get("bvalue212")?.setValue("");
                this.barchartForm.get("bvalue213")?.setValue("");
                this.barchartForm.get("bvalue214")?.setValue("");
                this.barchartForm.get("bvalue215")?.setValue("");
                this.barchartForm.get("bvalue221")?.clearValidators();
                this.barchartForm.get("bvalue222")?.clearValidators(); 
                this.barchartForm.get("bvalue223")?.clearValidators();
                this.barchartForm.get("bvalue224")?.clearValidators();
                this.barchartForm.get("bvalue225")?.clearValidators();
                this.barchartForm.get("bvalue221")?.setValue("");
                this.barchartForm.get("bvalue222")?.setValue("");
                this.barchartForm.get("bvalue223")?.setValue("");
                this.barchartForm.get("bvalue224")?.setValue("");
                this.barchartForm.get("bvalue225")?.setValue("");
                this.barchartForm.get("bvalue231")?.clearValidators();
                this.barchartForm.get("bvalue232")?.clearValidators(); 
                this.barchartForm.get("bvalue233")?.clearValidators();
                this.barchartForm.get("bvalue234")?.clearValidators();
                this.barchartForm.get("bvalue235")?.clearValidators();
                this.barchartForm.get("bvalue231")?.setValue("");
                this.barchartForm.get("bvalue232")?.setValue("");
                this.barchartForm.get("bvalue233")?.setValue("");
                this.barchartForm.get("bvalue234")?.setValue("");
                this.barchartForm.get("bvalue235")?.setValue("");
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              }
            });
          } else if (result == 1) {
            this.barchartForm.get("btitle1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);

            this.barchartForm.get("nolegends")?.valueChanges.subscribe((result)=>{
              if(result == 5) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend4")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend5")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue221")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue222")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue223")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue224")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue225")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue231")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue232")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue233")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue234")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue235")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue241")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue242")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue243")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue244")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue245")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
              } else if (result == 4) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend4")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue221")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue222")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue223")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue224")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue225")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue231")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue232")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue233")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue234")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue235")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              } else if (result == 3) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue221")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue222")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue223")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue224")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue225")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);

                this.barchartForm.get("bvalue231")?.clearValidators();
                this.barchartForm.get("bvalue232")?.clearValidators(); 
                this.barchartForm.get("bvalue233")?.clearValidators();
                this.barchartForm.get("bvalue234")?.clearValidators();
                this.barchartForm.get("bvalue235")?.clearValidators();
                this.barchartForm.get("bvalue231")?.setValue("");
                this.barchartForm.get("bvalue232")?.setValue("");
                this.barchartForm.get("bvalue233")?.setValue("");
                this.barchartForm.get("bvalue234")?.setValue("");
                this.barchartForm.get("bvalue235")?.setValue("");
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              } else if (result == 2) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("blegend2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue211")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue212")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue213")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue214")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue215")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);

                this.barchartForm.get("bvalue221")?.clearValidators();
                this.barchartForm.get("bvalue222")?.clearValidators(); 
                this.barchartForm.get("bvalue223")?.clearValidators();
                this.barchartForm.get("bvalue224")?.clearValidators();
                this.barchartForm.get("bvalue225")?.clearValidators();
                this.barchartForm.get("bvalue221")?.setValue("");
                this.barchartForm.get("bvalue222")?.setValue("");
                this.barchartForm.get("bvalue223")?.setValue("");
                this.barchartForm.get("bvalue224")?.setValue("");
                this.barchartForm.get("bvalue225")?.setValue("");
                this.barchartForm.get("bvalue231")?.clearValidators();
                this.barchartForm.get("bvalue232")?.clearValidators(); 
                this.barchartForm.get("bvalue233")?.clearValidators();
                this.barchartForm.get("bvalue234")?.clearValidators();
                this.barchartForm.get("bvalue235")?.clearValidators();
                this.barchartForm.get("bvalue231")?.setValue("");
                this.barchartForm.get("bvalue232")?.setValue("");
                this.barchartForm.get("bvalue233")?.setValue("");
                this.barchartForm.get("bvalue234")?.setValue("");
                this.barchartForm.get("bvalue235")?.setValue("");
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              } else if (result == 1) {
                this.barchartForm.get("blegend1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
                this.barchartForm.get("bvalue201")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue202")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue203")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue204")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                this.barchartForm.get("bvalue205")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
                
                this.barchartForm.get("bvalue211")?.clearValidators();
                this.barchartForm.get("bvalue212")?.clearValidators(); 
                this.barchartForm.get("bvalue213")?.clearValidators();
                this.barchartForm.get("bvalue214")?.clearValidators();
                this.barchartForm.get("bvalue215")?.clearValidators();
                this.barchartForm.get("bvalue211")?.setValue("");
                this.barchartForm.get("bvalue212")?.setValue("");
                this.barchartForm.get("bvalue213")?.setValue("");
                this.barchartForm.get("bvalue214")?.setValue("");
                this.barchartForm.get("bvalue215")?.setValue("");
                this.barchartForm.get("bvalue221")?.clearValidators();
                this.barchartForm.get("bvalue222")?.clearValidators(); 
                this.barchartForm.get("bvalue223")?.clearValidators();
                this.barchartForm.get("bvalue224")?.clearValidators();
                this.barchartForm.get("bvalue225")?.clearValidators();
                this.barchartForm.get("bvalue221")?.setValue("");
                this.barchartForm.get("bvalue222")?.setValue("");
                this.barchartForm.get("bvalue223")?.setValue("");
                this.barchartForm.get("bvalue224")?.setValue("");
                this.barchartForm.get("bvalue225")?.setValue("");
                this.barchartForm.get("bvalue231")?.clearValidators();
                this.barchartForm.get("bvalue232")?.clearValidators(); 
                this.barchartForm.get("bvalue233")?.clearValidators();
                this.barchartForm.get("bvalue234")?.clearValidators();
                this.barchartForm.get("bvalue235")?.clearValidators();
                this.barchartForm.get("bvalue231")?.setValue("");
                this.barchartForm.get("bvalue232")?.setValue("");
                this.barchartForm.get("bvalue233")?.setValue("");
                this.barchartForm.get("bvalue234")?.setValue("");
                this.barchartForm.get("bvalue235")?.setValue("");
                this.barchartForm.get("bvalue241")?.clearValidators();
                this.barchartForm.get("bvalue242")?.clearValidators(); 
                this.barchartForm.get("bvalue243")?.clearValidators();
                this.barchartForm.get("bvalue244")?.clearValidators();
                this.barchartForm.get("bvalue245")?.clearValidators();
                this.barchartForm.get("bvalue241")?.setValue("");
                this.barchartForm.get("bvalue242")?.setValue("");
                this.barchartForm.get("bvalue243")?.setValue("");
                this.barchartForm.get("bvalue244")?.setValue("");
                this.barchartForm.get("bvalue245")?.setValue("");
              }
            });
          }
        });
      } else if ( result == 'Single') {
        this.barchartForm.get("nobars")?.valueChanges.subscribe((result)=>{ 
          if(result == 5){
            this.barchartForm.get("btitle1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle4")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle5")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("bvalue1")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
            this.barchartForm.get("bvalue2")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
            this.barchartForm.get("bvalue3")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
            this.barchartForm.get("bvalue4")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
            this.barchartForm.get("bvalue5")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);         
          } else if (result == 4) {
            this.barchartForm.get("btitle1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle4")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("bvalue1")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
            this.barchartForm.get("bvalue2")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
            this.barchartForm.get("bvalue3")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
            this.barchartForm.get("bvalue4")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);

            this.barchartForm.get("btitle5")?.clearValidators();
            this.barchartForm.get("btitle5")?.setValue("");
            this.barchartForm.get("bvalue5")?.clearValidators();
            this.barchartForm.get("bvalue5")?.setValue("");
          } else if (result == 3) {
            this.barchartForm.get("btitle1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle3")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("bvalue1")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
            this.barchartForm.get("bvalue2")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
            this.barchartForm.get("bvalue3")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);

            this.barchartForm.get("btitle4")?.clearValidators(); 
            this.barchartForm.get("btitle5")?.clearValidators();
            this.barchartForm.get("btitle4")?.setValue("");
            this.barchartForm.get("btitle5")?.setValue("");
            this.barchartForm.get("bvalue4")?.clearValidators(); 
            this.barchartForm.get("bvalue5")?.clearValidators();
            this.barchartForm.get("bvalue4")?.setValue("");
            this.barchartForm.get("bvalue5")?.setValue("");
          } else if ( result == 2) {
            this.barchartForm.get("btitle1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("btitle2")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("bvalue1")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);
            this.barchartForm.get("bvalue2")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);

            this.barchartForm.get("btitle3")?.clearValidators();
            this.barchartForm.get("btitle4")?.clearValidators(); 
            this.barchartForm.get("btitle5")?.clearValidators();
            this.barchartForm.get("btitle3")?.setValue("");
            this.barchartForm.get("btitle4")?.setValue("");
            this.barchartForm.get("btitle5")?.setValue("");
            this.barchartForm.get("bvalue3")?.clearValidators();
            this.barchartForm.get("bvalue4")?.clearValidators(); 
            this.barchartForm.get("bvalue5")?.clearValidators();
            this.barchartForm.get("bvalue3")?.setValue("");
            this.barchartForm.get("bvalue4")?.setValue("");
            this.barchartForm.get("bvalue5")?.setValue("");

          } else if (result == 1) {
            this.barchartForm.get("btitle1")?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
            this.barchartForm.get("bvalue1")?.setValidators([Validators.required, Validators.min(0), Validators.max(1000)]);

            this.barchartForm.get("btitle2")?.clearValidators();
            this.barchartForm.get("btitle3")?.clearValidators();
            this.barchartForm.get("btitle4")?.clearValidators(); 
            this.barchartForm.get("btitle5")?.clearValidators();
            this.barchartForm.get("btitle2")?.setValue("");
            this.barchartForm.get("btitle3")?.setValue("");
            this.barchartForm.get("btitle4")?.setValue("");
            this.barchartForm.get("btitle5")?.setValue("");
            this.barchartForm.get("bvalue2")?.clearValidators();
            this.barchartForm.get("bvalue3")?.clearValidators();
            this.barchartForm.get("bvalue4")?.clearValidators(); 
            this.barchartForm.get("bvalue5")?.clearValidators();
            this.barchartForm.get("bvalue2")?.setValue("");
            this.barchartForm.get("bvalue3")?.setValue("");
            this.barchartForm.get("bvalue4")?.setValue("");
            this.barchartForm.get("bvalue5")?.setValue("");
          }
        });
      }

    });
  };

  get f(){
    return this.barchartForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.barchartForm);
    if(this.barchartForm.invalid) { 
      //console.log("Why???", this.barchartForm.invalid )
      return true;
    }
    else {
      console.log(">>>",this.barchartForm.value);

      this.onclose.emit();
      const data = {
        "barchartType":this.barchartForm.value.barchartType,
        "nobars":this.barchartForm.value.nobars,
        "nolegends":this.barchartForm.value.nolegends,

        "blegend1":this.barchartForm.value.blegend1,
        "blegend2":this.barchartForm.value.blegend2,
        "blegend3":this.barchartForm.value.blegend3,
        "blegend4":this.barchartForm.value.blegend4,
        "blegend5":this.barchartForm.value.blegend5,

        "btitle1":this.barchartForm.value.btitle1,
        "btitle2":this.barchartForm.value.btitle2,
        "btitle3":this.barchartForm.value.btitle3,
        "btitle4":this.barchartForm.value.btitle4,
        "btitle5":this.barchartForm.value.btitle5,

        "bvalue1":this.barchartForm.value.bvalue1,
        "bvalue2":this.barchartForm.value.bvalue2,
        "bvalue3":this.barchartForm.value.bvalue3,
        "bvalue4":this.barchartForm.value.bvalue4,
        "bvalue5":this.barchartForm.value.bvalue5,

        "bvalue201":this.barchartForm.value.bvalue201,
        "bvalue202":this.barchartForm.value.bvalue202,
        "bvalue203":this.barchartForm.value.bvalue203,
        "bvalue204":this.barchartForm.value.bvalue204,
        "bvalue205":this.barchartForm.value.bvalue205,
        "bvalue211":this.barchartForm.value.bvalue211,
        "bvalue212":this.barchartForm.value.bvalue212,
        "bvalue213":this.barchartForm.value.bvalue213,
        "bvalue214":this.barchartForm.value.bvalue214,
        "bvalue215":this.barchartForm.value.bvalue215,
        "bvalue221":this.barchartForm.value.bvalue221,
        "bvalue222":this.barchartForm.value.bvalue222,
        "bvalue223":this.barchartForm.value.bvalue223,
        "bvalue224":this.barchartForm.value.bvalue224,
        "bvalue225":this.barchartForm.value.bvalue225,
        "bvalue231":this.barchartForm.value.bvalue231,
        "bvalue232":this.barchartForm.value.bvalue232,
        "bvalue233":this.barchartForm.value.bvalue233,
        "bvalue234":this.barchartForm.value.bvalue234,
        "bvalue235":this.barchartForm.value.bvalue235,
        "bvalue241":this.barchartForm.value.bvalue241,
        "bvalue242":this.barchartForm.value.bvalue242,
        "bvalue243":this.barchartForm.value.bvalue243,
        "bvalue244":this.barchartForm.value.bvalue244,
        "bvalue245":this.barchartForm.value.bvalue245,

        "xaxistitle":this.barchartForm.value.xaxistitle,
        "yaxistitle":this.barchartForm.value.yaxistitle,
        "size":this.barchartForm.value.size
        // "color":this.barchartForm.value.color
      }
      console.log("Angular check Data>>",data);
      localStorage.setItem("barchartdata",JSON.stringify(data));
      this.router.navigate(['/component/barchart']);
    }
  }
}
