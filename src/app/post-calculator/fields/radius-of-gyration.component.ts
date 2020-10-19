import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radius-of-gyration',
  template: `
    <div class="form-group">
      <!-- Radius of gyration -->
      <label>Inertsiraadius: <span class="badge badge-secondary align-text-bottom c-pointer"
                                   [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
          <ng-katex [equation]="'i_z'"></ng-katex> =
        </span></div>
        <input type="number" disabled="disabled" class="form-control" [value]="value.z"/>
        <div class="input-group-append"><span class="input-group-text">mm</span></div>
      </div>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
          <ng-katex [equation]="'i_y'"></ng-katex> =
        </span></div>
        <input type="number" disabled="disabled" class="form-control" [value]="value.y"/>
        <div class="input-group-append"><span class="input-group-text">mm</span></div>
      </div>
    </div>
    <ng-template #helpText>
      <div class="row">
        <div class="col">
          <ng-katex [equation]="'i_z = \\\\dfrac{b}{\\\\sqrt{12}}'"></ng-katex>
        </div>
        <div class="col">
          <ng-katex [equation]="'i_y = \\\\dfrac{h}{\\\\sqrt{12}}'"></ng-katex>
        </div>
      </div>
    </ng-template>
  `
})
export class RadiusOfGyrationComponent {
  @Input() value: { z: number, y: number };
}
