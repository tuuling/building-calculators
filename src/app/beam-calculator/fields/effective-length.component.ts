import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-effective-length',
  template: `
    <div class="form-group">
      <label>Tala effektiivpikkus: <span class="badge badge-secondary align-text-bottom c-pointer"
                                         [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
                    <ng-katex [equation]="'l_{ef}'"></ng-katex> =</span>
        </div>
        <input type="number" disabled="disabled" class="form-control" [value]="length"/>
        <div class="input-group-append"><span class="input-group-text">mm</span></div>
      </div>
    </div>
    <ng-template #helpText>
      <ng-katex [equation]="'l_{ef} = 0,95l'"></ng-katex>
    </ng-template>
  `
})
export class EffectiveLengthComponent {
  @Input() length: number;
}
