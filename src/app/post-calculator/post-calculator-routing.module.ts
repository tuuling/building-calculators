import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCalculatorComponent } from './post-calculator/post-calculator.component';


const routes: Routes = [
  {
    path: '',
    component: PostCalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostCalculatorRoutingModule { }
