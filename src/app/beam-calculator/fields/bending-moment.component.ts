import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bending-moment',
  template: `
    <div class="form-group">
      <label for="bendingmoment-input">Paindemoment: <span
        class="badge badge-secondary align-text-bottom c-pointer"
        [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">M =</span></div>
        <input [value]="moment" disabled="disabled" type="number" class="form-control"
               id="bendingmoment-input"/>
        <div class="input-group-append"><span class="input-group-text">N·mm</span></div>
      </div>
    </div>
    <ng-template #helpText>
      <ng-katex [equation]="'M = \\\\dfrac{q⋅L^2}{8}'"></ng-katex>
    </ng-template>
  `
})
export class BendingMomentComponent {
  @Input() moment: number;
}
