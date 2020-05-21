import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-spacing',
  template: `
    <div class="form-group">
      <label for="beam-spacing-input">Talade samm:</label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">S =</span></div>
        <input [(ngModel)]="spacing" (ngModelChange)="spacingChange.emit($event)" type="number" class="form-control" id="beam-spacing-input"
               name="spacing"/>
        <div class="input-group-append"><span class="input-group-text">mm</span></div>
      </div>
    </div>
  `
})
export class SpacingComponent {
  @Input() spacing: number;
  @Output() spacingChange = new EventEmitter<number>();
}
