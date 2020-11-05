import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WallCalculatorRoutingModule } from './wall-calculator-routing.module';
import { WallCalculatorComponent } from './wall-calculator/wall-calculator.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayerListComponent } from './layer-list/layer-list.component';
import { CrossSectionComponent } from './cross-section/cross-section.component';
import { LayerComponent } from './layer-list/layer/layer.component';



@NgModule({
  declarations: [WallCalculatorComponent, LayerListComponent, CrossSectionComponent, LayerComponent],
  imports: [
    DragDropModule,
    SharedModule,
    WallCalculatorRoutingModule
  ]
})
export class WallCalculatorModule { }
