import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flex-factor',
  template: `
    <div class="form-group">
      <label>Nõtketegur: <span class="badge badge-secondary align-text-bottom c-pointer"
                               [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
          <ng-katex [equation]="'k_{c,z}'"></ng-katex> =
        </span></div>
        <input type="number" disabled="disabled" class="form-control" [value]="value.z"/>
      </div>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
          <ng-katex [equation]="'k_{c,y}'"></ng-katex> =
        </span></div>
        <input type="number" disabled="disabled" class="form-control" [value]="value.y"/>
      </div>
    </div>
    <ng-template #helpText>
      <div class="row">
        <div class="col my-3">
          <ng-katex [equation]="kcz"></ng-katex><br>
          <ng-katex [equation]="kz"></ng-katex>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col my-3">
          <ng-katex [equation]="kcy"></ng-katex><br>
          <ng-katex [equation]="ky"></ng-katex>
        </div>
      </div>
    </ng-template>
  `
})
export class FlexFactorComponent {
  @Input() value: {z: number, y: number };

  kcz = `k_{c,z} = \\dfrac{1}{k_z + \\sqrt{k_z^2 - \\lambda_{\\text{rel},z}^2}}`;
  kz = `k_z = 0,5 ⋅ [1 + β_c ⋅ (\\lambda_{\\text{rel},z} - 0,3) + \\lambda_{\\text{rel},z}^2]`;

  kcy = `k_{c,y} = \\dfrac{1}{k_y + \\sqrt{k_y^2 - \\lambda_{\\text{rel},y}^2}}`;
  ky = `k_y = 0,5 ⋅ [1 + β_c ⋅ (\\lambda_{\\text{rel},y} - 0,3) + \\lambda_{\\text{rel},y}^2]`;
}
