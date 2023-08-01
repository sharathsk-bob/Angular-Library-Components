import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-areachartform',
  templateUrl: './areachartform.component.html',
  styleUrls: ['./areachartform.component.scss']
})
export class AreachartformComponent {
  title = "";
  layout:any;
  values1:any;
  values2:any;
  values3:any;
  registerForm: FormGroup;
  submitted = false;

  @Output() onclose = new EventEmitter<any>;
 
  constructor( private router:Router,
     private formBuilder: FormBuilder
    ) {}


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      count:['',[Validators.required]],
      nolayout:[''],
      values1:[''],
      values2:[''],
      values3:[''],
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
      legendName: [''],
      legendXlabel: [''],
      legendYlabel: [''],
      legendValue1: [''],
      legendValue2: [''],
      legendValue3: [''],
      legendValue4: [''],
      legendValue5: [''],
      legendValuex1: [''],
      legendValuex2: [''],
      legendValuex3: [''],
      legendValuex4: [''],
      legendValuex5: [''],
      legendMultipleName: [''],
      legendXlabel2: [''],
      legendYlabel2: [''],
      legendMultipleValue1: [''],
      legendMultipleValue2: [''],
      legendMultipleValue3: [''],
      legendMultipleValue4: [''],
      legendMultipleValue5: [''],
      legendMultipleValuex1: [''],
      legendMultipleValuex2: [''],
      legendMultipleValuex3: [''],
      legendMultipleValuex4: [''],
      legendMultipleValuex5: [''],
      legendMultiple1Name: [''],
      legendMultiple1Value1: [''],
      legendMultiple1Value2: [''],
      legendMultiple1Value3: [''],
      legendMultiple1Value4: [''],
      legendMultiple1Value5: [''],
      legendMultiple3Name: [''],
      legendXlabel3: [''],
      legendYlabel3: [''],
      legendMultiple3Valuex1: [''],
      legendMultiple3Valuex2: [''],
      legendMultiple3Valuex3: [''],
      legendMultiple3Valuex4: [''],
      legendMultiple3Valuex5: [''],
      legendMultiple3Value1: [''],
      legendMultiple3Value2: [''],
      legendMultiple3Value3: [''],
      legendMultiple3Value4: [''],
      legendMultiple3Value5: [''],
      legendMultiple31Name: [''],
      legendMultiple31Value1: [''],
      legendMultiple31Value2: [''],
      legendMultiple31Value3: [''],
      legendMultiple31Value4: [''],
      legendMultiple31Value5: [''],
      legendMultiple32Name: [''],
      legendMultiple32Value1: [''],
      legendMultiple32Value2: [''],
      legendMultiple32Value3: [''],
      legendMultiple32Value4: [''],
      legendMultiple32Value5: [''],
      symbol:['small',[Validators.required]]
    });
    this.registerForm.get('count')?.valueChanges.subscribe((value) => {
      if (value === 'Multiple') {
        this.registerForm.get('nolayout')?.setValidators(Validators.required);
        this.registerForm.get('values1')?.clearValidators();
        this.registerForm.get('legendName')?.clearValidators();
        this.registerForm.get('legendXlabel')?.clearValidators();
        this.registerForm.get('legendYlabel')?.clearValidators();
        this.registerForm.get('legendValue1')?.clearValidators();
        this.registerForm.get('legendValue2')?.clearValidators();
        this.registerForm.get('legendValue3')?.clearValidators();
        this.registerForm.get('legendValue4')?.clearValidators();
        this.registerForm.get('legendValue5')?.clearValidators();
        this.registerForm.get('legendValuex1')?.clearValidators();
        this.registerForm.get('legendValuex2')?.clearValidators();
        this.registerForm.get('legendValuex3')?.clearValidators();
        this.registerForm.get('legendValuex4')?.clearValidators();
        this.registerForm.get('legendValuex5')?.clearValidators();

      } else {
       // this.registerForm.get('nolayout')?.clearValidators();
        this.registerForm.get('values2')?.clearValidators();
        this.registerForm.get('values3')?.clearValidators();
        this.registerForm.get('legendMultipleName')?.clearValidators();
        this.registerForm.get('legendXlabel2')?.clearValidators();
        this.registerForm.get('legendYlabel2')?.clearValidators();
        this.registerForm.get('legendMultipleValue1')?.clearValidators();
        this.registerForm.get('legendMultipleValue2')?.clearValidators();
        this.registerForm.get('legendMultipleValue3')?.clearValidators();
        this.registerForm.get('legendMultipleValue4')?.clearValidators();
        this.registerForm.get('legendMultipleValue5')?.clearValidators();
        this.registerForm.get('legendMultipleValuex1')?.clearValidators();
        this.registerForm.get('legendMultipleValuex2')?.clearValidators();
        this.registerForm.get('legendMultipleValuex3')?.clearValidators();
        this.registerForm.get('legendMultipleValuex4')?.clearValidators();
        this.registerForm.get('legendMultipleValuex5')?.clearValidators();
       
        this.registerForm.get('legendMultiple1Name')?.clearValidators();
        this.registerForm.get('legendMultiple1Value1')?.clearValidators();
        this.registerForm.get('legendMultiple1Value2')?.clearValidators();
        this.registerForm.get('legendMultiple1Value3')?.clearValidators();
        this.registerForm.get('legendMultiple1Value4')?.clearValidators();
        this.registerForm.get('legendMultiple1Value5')?.clearValidators();
        this.registerForm.get('nolayout')?.setValidators(Validators.required);
        this.registerForm.get('legendName')?.setValidators(Validators.required);
        this.registerForm.get('legendXlabel')?.setValidators(Validators.required);
        this.registerForm.get('legendYlabel')?.setValidators(Validators.required);
        this.registerForm.get('values1')?.setValidators(Validators.required);
        this.registerForm.get('legendValue1')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendValue2')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendValue3')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendValue4')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendValue5')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendValuex1')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get('legendValuex2')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get('legendValuex3')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get('legendValuex4')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get('legendValuex5')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);


        this.registerForm.get('legendMultiple3Name')?.clearValidators();
        this.registerForm.get('legendXlabel3')?.clearValidators();
        this.registerForm.get('legendYlabel3')?.clearValidators();
        this.registerForm.get('legendMultiple3Value1')?.clearValidators();
        this.registerForm.get('legendMultiple3Value2')?.clearValidators();
        this.registerForm.get('legendMultiple3Value3')?.clearValidators();
        this.registerForm.get('legendMultiple3Value4')?.clearValidators();
        this.registerForm.get('legendMultiple3Value5')?.clearValidators();
        this.registerForm.get('legendMultiple3Valuex1')?.clearValidators();
        this.registerForm.get('legendMultiple3Valuex2')?.clearValidators();
        this.registerForm.get('legendMultiple3Valuex3')?.clearValidators();
        this.registerForm.get('legendMultiple3Valuex4')?.clearValidators();
        this.registerForm.get('legendMultiple3Valuex5')?.clearValidators();

        this.registerForm.get('legendMultiple31Name')?.clearValidators();
        this.registerForm.get('legendMultiple31Value1')?.clearValidators();
        this.registerForm.get('legendMultiple31Value2')?.clearValidators();
        this.registerForm.get('legendMultiple31Value3')?.clearValidators();
        this.registerForm.get('legendMultiple31Value4')?.clearValidators();
        this.registerForm.get('legendMultiple31Value5')?.clearValidators();

        this.registerForm.get('legendMultiple32Name')?.clearValidators();
        this.registerForm.get('legendMultiple32Value1')?.clearValidators();
        this.registerForm.get('legendMultiple32Value2')?.clearValidators();
        this.registerForm.get('legendMultiple32Value3')?.clearValidators();
        this.registerForm.get('legendMultiple32Value4')?.clearValidators();
        this.registerForm.get('legendMultiple32Value5')?.clearValidators();
      }
     
    });
    this.registerForm.get("nolayout")?.valueChanges.subscribe((result)=>{

      // console.log("vishnu",result);

      if(result == 2) {
        this.registerForm.get('nolayout')?.clearValidators();
        this.registerForm.get('values2')?.setValidators(Validators.required);
        this.registerForm.get('legendMultipleName')?.setValidators(Validators.required);
        this.registerForm.get('legendXlabel2')?.setValidators(Validators.required);
        this.registerForm.get('legendYlabel2')?.setValidators(Validators.required);
        this.registerForm.get('legendMultipleValue1')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultipleValue2')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultipleValue3')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultipleValue4')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultipleValue5')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultipleValuex1')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get('legendMultipleValuex2')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get('legendMultipleValuex3')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get('legendMultipleValuex4')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get('legendMultipleValuex5')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
       
        this.registerForm.get('legendMultiple1Name')?.setValidators(Validators.required);
        this.registerForm.get('legendMultiple1Value1')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple1Value2')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple1Value3')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple1Value4')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple1Value5')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
       
      } else if(result == 3){
        this.registerForm.get('nolayout')?.clearValidators();
        this.registerForm.get('values3')?.setValidators(Validators.required);
        this.registerForm.get('legendMultiple3Name')?.setValidators(Validators.required);
        this.registerForm.get('legendXlabel3')?.setValidators(Validators.required);
        this.registerForm.get('legendYlabel3')?.setValidators(Validators.required);
        this.registerForm.get('legendMultiple3Value1')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple3Value2')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple3Value3')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple3Value4')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple3Value5')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple3Valuex1')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get('legendMultiple3Valuex2')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get('legendMultiple3Valuex3')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get('legendMultiple3Valuex4')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get('legendMultiple3Valuex5')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);

        this.registerForm.get('legendMultiple31Name')?.setValidators(Validators.required);
        this.registerForm.get('legendMultiple31Value1')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple31Value2')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple31Value3')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple31Value4')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple31Value5')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);

        this.registerForm.get('legendMultiple32Name')?.setValidators(Validators.required);
        this.registerForm.get('legendMultiple32Value1')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple32Value2')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple32Value3')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple32Value4')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
        this.registerForm.get('legendMultiple32Value5')?.setValidators([Validators.required, Validators.min(1), Validators.max(1000)]);
       

      } 
        
    });
  }

  get f(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.registerForm.invalid);
    if(this.registerForm.invalid) { 
      return true;
      
    }
    else {
      console.log(">>>",this.registerForm.value);
      const legendValues = [];
      for (let i = 1; i <= 5; i++) {
        const control = this.registerForm.get(`legendValue${i}`);
        legendValues.push(parseInt(control?.value, 10));
      }
      const legendValuesx = [];
      for (let i = 1; i <= 5; i++) {
        const control = this.registerForm.get(`legendValuex${i}`);
        legendValuesx.push(control?.value);
      }
      const legendMultipleValues = [];
      for (let i = 1; i <= 5; i++) {
        const control = this.registerForm.get(`legendMultipleValue${i}`);
        legendMultipleValues.push(parseInt(control?.value, 10));
      }
      const legendMultipleValuesx = [];
      for (let i = 1; i <= 5; i++) {
        const control = this.registerForm.get(`legendMultipleValuex${i}`);
        legendMultipleValuesx.push(control?.value);
      }
      const legendMultiple1Values = [];
      for (let i = 1; i <= 5; i++) {
        const control = this.registerForm.get(`legendMultiple1Value${i}`);
        legendMultiple1Values.push(parseInt(control?.value, 10));
      }
      const legendMultiple1Valuesx = [];
      for (let i = 1; i <= 5; i++) {
        const control = this.registerForm.get(`legendMultiple1Valuex${i}`);
        legendMultiple1Valuesx.push(control?.value);
      }
      const legendMultiple3Values = [];
      for (let i = 1; i <= 5; i++) {
        const control = this.registerForm.get(`legendMultiple3Value${i}`);
        legendMultiple3Values.push(parseInt(control?.value, 10));
      }
      const legendMultiple3Valuesx = [];
      for (let i = 1; i <= 5; i++) {
        const control = this.registerForm.get(`legendMultiple3Valuex${i}`);
        legendMultiple3Valuesx.push(control?.value);
      }
      const legendMultiple31Values = [];
      for (let i = 1; i <= 5; i++) {
        const control = this.registerForm.get(`legendMultiple31Value${i}`);
        legendMultiple31Values.push(parseInt(control?.value, 10));
      }
      const legendMultiple32Values = [];
      for (let i = 1; i <= 5; i++) {
        const control = this.registerForm.get(`legendMultiple32Value${i}`);
        legendMultiple32Values.push(parseInt(control?.value, 10));
      }
      const data = {
        "count":this.registerForm.value.count,
        "nolayout":this.registerForm.value.nolayout,
        "values1":this.registerForm.value.values1,
        "values2":this.registerForm.value.values2,
        "values3":this.registerForm.value.values3,
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
        "legendName": this.registerForm.value.legendName,
        "legendXlabel": this.registerForm.value.legendXlabel,
        "legendYlabel": this.registerForm.value.legendYlabel,
        "legendValues":legendValues,
        "legendValuesx":legendValuesx,
        "legendMultipleName": this.registerForm.value.legendMultipleName,
        "legendXlabel2": this.registerForm.value.legendXlabel2,
        "legendYlabel2": this.registerForm.value.legendYlabel2,
        "legendMultipleValues":legendMultipleValues,
        "legendMultipleValuesx":legendMultipleValuesx,
        "legendMultiple1Name": this.registerForm.value.legendMultiple1Name,
        "legendMultiple1Values":legendMultiple1Values,
        "legendMultiple3Name": this.registerForm.value.legendMultiple3Name,
        "legendXlabel3": this.registerForm.value.legendXlabel3,
        "legendYlabel3": this.registerForm.value.legendYlabel3,
        "legendMultiple3Valuesx":legendMultiple3Valuesx,
        "legendMultiple31Name": this.registerForm.value.legendMultiple31Name,
        "legendMultiple3Values":legendMultiple3Values,
        "legendMultiple31Values":legendMultiple31Values,
        "legendMultiple32Name": this.registerForm.value.legendMultiple32Name,
        "legendMultiple32Values":legendMultiple32Values,
        "symbol":this.registerForm.value.symbol
      };
      
      console.log(data);
      this.onclose.emit();
      localStorage.setItem("areachartdata",JSON.stringify(data));
      this.router.navigate(['component/areachart']);
    }
  }
}
