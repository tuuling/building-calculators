import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KatexModule } from 'ng-katex';
import { CrossSectionGraphicComponent } from './graphics/cross-section-graphic.component';

@NgModule({
  declarations: [
    CrossSectionGraphicComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    KatexModule,
    CrossSectionGraphicComponent
  ]
})
export class SharedModule { }
