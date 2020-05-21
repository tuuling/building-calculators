import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bending-strength',
  template: `
    <div class="form-group">
      <label>Normatiivne paindetugevus:</label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">𝑓<sub>m,k</sub> =</span></div>
        <input type="text" disabled="disabled" class="form-control" [value]="strength"/>
        <div class="input-group-append"><span class="input-group-text">N/mm<sup>2</sup></span></div>
      </div>
    </div>
  `
})
export class BendingStrengthComponent {
  @Input() strength: number;
}
