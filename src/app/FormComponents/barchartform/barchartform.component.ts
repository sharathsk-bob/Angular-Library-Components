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

  @Output() onclose = new EventEmitter<any>;

  constructor( private router:Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.barchartForm = this.formBuilder.group({
      // image1:['', [Validators.required]],
      // title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      nobars:['--Select--',[Validators.required]],
      btitle11:[''],
      bvalue11:[''],
      btitle21:[''],
      bvalue21:[''],
      btitle22:[''],
      bvalue22:[''],
      btitle31:[''],
      bvalue31:[''],
      btitle32:[''],
      bvalue32:[''],
      btitle33:[''],
      bvalue33:[''],
      bvalue41:[''],
      btitle42:[''],
      bvalue42:[''],
      btitle43:[''],
      bvalue43:[''],
      btitle44:[''],
      bvalue44:[''],
      bvalue51:[''],
      btitle52:[''],
      bvalue52:[''],
      btitle53:[''],
      bvalue53:[''],
      btitle54:[''],
      bvalue54:[''],
      btitle55:[''],
      bvalue55:[''],

      xaxistitle:['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      yaxistitle:['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      size: ['Small', [Validators.required]],
      color: ['Light', [Validators.required]],
    });

    this.barchartForm.get("nobars")?.valueChanges.subscribe((result)=>{

      // console.log("Anand",result);

      if(result == 1) {
        this.barchartForm.get("btitle11")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.barchartForm.get("bvalue11")?.setValidators([Validators.required]);

        this.barchartForm.get("btitle51")?.clearValidators();
        this.barchartForm.get("bvalue51")?.clearValidators();
        this.barchartForm.get("btitle52")?.clearValidators();
        this.barchartForm.get("bvalue52")?.clearValidators();
        this.barchartForm.get("btitle53")?.clearValidators();
        this.barchartForm.get("bvalue53")?.clearValidators();
        this.barchartForm.get("btitle54")?.clearValidators();
        this.barchartForm.get("bvalue54")?.clearValidators();
        this.barchartForm.get("btitle55")?.clearValidators();
        this.barchartForm.get("bvalue55")?.clearValidators();
        this.barchartForm.get("btitle51")?.setValue("");
        this.barchartForm.get("bvalue51")?.setValue("");
        this.barchartForm.get("btitle52")?.setValue("");
        this.barchartForm.get("bvalue52")?.setValue("");
        this.barchartForm.get("btitle53")?.setValue("");
        this.barchartForm.get("bvalue53")?.setValue("");
        this.barchartForm.get("btitle54")?.setValue("");
        this.barchartForm.get("bvalue54")?.setValue("");
        this.barchartForm.get("btitle55")?.setValue("");
        this.barchartForm.get("bvalue55")?.setValue("");

        this.barchartForm.get("btitle41")?.clearValidators();
        this.barchartForm.get("bvalue41")?.clearValidators();
        this.barchartForm.get("btitle42")?.clearValidators();
        this.barchartForm.get("bvalue42")?.clearValidators();
        this.barchartForm.get("btitle43")?.clearValidators();
        this.barchartForm.get("bvalue43")?.clearValidators();
        this.barchartForm.get("btitle44")?.clearValidators();
        this.barchartForm.get("bvalue44")?.clearValidators();
        this.barchartForm.get("btitle41")?.setValue("");
        this.barchartForm.get("bvalue41")?.setValue("");
        this.barchartForm.get("btitle42")?.setValue("");
        this.barchartForm.get("bvalue42")?.setValue("");
        this.barchartForm.get("btitle43")?.setValue("");
        this.barchartForm.get("bvalue43")?.setValue("");
        this.barchartForm.get("btitle44")?.setValue("");
        this.barchartForm.get("bvalue44")?.setValue("");

        this.barchartForm.get("btitle31")?.clearValidators();
        this.barchartForm.get("bvalue31")?.clearValidators();
        this.barchartForm.get("btitle32")?.clearValidators();
        this.barchartForm.get("bvalue32")?.clearValidators();
        this.barchartForm.get("btitle33")?.clearValidators();
        this.barchartForm.get("bvalue33")?.clearValidators();
        this.barchartForm.get("btitle31")?.setValue("");
        this.barchartForm.get("bvalue31")?.setValue("");
        this.barchartForm.get("btitle32")?.setValue("");
        this.barchartForm.get("bvalue32")?.setValue("");
        this.barchartForm.get("btitle33")?.setValue("");
        this.barchartForm.get("bvalue33")?.setValue("");

        this.barchartForm.get("btitle21")?.clearValidators();
        this.barchartForm.get("bvalue21")?.clearValidators();
        this.barchartForm.get("btitle22")?.clearValidators();
        this.barchartForm.get("bvalue22")?.clearValidators();
        this.barchartForm.get("btitle21")?.setValue("");
        this.barchartForm.get("bvalue21")?.setValue("");
        this.barchartForm.get("btitle22")?.setValue("");
        this.barchartForm.get("bvalue22")?.setValue("");
      } else if(result == 2){ 
        this.barchartForm.get("btitle21")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.barchartForm.get("bvalue21")?.setValidators([Validators.required]);
        this.barchartForm.get("btitle22")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.barchartForm.get("bvalue22")?.setValidators([Validators.required]);

        this.barchartForm.get("btitle51")?.clearValidators();
        this.barchartForm.get("bvalue51")?.clearValidators();
        this.barchartForm.get("btitle52")?.clearValidators();
        this.barchartForm.get("bvalue52")?.clearValidators();
        this.barchartForm.get("btitle53")?.clearValidators();
        this.barchartForm.get("bvalue53")?.clearValidators();
        this.barchartForm.get("btitle54")?.clearValidators();
        this.barchartForm.get("bvalue54")?.clearValidators();
        this.barchartForm.get("btitle55")?.clearValidators();
        this.barchartForm.get("bvalue55")?.clearValidators();
        this.barchartForm.get("btitle51")?.setValue("");
        this.barchartForm.get("bvalue51")?.setValue("");
        this.barchartForm.get("btitle52")?.setValue("");
        this.barchartForm.get("bvalue52")?.setValue("");
        this.barchartForm.get("btitle53")?.setValue("");
        this.barchartForm.get("bvalue53")?.setValue("");
        this.barchartForm.get("btitle54")?.setValue("");
        this.barchartForm.get("bvalue54")?.setValue("");
        this.barchartForm.get("btitle55")?.setValue("");
        this.barchartForm.get("bvalue55")?.setValue("");

        this.barchartForm.get("btitle41")?.clearValidators();
        this.barchartForm.get("bvalue41")?.clearValidators();
        this.barchartForm.get("btitle42")?.clearValidators();
        this.barchartForm.get("bvalue42")?.clearValidators();
        this.barchartForm.get("btitle43")?.clearValidators();
        this.barchartForm.get("bvalue43")?.clearValidators();
        this.barchartForm.get("btitle44")?.clearValidators();
        this.barchartForm.get("bvalue44")?.clearValidators();
        this.barchartForm.get("btitle41")?.setValue("");
        this.barchartForm.get("bvalue41")?.setValue("");
        this.barchartForm.get("btitle42")?.setValue("");
        this.barchartForm.get("bvalue42")?.setValue("");
        this.barchartForm.get("btitle43")?.setValue("");
        this.barchartForm.get("bvalue43")?.setValue("");
        this.barchartForm.get("btitle44")?.setValue("");
        this.barchartForm.get("bvalue44")?.setValue("");

        this.barchartForm.get("btitle31")?.clearValidators();
        this.barchartForm.get("bvalue31")?.clearValidators();
        this.barchartForm.get("btitle32")?.clearValidators();
        this.barchartForm.get("bvalue32")?.clearValidators();
        this.barchartForm.get("btitle33")?.clearValidators();
        this.barchartForm.get("bvalue33")?.clearValidators();
        this.barchartForm.get("btitle31")?.setValue("");
        this.barchartForm.get("bvalue31")?.setValue("");
        this.barchartForm.get("btitle32")?.setValue("");
        this.barchartForm.get("bvalue32")?.setValue("");
        this.barchartForm.get("btitle33")?.setValue("");
        this.barchartForm.get("bvalue33")?.setValue("");

        this.barchartForm.get("btitle11")?.clearValidators();
        this.barchartForm.get("bvalue11")?.clearValidators();
        this.barchartForm.get("btitle11")?.setValue("");
        this.barchartForm.get("bvalue11")?.setValue("");
      } else if(result == 3){
        this.barchartForm.get("btitle31")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.barchartForm.get("bvalue31")?.setValidators([Validators.required]);
        this.barchartForm.get("btitle32")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.barchartForm.get("bvalue32")?.setValidators([Validators.required]);
        this.barchartForm.get("btitle33")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.barchartForm.get("bvalue33")?.setValidators([Validators.required]);

        this.barchartForm.get("btitle51")?.clearValidators();
        this.barchartForm.get("bvalue51")?.clearValidators();
        this.barchartForm.get("btitle52")?.clearValidators();
        this.barchartForm.get("bvalue52")?.clearValidators();
        this.barchartForm.get("btitle53")?.clearValidators();
        this.barchartForm.get("bvalue53")?.clearValidators();
        this.barchartForm.get("btitle54")?.clearValidators();
        this.barchartForm.get("bvalue54")?.clearValidators();
        this.barchartForm.get("btitle55")?.clearValidators();
        this.barchartForm.get("bvalue55")?.clearValidators();
        this.barchartForm.get("btitle51")?.setValue("");
        this.barchartForm.get("bvalue51")?.setValue("");
        this.barchartForm.get("btitle52")?.setValue("");
        this.barchartForm.get("bvalue52")?.setValue("");
        this.barchartForm.get("btitle53")?.setValue("");
        this.barchartForm.get("bvalue53")?.setValue("");
        this.barchartForm.get("btitle54")?.setValue("");
        this.barchartForm.get("bvalue54")?.setValue("");
        this.barchartForm.get("btitle55")?.setValue("");
        this.barchartForm.get("bvalue55")?.setValue("");

        this.barchartForm.get("btitle41")?.clearValidators();
        this.barchartForm.get("bvalue41")?.clearValidators();
        this.barchartForm.get("btitle42")?.clearValidators();
        this.barchartForm.get("bvalue42")?.clearValidators();
        this.barchartForm.get("btitle43")?.clearValidators();
        this.barchartForm.get("bvalue43")?.clearValidators();
        this.barchartForm.get("btitle44")?.clearValidators();
        this.barchartForm.get("bvalue44")?.clearValidators();
        this.barchartForm.get("btitle41")?.setValue("");
        this.barchartForm.get("bvalue41")?.setValue("");
        this.barchartForm.get("btitle42")?.setValue("");
        this.barchartForm.get("bvalue42")?.setValue("");
        this.barchartForm.get("btitle43")?.setValue("");
        this.barchartForm.get("bvalue43")?.setValue("");
        this.barchartForm.get("btitle44")?.setValue("");
        this.barchartForm.get("bvalue44")?.setValue("");

        this.barchartForm.get("btitle21")?.clearValidators();
        this.barchartForm.get("bvalue21")?.clearValidators();
        this.barchartForm.get("btitle22")?.clearValidators();
        this.barchartForm.get("bvalue22")?.clearValidators();
        this.barchartForm.get("btitle21")?.setValue("");
        this.barchartForm.get("bvalue21")?.setValue("");
        this.barchartForm.get("btitle22")?.setValue("");
        this.barchartForm.get("bvalue22")?.setValue("");

        this.barchartForm.get("btitle11")?.clearValidators();
        this.barchartForm.get("bvalue11")?.clearValidators();
        this.barchartForm.get("btitle11")?.setValue("");
        this.barchartForm.get("bvalue11")?.setValue("");

      } else if(result == 4){
        this.barchartForm.get("btitle41")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.barchartForm.get("bvalue41")?.setValidators([Validators.required]);
        this.barchartForm.get("btitle42")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.barchartForm.get("bvalue42")?.setValidators([Validators.required]);
        this.barchartForm.get("btitle43")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.barchartForm.get("bvalue43")?.setValidators([Validators.required]);
        this.barchartForm.get("btitle44")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.barchartForm.get("bvalue44")?.setValidators([Validators.required]);

        this.barchartForm.get("btitle51")?.clearValidators();
        this.barchartForm.get("bvalue51")?.clearValidators();
        this.barchartForm.get("btitle52")?.clearValidators();
        this.barchartForm.get("bvalue52")?.clearValidators();
        this.barchartForm.get("btitle53")?.clearValidators();
        this.barchartForm.get("bvalue53")?.clearValidators();
        this.barchartForm.get("btitle54")?.clearValidators();
        this.barchartForm.get("bvalue54")?.clearValidators();
        this.barchartForm.get("btitle55")?.clearValidators();
        this.barchartForm.get("bvalue55")?.clearValidators();
        this.barchartForm.get("btitle51")?.setValue("");
        this.barchartForm.get("bvalue51")?.setValue("");
        this.barchartForm.get("btitle52")?.setValue("");
        this.barchartForm.get("bvalue52")?.setValue("");
        this.barchartForm.get("btitle53")?.setValue("");
        this.barchartForm.get("bvalue53")?.setValue("");
        this.barchartForm.get("btitle54")?.setValue("");
        this.barchartForm.get("bvalue54")?.setValue("");
        this.barchartForm.get("btitle55")?.setValue("");
        this.barchartForm.get("bvalue55")?.setValue("");

        this.barchartForm.get("btitle31")?.clearValidators();
        this.barchartForm.get("bvalue31")?.clearValidators();
        this.barchartForm.get("btitle32")?.clearValidators();
        this.barchartForm.get("bvalue32")?.clearValidators();
        this.barchartForm.get("btitle33")?.clearValidators();
        this.barchartForm.get("bvalue33")?.clearValidators();
        this.barchartForm.get("btitle31")?.setValue("");
        this.barchartForm.get("bvalue31")?.setValue("");
        this.barchartForm.get("btitle32")?.setValue("");
        this.barchartForm.get("bvalue32")?.setValue("");
        this.barchartForm.get("btitle33")?.setValue("");
        this.barchartForm.get("bvalue33")?.setValue("");

        this.barchartForm.get("btitle21")?.clearValidators();
        this.barchartForm.get("bvalue21")?.clearValidators();
        this.barchartForm.get("btitle22")?.clearValidators();
        this.barchartForm.get("bvalue22")?.clearValidators();
        this.barchartForm.get("btitle21")?.setValue("");
        this.barchartForm.get("bvalue21")?.setValue("");
        this.barchartForm.get("btitle22")?.setValue("");
        this.barchartForm.get("bvalue22")?.setValue("");

        this.barchartForm.get("btitle11")?.clearValidators();
        this.barchartForm.get("bvalue11")?.clearValidators();
        this.barchartForm.get("btitle11")?.setValue("");
        this.barchartForm.get("bvalue11")?.setValue("");
      } else if(result == 5){
        this.barchartForm.get("btitle51")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.barchartForm.get("bvalue51")?.setValidators([Validators.required]);
        this.barchartForm.get("btitle52")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.barchartForm.get("bvalue52")?.setValidators([Validators.required]);
        this.barchartForm.get("btitle53")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.barchartForm.get("bvalue53")?.setValidators([Validators.required]);
        this.barchartForm.get("btitle54")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.barchartForm.get("bvalue54")?.setValidators([Validators.required]);
        this.barchartForm.get("btitle55")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.barchartForm.get("bvalue55")?.setValidators([Validators.required]);

        this.barchartForm.get("btitle41")?.clearValidators();
        this.barchartForm.get("bvalue41")?.clearValidators();
        this.barchartForm.get("btitle42")?.clearValidators();
        this.barchartForm.get("bvalue42")?.clearValidators();
        this.barchartForm.get("btitle43")?.clearValidators();
        this.barchartForm.get("bvalue43")?.clearValidators();
        this.barchartForm.get("btitle44")?.clearValidators();
        this.barchartForm.get("bvalue44")?.clearValidators();
        this.barchartForm.get("btitle41")?.setValue("");
        this.barchartForm.get("bvalue41")?.setValue("");
        this.barchartForm.get("btitle42")?.setValue("");
        this.barchartForm.get("bvalue42")?.setValue("");
        this.barchartForm.get("btitle43")?.setValue("");
        this.barchartForm.get("bvalue43")?.setValue("");
        this.barchartForm.get("btitle44")?.setValue("");
        this.barchartForm.get("bvalue44")?.setValue("");

        this.barchartForm.get("btitle31")?.clearValidators();
        this.barchartForm.get("bvalue31")?.clearValidators();
        this.barchartForm.get("btitle32")?.clearValidators();
        this.barchartForm.get("bvalue32")?.clearValidators();
        this.barchartForm.get("btitle33")?.clearValidators();
        this.barchartForm.get("bvalue33")?.clearValidators();
        this.barchartForm.get("btitle31")?.setValue("");
        this.barchartForm.get("bvalue31")?.setValue("");
        this.barchartForm.get("btitle32")?.setValue("");
        this.barchartForm.get("bvalue32")?.setValue("");
        this.barchartForm.get("btitle33")?.setValue("");
        this.barchartForm.get("bvalue33")?.setValue("");

        this.barchartForm.get("btitle21")?.clearValidators();
        this.barchartForm.get("bvalue21")?.clearValidators();
        this.barchartForm.get("btitle22")?.clearValidators();
        this.barchartForm.get("bvalue22")?.clearValidators();
        this.barchartForm.get("btitle21")?.setValue("");
        this.barchartForm.get("bvalue21")?.setValue("");
        this.barchartForm.get("btitle22")?.setValue("");
        this.barchartForm.get("bvalue22")?.setValue("");

        this.barchartForm.get("btitle11")?.clearValidators();
        this.barchartForm.get("bvalue11")?.clearValidators();
        this.barchartForm.get("btitle11")?.setValue("");
        this.barchartForm.get("bvalue11")?.setValue("");
      } else {
        this.barchartForm.get("btitle51")?.clearValidators();
        this.barchartForm.get("bvalue51")?.clearValidators();
        this.barchartForm.get("btitle52")?.clearValidators();
        this.barchartForm.get("bvalue52")?.clearValidators();
        this.barchartForm.get("btitle53")?.clearValidators();
        this.barchartForm.get("bvalue53")?.clearValidators();
        this.barchartForm.get("btitle54")?.clearValidators();
        this.barchartForm.get("bvalue54")?.clearValidators();
        this.barchartForm.get("btitle55")?.clearValidators();
        this.barchartForm.get("bvalue55")?.clearValidators();
        this.barchartForm.get("btitle51")?.setValue("");
        this.barchartForm.get("bvalue51")?.setValue("");
        this.barchartForm.get("btitle52")?.setValue("");
        this.barchartForm.get("bvalue52")?.setValue("");
        this.barchartForm.get("btitle53")?.setValue("");
        this.barchartForm.get("bvalue53")?.setValue("");
        this.barchartForm.get("btitle54")?.setValue("");
        this.barchartForm.get("bvalue54")?.setValue("");
        this.barchartForm.get("btitle55")?.setValue("");
        this.barchartForm.get("bvalue55")?.setValue("");

        this.barchartForm.get("btitle41")?.clearValidators();
        this.barchartForm.get("bvalue41")?.clearValidators();
        this.barchartForm.get("btitle42")?.clearValidators();
        this.barchartForm.get("bvalue42")?.clearValidators();
        this.barchartForm.get("btitle43")?.clearValidators();
        this.barchartForm.get("bvalue43")?.clearValidators();
        this.barchartForm.get("btitle44")?.clearValidators();
        this.barchartForm.get("bvalue44")?.clearValidators();
        this.barchartForm.get("btitle41")?.setValue("");
        this.barchartForm.get("bvalue41")?.setValue("");
        this.barchartForm.get("btitle42")?.setValue("");
        this.barchartForm.get("bvalue42")?.setValue("");
        this.barchartForm.get("btitle43")?.setValue("");
        this.barchartForm.get("bvalue43")?.setValue("");
        this.barchartForm.get("btitle44")?.setValue("");
        this.barchartForm.get("bvalue44")?.setValue("");

        this.barchartForm.get("btitle31")?.clearValidators();
        this.barchartForm.get("bvalue31")?.clearValidators();
        this.barchartForm.get("btitle32")?.clearValidators();
        this.barchartForm.get("bvalue32")?.clearValidators();
        this.barchartForm.get("btitle33")?.clearValidators();
        this.barchartForm.get("bvalue33")?.clearValidators();
        this.barchartForm.get("btitle31")?.setValue("");
        this.barchartForm.get("bvalue31")?.setValue("");
        this.barchartForm.get("btitle32")?.setValue("");
        this.barchartForm.get("bvalue32")?.setValue("");
        this.barchartForm.get("btitle33")?.setValue("");
        this.barchartForm.get("bvalue33")?.setValue("");

        this.barchartForm.get("btitle21")?.clearValidators();
        this.barchartForm.get("bvalue21")?.clearValidators();
        this.barchartForm.get("btitle22")?.clearValidators();
        this.barchartForm.get("bvalue22")?.clearValidators();
        this.barchartForm.get("btitle21")?.setValue("");
        this.barchartForm.get("bvalue21")?.setValue("");
        this.barchartForm.get("btitle22")?.setValue("");
        this.barchartForm.get("bvalue22")?.setValue("");

        this.barchartForm.get("btitle11")?.clearValidators();
        this.barchartForm.get("bvalue11")?.clearValidators();
        this.barchartForm.get("btitle11")?.setValue("");
        this.barchartForm.get("bvalue11")?.setValue("");
      }
    });
  };

  get f(){
    return this.barchartForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.barchartForm.invalid) { 
      return true;
    }
    else {
      console.log(">>>",this.barchartForm.value);

      this.onclose.emit();
      const data = {
        "nobars":this.barchartForm.value.nobars,
        "btitle11":this.barchartForm.value.btitle11,
        "bvalue11":this.barchartForm.value.bvalue11,
        "btitle21":this.barchartForm.value.btitle21,
        "bvalue21":this.barchartForm.value.bvalue21,
        "btitle22":this.barchartForm.value.btitle22,
        "bvalue22":this.barchartForm.value.bvalue22,
        "btitle31":this.barchartForm.value.btitle31,
        "bvalue31":this.barchartForm.value.bvalue31,
        "btitle32":this.barchartForm.value.btitle32,
        "bvalue32":this.barchartForm.value.bvalue32,
        "btitle33":this.barchartForm.value.btitle33,
        "bvalue33":this.barchartForm.value.bvalue33,
        "btitle41":this.barchartForm.value.btitle41,
        "bvalue41":this.barchartForm.value.bvalue41,
        "btitle42":this.barchartForm.value.btitle42,
        "bvalue42":this.barchartForm.value.bvalue42,
        "btitle43":this.barchartForm.value.btitle43,
        "bvalue43":this.barchartForm.value.bvalue43,
        "btitle44":this.barchartForm.value.btitle44,
        "bvalue44":this.barchartForm.value.bvalue44,
        "btitle51":this.barchartForm.value.btitle51,
        "bvalue51":this.barchartForm.value.bvalue51,
        "btitle52":this.barchartForm.value.btitle52,
        "bvalue52":this.barchartForm.value.bvalue52,
        "btitle53":this.barchartForm.value.btitle53,
        "bvalue53":this.barchartForm.value.bvalue53,
        "btitle54":this.barchartForm.value.btitle54,
        "bvalue54":this.barchartForm.value.bvalue54,
        "btitle55":this.barchartForm.value.btitle55,
        "bvalue55":this.barchartForm.value.bvalue55,
        "xaxistitle":this.barchartForm.value.xaxistitle,
        "yaxistitle":this.barchartForm.value.yaxistitle,
        "size":this.barchartForm.value.size,
        "color":this.barchartForm.value.color
      }
      console.log("Angular check Data>>",data);
      localStorage.setItem("barchartdata",JSON.stringify(data));
      this.router.navigate(['/component/barchart']);
    }
  }
}
