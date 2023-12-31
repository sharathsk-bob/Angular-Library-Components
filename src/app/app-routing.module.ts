import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './Components/buttons/buttons.component';
import { CardsComponent } from './Components/cards/cards.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './Components/navbar/navbar.component';  
import { TooltipComponent } from './Components/tooltip/tooltip.component';
import { AlertsComponent } from './Components/alerts/alerts.component';
import { ToasterComponent } from './Components/toaster/toaster.component';
import { FormsComponent } from './Components/forms/forms.component';
import { CheckboxComponent } from './Components/checkbox/checkbox.component';
import { InputComponent } from './Components/input/input.component';
import { SwitchctlComponent } from './Components/switchctl/switchctl.component';
import { FileUploadComponent } from './Components/file-upload/file-upload.component';
import { ProgressComponent } from './Components/progress/progress.component';
import { RangesliderComponent } from './Components/rangeslider/rangeslider.component';
import { SelectComponent } from './Components/select/select.component';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { LoaderComponent } from './Components/loader/loader.component';
import { TablecomponentComponent } from './Components/tablecomponent/tablecomponent.component';
import { DynamictabsComponent } from './Components/dynamictabs/dynamictabs.component';
import { ImagesliderComponent } from './Components/imageslider/imageslider.component';
import { LoginComponent } from './Components/login/login.component';
import { BreakpointComponent } from './Components/breakpoint/breakpoint.component';
import { DrawerComponent } from './Components/drawer/drawer.component';
import { AccordianComponent } from './Components/accordian/accordian.component';
import { ErroroutputComponent } from './Components/erroroutput/erroroutput.component';
import { PiechartComponent } from './Components/piechart/piechart.component';
import { ChartsComponent } from './Components/charts/charts.component';
import { BarchartComponent } from './Components/barchart/barchart.component';
import { AreachartComponent } from './Components/areachart/areachart.component';

const routes: Routes = [
 
  {path: '', pathMatch:'full', redirectTo:'/modal'},
  {path: "modal", component:ModalComponent},
  {path: "component/header", component:HeaderComponent},
  {path: "component/card", component:CardsComponent},
  {path: "component/button", component:ButtonsComponent},
  {path: "component/navbar", component:NavbarComponent},
  {path: "component/footer", component:FooterComponent},
  {path: "component/tooltip", component:TooltipComponent},
  {path: "component/alerts", component:AlertsComponent}, 
  {path : "component/toaster", component:ToasterComponent},
  {path : "component/forms", component:FormsComponent},
  {path : "component/input", component:InputComponent},
  {path : "component/checkbox", component:CheckboxComponent},
  {path : "component/switchcontrol", component:SwitchctlComponent},
  {path: "component/file-upload", component:FileUploadComponent}, 
  {path : "component/range", component:RangesliderComponent},
  {path : "component/selector", component:SelectComponent},
  {path : "component/progress", component:ProgressComponent},
  {path : "component/calendar", component:CalendarComponent},
  {path : "component/loader", component:LoaderComponent},
  {path : "component/table", component:TablecomponentComponent},
  {path : "component/dynamics", component:DynamictabsComponent},
  {path : "component/imageslider", component:ImagesliderComponent},
  {path : "component/login&signup", component:LoginComponent},
  {path : "component/breakpoint", component:BreakpointComponent},
  {path : "component/drawer", component:DrawerComponent},
  {path : "component/accordian", component: AccordianComponent},
  {path : "component/errorpage", component:ErroroutputComponent},
  {path : "component/piechart", component:PiechartComponent},

  {path : "component/charts", component:ChartsComponent},
  {path : "component/piechart", component:PiechartComponent},
  {path : "component/barchart", component:BarchartComponent},
  {path : "component/areachart",component:AreachartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
