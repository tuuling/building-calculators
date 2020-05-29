import { NgModule } from '@angular/core';

import { BeamCalculatorRoutingModule } from './beam-calculator-routing.module';
import { BeamCalculatorComponent } from './beam-calculator/beam-calculator.component';
import { SharedModule } from '../shared/shared.module';
import { SpacingComponent } from './fields/spacing.component';
import { BendingStrengthComponent } from './fields/bending-strength.component';
import { YoungsModulusComponent } from './fields/youngs-modulus.component';
import { ElasticSectionModulusComponent } from './fields/elastic-section-modulus.component';
import { KmodComponent } from './fields/kmod.component';
import { BendingMomentComponent } from './fields/bending-moment.component';
import { YmComponent } from './fields/ym.component';
import { BendingTensionComponent } from './fields/bending-tension.component';
import { BendingStrengthCalculatedComponent } from './fields/bending-strength-calculated.component';
import { BendingResistanceComponent } from './fields/bending-resistance.component';
import { BeamsIsoGraphicComponent } from './graphics/beams-iso-graphic.component';
import { DistLoadComponent } from './fields/dist-load.component';
import { TotalLoadComponent } from './fields/total-load.component';
import { KhComponent } from './fields/kh.component';
import { EffectiveLengthComponent } from './fields/effective-length.component';
import { CritBendingTensionComponent } from './fields/crit-bending-tension.component';
import { LambdaRelMComponent } from './fields/lambda-rel-m.component';
import { KcritComponent } from './fields/kcrit.component';
import { BendingResistanceKcritComponent } from './fields/bending-resistance-kcrit.component';


@NgModule({
  declarations: [
    BeamCalculatorComponent,
    SpacingComponent,
    BendingStrengthComponent,
    YoungsModulusComponent,
    ElasticSectionModulusComponent,
    KmodComponent,
    BendingMomentComponent,
    YmComponent,
    BendingTensionComponent,
    BendingStrengthCalculatedComponent,
    DistLoadComponent,
    TotalLoadComponent,
    BendingResistanceComponent,
    BeamsIsoGraphicComponent,
    KhComponent,
    EffectiveLengthComponent,
    CritBendingTensionComponent,
    LambdaRelMComponent,
    KcritComponent,
    BendingResistanceKcritComponent
  ],
  imports: [
    SharedModule,
    BeamCalculatorRoutingModule
  ]
})
export class BeamCalculatorModule { }
