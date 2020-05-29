import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lambda-rel-m',
  template: `
    <div class="form-group">
      <label>Kiivesaledus: <span class="badge badge-secondary align-text-bottom c-pointer"
                                 [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
                    <ng-katex [equation]="'\\\\lambda_{rel,m}'"></ng-katex> =</span>
        </div>
        <input type="number" disabled="disabled" class="form-control" [value]="lambda"/>
      </div>
    </div>
    <ng-template #helpText>
      <ng-katex [equation]="'\\\\lambda_{rel,m} = \\\\sqrt{\\\\dfrac{f_{m,k}}{\\\\sigma_{m,crit}}}'"></ng-katex>
    </ng-template>
  `
})
export class LambdaRelMComponent {
  @Input() lambda: number;
}
