import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SantoshComponent } from './santosh/santosh.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductComponent } from './product/product.component';
import { FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DirectivesDirective } from './directives.directive';
import { MycolorDirective } from './directives/mycolor.directive';
import { PipesPipe } from './pipes.pipe';
import { SortpipePipe } from './pipes/sortpipe.pipe';
import { SearchbynamePipe } from './pipes/searchbyname.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MypipesPipe } from './mypipes.pipe';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { WebComponent } from './web/web.component';
import { JavaComponent } from './java/java.component';
import { CoursesortPipe } from './pipes/coursesort.pipe';
import { CoursesearchPipe } from './pipes/coursesearch.pipe';
import { TechRoutingModule } from './tech-routing/tech-routing.module';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ReactFormsComponent } from './react-forms/react-forms.component';
import { ReactForms1Component } from './react-forms1/react-forms1.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SantoshComponent,
    InterpolationComponent,
    EventBindingComponent,
    CalculatorComponent,
    ProductComponent,
    DirectivesDirective,
    MycolorDirective,
    PipesPipe,
    SortpipePipe,
    SearchbynamePipe,
    ParentComponent,
    ChildComponent,
    MypipesPipe,
    Child1Component,
    Parent1Component,
    FirstComponent,
    SecondComponent,
    WebComponent,
    JavaComponent,
    CoursesortPipe,
    CoursesearchPipe,
    Sibling1Component,
    Sibling2Component,
    ReactFormsComponent,
    ReactForms1Component,
    TempDrivenFormComponent,
    
     
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TechRoutingModule,
    ReactiveFormsModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
