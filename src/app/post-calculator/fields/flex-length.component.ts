import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flex-length',
  template: `
    <div class="form-group">
      <label>Nõtkepikkused: <span class="badge badge-secondary align-text-bottom c-pointer"
                                  [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
                    <ng-katex [equation]="'l_{\\\\text{ef},z}'"></ng-katex> =
                  </span></div>
        <input type="text" disabled="disabled" class="form-control" [value]="flexLength.z"/>
        <div class="input-group-append"><span class="input-group-text">mm</span></div>
      </div>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
                    <ng-katex [equation]="'l_{\\\\text{ef},y}'"></ng-katex> =
                  </span></div>
        <input type="text" disabled="disabled" class="form-control" [value]="flexLength.y"/>
        <div class="input-group-append"><span class="input-group-text">mm</span></div>
      </div>
    </div>
    <ng-template #helpText>
      <div class="my-3">
          Konsoolposti puhul:
          <ng-katex [equation]="'l_{\\\\text{ef}} = 2l'"></ng-katex>
      </div>
      <div class="my-3">
          Liigendkinnitustega posti puhul:
          <ng-katex [equation]="'l_{\\\\text{ef}} = l'"></ng-katex>
      </div>
      <div class="my-3">
          Ühes otsas jäiga, teises liigendkinnitusega posti puhul:
          <ng-katex [equation]="'l_{\\\\text{ef}} = 0,707l'"></ng-katex>
      </div>
    </ng-template>
  `
})
export class FlexLengthComponent {
  @Input() flexLength: { z: number, y: number };
}
