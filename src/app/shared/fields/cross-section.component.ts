import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cross-section',
  template: `
    <div class="form-group">
      <label for="beam-height-input">{{label}}</label>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text"><ng-katex [equation]="'b'"></ng-katex> =</span></div>
        <input [(ngModel)]="breath" (ngModelChange)="breathChange.emit($event)" type="number" class="form-control" id="beam-breath-input"
               name="breath"/>
        <div class="input-group-append"><span class="input-group-text">mm</span></div>
      </div>
      <div class="input-group input-group-sm">
        <div class="input-group-prepend"><span class="input-group-text"><ng-katex [equation]="'h'"></ng-katex> =</span></div>
        <input [(ngModel)]="height" (ngModelChange)="heightChange.emit($event)" type="number" class="form-control" id="beam-height-input"
               name="height"/>
        <div class="input-group-append"><span class="input-group-text">mm</span></div>
      </div>
    </div>
  `
})
export class CrossSectionComponent {
  @Input() label: string;

  @Input() height: number;
  @Output() heightChange = new EventEmitter<number>();

  @Input() breath: number;
  @Output() breathChange = new EventEmitter<number>();
}
