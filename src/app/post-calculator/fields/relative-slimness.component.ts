import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-relative-slimness',
  template: `
    <div class="form-group">
      <label>Suhteline saledus: <span class="badge badge-secondary align-text-bottom c-pointer"
                                      [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
          <ng-katex [equation]="'\\\\lambda_{\\\\text{rel},z}'"></ng-katex> =
        </span></div>
        <input type="number" disabled="disabled" class="form-control" [value]="value.z"/>
      </div>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
          <ng-katex [equation]="'\\\\lambda_{\\\\text{rel},y}'"></ng-katex> =
        </span></div>
        <input type="number" disabled="disabled" class="form-control" [value]="value.y"/>
      </div>
    </div>
    <ng-template #helpText>
      <div class="row">
        <div class="col">
          <ng-katex [equation]="relz"></ng-katex><br>
          <ng-katex [equation]="z"></ng-katex><br>
        </div>
        <div class="col">
          <ng-katex [equation]="rely"></ng-katex><br>
          <ng-katex [equation]="y"></ng-katex><br>
        </div>
      </div>
    </ng-template>
  `
})
export class RelativeSlimnessComponent {
  @Input() value: { z: number, y: number };

  relz = `
    \\lambda_{\\text{rel},z} =
    \\dfrac{\\lambda_z}{\\pi}
    \\sqrt{\\dfrac{f_{c,0,k}}{E_{0,05}}}
  `;

  z = `\\lambda_z = l_{\\text{ef},z}/i_z`;

  rely = `
    \\lambda_{\\text{rel},y} =
    \\dfrac{\\lambda_y}{\\pi}
    \\sqrt{\\dfrac{f_{c,0,k}}{E_{0,05}}}
  `;

  y = `\\lambda_y = l_{\\text{ef},y}/i_y`;
}
