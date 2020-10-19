import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compression-strength',
  template: `
    <div class="form-group">
      <label>Normatiivne survetugevus pikikiudu:</label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">
          <ng-katex [equation]="'f_{c,0,k}'"></ng-katex>
          =</span></div>
        <input type="text" disabled="disabled" class="form-control" [value]="strength"/>
        <div class="input-group-append"><span class="input-group-text">N/mm<sup>2</sup></span></div>
      </div>
    </div>
  `
})
export class CompressionStrengthComponent {
  @Input() strength: number;
}
