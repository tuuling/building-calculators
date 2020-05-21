import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeamCalculatorComponent } from './beam-calculator/beam-calculator.component';


const routes: Routes = [
  {
    path: '',
    component: BeamCalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeamCalculatorRoutingModule { }
