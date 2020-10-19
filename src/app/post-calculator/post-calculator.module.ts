import { NgModule } from '@angular/core';

import { PostCalculatorRoutingModule } from './post-calculator-routing.module';
import { PostCalculatorComponent } from './post-calculator/post-calculator.component';
import { SharedModule } from '../shared/shared.module';
import { CompressionStrengthComponent } from './fields/compression-strength.component';
import { RadiusOfGyrationComponent } from './fields/radius-of-gyration.component';
import { PostConnectionTypeComponent } from './fields/post-connection-type.component';
import { RelativeSlimnessComponent } from './fields/relative-slimness.component';
import { FlexFactorComponent } from './fields/flex-factor.component';
import { CompressionStrengthCalculatedComponent } from './fields/compression-strength-calculated.component';
import { TotalLoadComponent } from './fields/total-load.component';
import { CompressionTensionComponent } from './fields/compression-tension.component';
import { CompressionResistanceComponent } from './fields/compression-resistance.component';
import { BetaCComponent } from './fields/beta-c.component';
import { CrossSectionAreaComponent } from './fields/cross-section-area.component';
import { FlexLengthComponent } from './fields/flex-length.component';


@NgModule({
  declarations: [
    PostCalculatorComponent,
    CompressionStrengthComponent,
    RadiusOfGyrationComponent,
    PostConnectionTypeComponent,
    RelativeSlimnessComponent,
    FlexFactorComponent,
    CompressionStrengthCalculatedComponent,
    TotalLoadComponent,
    CompressionTensionComponent,
    CompressionResistanceComponent,
    BetaCComponent,
    CrossSectionAreaComponent,
    FlexLengthComponent
  ],
  imports: [
    SharedModule,
    PostCalculatorRoutingModule
  ]
})
export class PostCalculatorModule { }
