import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crit-bending-tension',
  template: `
    <div class="form-group">
      <label>Kriitiline paindepinge: <span class="badge badge-secondary align-text-bottom c-pointer"
                                           [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
                    <ng-katex [equation]="'\\\\sigma_{m,crit}'"></ng-katex> =</span>
        </div>
        <input type="number" disabled="disabled" class="form-control" [value]="tension"/>
        <div class="input-group-append"><span class="input-group-text">N/mm<sup>2</sup></span></div>
      </div>
    </div>
    <ng-template #helpText>
      <ng-katex [equation]="'\\\\sigma_{m,crit} = \\\\dfrac{0,78b^2}{h⋅L_{ef}} ⋅ E_{0,05}'"></ng-katex>
    </ng-template>
  `
})
export class CritBendingTensionComponent {
  @Input() tension: number;
}
