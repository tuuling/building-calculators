import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KatexModule } from 'ng-katex';
import { CrossSectionGraphicComponent } from './graphics/cross-section-graphic.component';
import { CrossSectionComponent } from './fields/cross-section.component';
import { LengthComponent } from './fields/length.component';
import { WoodgradeComponent } from './fields/woodgrade.component';
import { UsageclassComponent } from './fields/usageclass.component';
import { YoungsModulusComponent } from './fields/youngs-modulus.component';
import { KmodComponent } from './fields/kmod.component';
import { YmComponent } from './fields/ym.component';
import { XyPipe } from './xy.pipe';

@NgModule({
  declarations: [
    CrossSectionGraphicComponent,
    CrossSectionComponent,
    LengthComponent,
    WoodgradeComponent,
    UsageclassComponent,
    YoungsModulusComponent,
    KmodComponent,
    YmComponent,
    XyPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    KatexModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    KatexModule,
    CrossSectionGraphicComponent,
    CrossSectionComponent,
    LengthComponent,
    WoodgradeComponent,
    UsageclassComponent,
    YoungsModulusComponent,
    KmodComponent,
    YmComponent,
    XyPipe
  ]
})
export class SharedModule {
}
