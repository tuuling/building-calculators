import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dist-load',
  template: `
    <div class="form-group">
      <label for="distload-input">Joon koormus: <span
        class="badge badge-secondary align-text-bottom c-pointer" [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">q =</span></div>
        <input [value]="load" disabled="disabled" type="number" class="form-control" id="distload-input"/>
        <div class="input-group-append"><span class="input-group-text">N/mm</span></div>
      </div>
    </div>
    <ng-template #helpText>
      <ng-katex [equation]="'q = K⋅S'"></ng-katex>
    </ng-template>

  `
})
export class DistLoadComponent {
  @Input() load: number;
}
