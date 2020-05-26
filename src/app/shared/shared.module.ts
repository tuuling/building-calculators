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

@NgModule({
  declarations: [
    CrossSectionGraphicComponent,
    CrossSectionComponent,
    LengthComponent,
    WoodgradeComponent,
    UsageclassComponent
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
  ]
})
export class SharedModule { }
