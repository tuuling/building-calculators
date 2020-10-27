import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WallCalculatorComponent } from './wall-calculator/wall-calculator.component';


const routes: Routes = [
  {
    path: '',
    component: WallCalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WallCalculatorRoutingModule { }
