import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kh',
  template: `
    <div class="form-group">
      <label for="YM-input">Materjali ristlõike tegur: <span
        class="badge badge-secondary align-text-bottom c-pointer" [ngbPopover]="helptext">?</span></label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
                    <ng-katex [equation]="'k_h'"></ng-katex> =</span>
        </div>
        <input [value]="kh" disabled="disabled" type="number" class="form-control" id="Kh-input"/>
      </div>
    </div>

    <ng-template #helptext>
        <div class="row flex-nowrap">
          <div class="col">
            <p><strong>Saepuidu</strong> ristlõikele, mille kõrgus paindel on väiksem kui 150mm,
            suurendatakse normtugevust <ng-katex [equation]="'f_{m,k}'"></ng-katex> teguriga&nbsp;<ng-katex [equation]="'k_h'"></ng-katex>:</p>
            <ng-katex [equation]="'k_h = min\\\\begin{cases} (150/h)^{0,2} \\\\\\\\ 1,3 \\\\end{cases}'"></ng-katex>
          </div>
          <div class="col">
            <p><strong>Liimpuidu</strong> ristlõikele, mille kõrgus paindel on väiksem kui 600mm, suurendatakse normtugevust
              <ng-katex [equation]="'f_{m,k}'"></ng-katex> teguriga&nbsp;<ng-katex [equation]="'k_h'"></ng-katex>:
            </p>
            <ng-katex [equation]="'k_h = min\\\\begin{cases} (600/h)^{0,1} \\\\\\\\ 1,1 \\\\end{cases}'"></ng-katex>
          </div>
        </div>
    </ng-template>

  `
})
export class KhComponent {
  @Input() kh: number;
}
