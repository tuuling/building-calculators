import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compression-tension',
  template: `
    <div class="form-group">
      <label for="compressiontension-input">Survepinge: <span
        class="badge badge-secondary align-text-bottom c-pointer"
        [ngbPopover]="helpText">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend">
                    <span class="input-group-text">
                      <ng-katex [equation]="'\\\\sigma_{c,0,d}'"></ng-katex>
                    </span>
        </div>
        <input [value]="tension" disabled="disabled" type="number" class="form-control"
               id="compressiontension-input"/>
        <div class="input-group-append"><span class="input-group-text">N/mm<sup>2</sup></span></div>
      </div>
    </div>
    <ng-template #helpText>
      <ng-katex [equation]="'\\\\sigma_{c,0,d} = \\\\dfrac{F_{c,d}}{A_h}'"></ng-katex>
    </ng-template>

  `
})
export class CompressionTensionComponent {
  @Input() tension: number;
}
