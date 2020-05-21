import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-youngs-modulus',
  template: `
    <div class="form-group">
      <!-- Young's modulus -->
      <label>Elastusmoodul:</label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">E =</span></div>
        <input type="text" disabled="disabled" class="form-control" [value]="modulus"/>
        <div class="input-group-append"><span class="input-group-text">Mpa</span></div>
      </div>
    </div>
  `
})
export class YoungsModulusComponent {
  @Input() modulus: number;
}
