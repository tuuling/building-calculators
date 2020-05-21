import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-load',
  template: `
    <div class="form-group">
      <label for="totalload-input">Kogu koormus:</label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">K =</span></div>
        <input [value]="load" disabled="disabled" type="number" class="form-control"
               id="totalload-input"/>
        <div class="input-group-append"><span class="input-group-text">kN/m<sup>2</sup></span></div>
      </div>
    </div>

  `
})
export class TotalLoadComponent {
  @Input() load: number;
}
