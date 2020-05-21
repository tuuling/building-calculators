import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bending-resistance',
  template: `
    <div class="form-group">
      <label>Vastupidavus paindele: <span class="badge badge-secondary align-text-bottom c-pointer"
                                          [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><ng-katex [equation]="'\\\\sigma_{m,z,d}/f_{m,d}'"></ng-katex></span>
        </div>
        <input type="text" class="form-control" [value]="resistance">
        <div class="input-group-append">
          <span class="input-group-text bg-success text-white" *ngIf="resistance < 1">Tagatud</span>
          <span class="input-group-text bg-danger text-white" *ngIf="resistance >= 1">Pole tagatud</span>

        </div>
      </div>
    </div>
    <ng-template #helpText>
      Paindetugevus peab olema suurem kui paindepinge Z teljel: <br><br>
      <ng-katex [equation]="'\\\\dfrac{\\\\sigma_{m,z,d}}{f_{m,d}} < 1'"></ng-katex>
    </ng-template>


  `
})
export class BendingResistanceComponent {
  @Input() resistance: number;
}
