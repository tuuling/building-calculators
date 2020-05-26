import { NgModule } from '@angular/core';

import { PostCalculatorRoutingModule } from './post-calculator-routing.module';
import { PostCalculatorComponent } from './post-calculator/post-calculator.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PostCalculatorComponent],
  imports: [
    SharedModule,
    PostCalculatorRoutingModule
  ]
})
export class PostCalculatorModule { }
