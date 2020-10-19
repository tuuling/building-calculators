import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-connection-type',
  template: `
    <div class="form-group">
      <label for="connection-type-input">Posti kinnitusviis: <span
        class="badge badge-secondary align-text-bottom c-pointer">?</span></label>
      <select [(ngModel)]="relLength" (ngModelChange)="relLengthChange.emit($event)" class="form-control form-control-sm" id="connection-type-input">
        <option [ngValue]="2">Konsoolpost</option>
        <option [ngValue]="1">Liigendkinnitustega post</option>
        <option [ngValue]="0.707">Ühes otsas jäiga, teises liigendkinnitusega post</option>
      </select>
    </div>

  `
})
export class PostConnectionTypeComponent {
  @Input() relLength: number;
  @Output() relLengthChange = new EventEmitter<number>();
}
