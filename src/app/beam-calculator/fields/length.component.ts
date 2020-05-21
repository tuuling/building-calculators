import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-length',
  template: `
    <div class="form-group">
      <label for="beam-length-input">Tala pikkus:</label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text">L =</span></div>
        <input [(ngModel)]="length" (ngModelChange)="lengthChange.emit($event)" type="number" class="form-control" id="beam-length-input"
               name="length"/>
        <div class="input-group-append"><span class="input-group-text">mm</span></div>
      </div>
    </div>
  `
})
export class LengthComponent {
  @Input() length: number;
  @Output() lengthChange = new EventEmitter<number>();
}
