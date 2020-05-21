import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kmod',
  template: `
    <div class="form-group">
      <label for="kmod-input">Materjali modif. tegur: <span
        class="badge badge-secondary align-text-bottom c-pointer" [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">K<sub>mod</sub> =</span></div>
        <input [value]="kmod" disabled="disabled" type="number" class="form-control" id="kmod-input"/>
      </div>
    </div>
    <ng-template #helpText>
      <p>
        <ng-katex [equation]="'K_{mod}'"></ng-katex>
        - Modifitseerimis tegur arvestamaks koormuse kestust ja niiskussialduse mõju puidu tugevusele.
      </p>
      <p>Väärtus leitakse tabelist. Erineva kestusega koormuste puhul leitakse aritmeetiline kaalutud keskmine,
        kus väärtus on
        <ng-katex [equation]="'K_{mod}'"></ng-katex>
        ja kaaluks koormus.
      </p>
    </ng-template>
  `
})
export class KmodComponent {
  @Input() kmod: number;
}
