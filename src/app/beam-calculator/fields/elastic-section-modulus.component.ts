import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-elastic-section-modulus',
  template: `
    <div class="form-group">
      <!-- Elastic section modulus -->
      <label>Vastupanumoment: <span class="badge badge-secondary align-text-bottom c-pointer"
                                    [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">W<sub>z</sub> =</span></div>
        <input type="text" disabled="disabled" class="form-control" [value]="modulus"/>
        <div class="input-group-append"><span class="input-group-text">mm<sup>3</sup></span></div>
      </div>
    </div>
    <ng-template #helpText>
      <ng-katex [equation]="'W_z = \\\\dfrac{bh^2}{6}'"></ng-katex>
    </ng-template>
  `
})
export class ElasticSectionModulusComponent {
  @Input() modulus: number;
}
