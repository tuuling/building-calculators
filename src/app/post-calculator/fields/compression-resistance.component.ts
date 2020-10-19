import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compression-resistance',
  template: `
    <div class="form-group">
      <label>Vastupidavus survele: <span class="badge badge-secondary align-text-bottom c-pointer"
                                          [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><ng-katex [equation]="'\\\\sigma_{c,0,d}/k_{c,z}⋅f_{c,0,d}'"></ng-katex></span>
        </div>
        <input type="text" class="form-control" [value]="resistance.z">
        <div class="input-group-append">
          <span class="input-group-text bg-success text-white" *ngIf="resistance.z < 1">Tagatud</span>
          <span class="input-group-text bg-danger text-white" *ngIf="resistance.z >= 1">Pole tagatud</span>

        </div>
      </div>
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><ng-katex [equation]="'\\\\sigma_{c,0,d}/k_{c,y}⋅f_{c,0,d}'"></ng-katex></span>
        </div>
        <input type="text" class="form-control" [value]="resistance.y">
        <div class="input-group-append">
          <span class="input-group-text bg-success text-white" *ngIf="resistance.y < 1">Tagatud</span>
          <span class="input-group-text bg-danger text-white" *ngIf="resistance.y >= 1">Pole tagatud</span>

        </div>
      </div>
    </div>
    <ng-template #helpText>

    </ng-template>


  `
})
export class CompressionResistanceComponent {
  @Input() resistance: { z: number, y: number };
}
