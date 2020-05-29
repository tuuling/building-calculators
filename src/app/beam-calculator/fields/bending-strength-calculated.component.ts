import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bending-strength-calculated',
  template: `
    <div class="form-group">
      <label for="strengthD-input">Arvutuslik paindetugevus: <span
        class="badge badge-secondary align-text-bottom c-pointer" [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend">
                    <span class="input-group-text">
                      <ng-katex [equation]="'f_{m,d}'"></ng-katex> =
                    </span>
        </div>
        <input [value]="strength" disabled="disabled" type="number" class="form-control"
               id="strengthD-input"/>
        <div class="input-group-append"><span class="input-group-text">N/mm<sup>2</sup></span></div>
      </div>
    </div>
    <ng-template #helpText>
      <ng-katex [equation]="'f_{m,d} = \\\\dfrac{f_{m,k}⋅k_{h}⋅K_{mod}}{\\\\Upsilon_M}'"></ng-katex>
    </ng-template>

  `
})
export class BendingStrengthCalculatedComponent {
  @Input() strength: number;
}
