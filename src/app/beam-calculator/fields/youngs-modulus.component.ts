import { Component, Input } from '@angular/core';
import { Woodgrade } from '../../types/Woodgrade';

@Component({
  selector: 'app-youngs-modulus',
  template: `
    <div class="form-group">
      <!-- Young's modulus -->
      <label>Elastusmoodul:</label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
          <ng-katex [equation]="'E_{0,mean}'"></ng-katex> =
        </span></div>
        <input type="text" disabled="disabled" class="form-control" [value]="E.mean"/>
        <div class="input-group-append"><span class="input-group-text">Mpa</span></div>
      </div>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
          <ng-katex [equation]="'E_{0,05}'"></ng-katex> =
        </span></div>
        <input type="text" disabled="disabled" class="form-control" [value]="E.fivePerc"/>
        <div class="input-group-append"><span class="input-group-text">Mpa</span></div>
      </div>
    </div>
  `
})
export class YoungsModulusComponent {
  @Input() E: Woodgrade['E'];
}
