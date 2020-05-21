import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ym',
  template: `
    <div class="form-group">
      <label for="YM-input">Materjali osavarutegur: <span
        class="badge badge-secondary align-text-bottom c-pointer" [ngbPopover]="YMTT">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
                    <ng-katex [equation]="'\\\\Upsilon_M'"></ng-katex> =</span>
        </div>
        <input [value]="ym" disabled="disabled" type="number" class="form-control" id="YM-input"/>
      </div>
    </div>

    <ng-template #YMTT>
      <p>
        <ng-katex [equation]="'\\\\Upsilon_M'"></ng-katex>
        - Materjali liigist sõltuv osavarutegur
      </p>
      <p style="white-space: nowrap"><strong>Monoliitpuit: </strong>
        <ng-katex [equation]="'\\\\Upsilon_M = 1,3'"></ng-katex>
      </p>
      <p style="white-space: nowrap"><strong>Lamell- ja spoonliimpuit: </strong>
        <ng-katex [equation]="'\\\\Upsilon_M = 1,25'"></ng-katex>
      </p>
    </ng-template>

  `
})
export class YmComponent {
  @Input() ym: number;
}
