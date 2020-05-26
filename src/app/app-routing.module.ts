import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'beam',
    loadChildren: () => import('./beam-calculator/beam-calculator.module').then(m => m.BeamCalculatorModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./post-calculator/post-calculator.module').then(m => m.PostCalculatorModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
