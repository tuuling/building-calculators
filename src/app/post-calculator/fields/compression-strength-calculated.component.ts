import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compression-strength-calculated',
  template: `
    <div class="form-group">
      <label for="strengthD-input">Arvutuslik survetugevus: <span
        class="badge badge-secondary align-text-bottom c-pointer" [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend">
                    <span class="input-group-text">
                      <ng-katex [equation]="'f_{c,0,d}'"></ng-katex> =
                    </span>
        </div>
        <input [value]="strength" disabled="disabled" type="number" class="form-control"
               id="strengthD-input"/>
        <div class="input-group-append"><span class="input-group-text">N/mm<sup>2</sup></span></div>
      </div>
    </div>
    <ng-template #helpText>
      <ng-katex [equation]="'f_{c,0,d} = \\\\dfrac{f_{c,0,k}⋅K_{mod}}{\\\\Upsilon_M}'"></ng-katex>
    </ng-template>

  `
})
export class CompressionStrengthCalculatedComponent {
  @Input() strength: number;
}
