import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-beta-c',
  template: `
    <div class="form-group">
      <label>Materjali tegur: <span class="badge badge-secondary align-text-bottom c-pointer"
                                    [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
                    <ng-katex [equation]="'β_{c}'"></ng-katex> =
                  </span></div>
        <input type="text" disabled="disabled" class="form-control" [value]="betaC"/>
      </div>
    </div>
    <ng-template #helpText>
      Saepuidu puhul <ng-katex [equation]="'β_{c} = 0,2'"></ng-katex> <br>
      Liimpuidu ja spoonliimpuidu puhul <ng-katex [equation]="'β_{c} = 0,1'"></ng-katex>
    </ng-template>
  `
})
export class BetaCComponent {
  @Input() betaC: number;
}
