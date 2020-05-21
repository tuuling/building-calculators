import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bending-tension',
  template: `
    <div class="form-group">
      <label for="bendingtension-input">Paindepinge: <span
        class="badge badge-secondary align-text-bottom c-pointer"
        [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend">
                    <span class="input-group-text">
                      <ng-katex [equation]="'\\\\sigma_{m,z,d}'"></ng-katex>
                    </span>
        </div>
        <input [value]="tension" disabled="disabled" type="number" class="form-control"
               id="bendingtension-input"/>
        <div class="input-group-append"><span class="input-group-text">N/mm<sup>2</sup></span></div>
      </div>
    </div>
    <ng-template #helpText>
      <ng-katex [equation]="'\\\\sigma_{m,z,d} = \\\\dfrac{M}{W_z}'"></ng-katex>
    </ng-template>

  `
})
export class BendingTensionComponent {
  @Input() tension: number;
}
