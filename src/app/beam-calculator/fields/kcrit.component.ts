import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kcrit',
  template: `
    <div class="form-group">
      <label>Kiivetegur: <span class="badge badge-secondary align-text-bottom c-pointer"
                               [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
                    <ng-katex [equation]="'k_{crit}'"></ng-katex> =</span>
        </div>
        <input type="number" disabled="disabled" class="form-control" [value]="kcrit"/>
      </div>
    </div>
    <ng-template #helpText>
      <ng-katex [equation]="katexString"></ng-katex>
    </ng-template>
  `
})
export class KcritComponent {
  @Input() kcrit: number;

  katexString = `
    k_{crit} =
    \\begin{cases}
      1 &\\text{kui } \\lambda_{rel,m} \\le 0,75 \\\\
      1,56 - 0,75 ⋅ \lambda_{rel,m} &\\text{kui } 0,75 < \\lambda_{rel,m} \\le 1,4 \\\\
      1/\\lambda_{rel,m}^2 &\\text{kui } 1,4 < \\lambda_{rel,m}
    \\end{cases}
    `;
}
