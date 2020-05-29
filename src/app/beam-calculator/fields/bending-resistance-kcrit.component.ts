import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bending-resistance-kcrit',
  template: `
    <div class="form-group">
      <label>Vastupidavus paindele koos kiivega: <span
        class="badge badge-secondary align-text-bottom c-pointer" [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><ng-katex [equation]="'\\\\sigma_{m,z,d}/k_{crit}⋅f_{m,d}'"></ng-katex></span>
        </div>
        <input type="text" class="form-control" [value]="resistance">
        <div class="input-group-append">
          <span class="input-group-text bg-success text-white" *ngIf="resistance < 1">Tagatud</span>
          <span class="input-group-text bg-danger text-white" *ngIf="resistance >= 1">Pole tagatud</span>
        </div>
      </div>
    </div>
    <ng-template #helpText>
      Tala puhul millel puuduvad horisontaalsidemed tuleb arvestada ka kiivetegurit
      <ng-katex [equation]="'k_{crit}'"></ng-katex> : <br>
      <ng-katex [equation]="'\\\\dfrac{\\\\sigma_{m,z,d}}{k_{crit}⋅f_{m,d}} < 1'"></ng-katex><br>
    </ng-template>


  `
})
export class BendingResistanceKcritComponent {
  @Input() resistance: number;
}
