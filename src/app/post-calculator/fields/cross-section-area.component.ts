import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cross-section-component',
  template: `
    <div class="form-group">
      <label>Netoristlõikepindala: <span class="badge badge-secondary align-text-bottom c-pointer"
                                         [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
                    <ng-katex [equation]="'A_h'"></ng-katex> =
                  </span></div>
        <input type="text" disabled="disabled" class="form-control" [value]="netArea"/>
        <div class="input-group-append"><span class="input-group-text">mm<sup>2</sup> </span></div>
      </div>
    </div>
    <ng-template #helpText>
      <ng-katex [equation]="'A_h = b ⋅ h'"></ng-katex>
    </ng-template>
  `
})
export class CrossSectionAreaComponent {
  @Input() netArea: number;
}
