import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from '../web/web.component';
import { JavaComponent } from '../java/java.component';
import { CorewebComponent } from '../coreweb/coreweb.component';
import { AdvwebComponent } from '../advweb/advweb.component';
import { CorejavaComponent } from '../corejava/corejava.component';
import { AdvjavaComponent } from '../advjava/advjava.component';
import { ProductComponent } from '../product/product.component';
import { ReactFormsComponent } from '../react-forms/react-forms.component';
import { TempDrivenFormComponent } from '../temp-driven-form/temp-driven-form.component';
const routes:Routes = [
  {path:'web', component:WebComponent, 
  children:[
    {path:'coreweb', component:CorewebComponent },
    {path:'advweb', component:AdvwebComponent},
   ] },
  {path:'java', component:JavaComponent,
   children:[
    {path:'corejava', component:CorejavaComponent },
    {path:'advjava', component:AdvjavaComponent},
   ]
 },
 {path:'product', component:ProductComponent
   
 },
 {path:'react-forms', component:ReactFormsComponent
   
},
{path:'react-forms', component:TempDrivenFormComponent
   
}

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [WebComponent,JavaComponent,ProductComponent,ReactFormsComponent,TempDrivenFormComponent]