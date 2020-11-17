import { Component, HostBinding, Input, OnChanges } from '@angular/core';
import { Battinsul } from './battinsul';
import { Rigidinsul } from './rigidinsul';

interface hatchType {
  width: number;
  height: number;
  getPatternHeight: (sectionHeight: number, sectionWidth: number) => string;
}

const hatches: {[propName: string]: hatchType} = {
  battinsul: Battinsul,
  rigidinsul: Rigidinsul
};

@Component({
  selector: '[hatch]',
  template: `
    <svg:g xmlns:svg="http://www.w3.org/2000/svg" [ngSwitch]="hatch">
      <path *ngSwitchCase="'battinsul'"
            fill="none" stroke="black"
            [attr.stroke-width]="strokeWidth"
            d="M 0,0
             a 20, 20 0,0,0 20 20
             l 60,-20
             a 20, 20 0,0,1 0,40
             l -60, -20
             a 20, 20 0,0,0 -20,20"/>
      <path *ngSwitchCase="'rigidinsul'"
            fill="none" stroke="black"
            [attr.stroke-width]="strokeWidth"
            d="M 50,0 L 0,25 L 50,50"/>
    </svg:g>
  `
})
export class HatchComponent implements OnChanges {
  @Input() hatch: string;
  @Input('height') sectionHeight: number;
  @Input('width') sectionWidth: number;
  @Input('id') layerId: number;

  @HostBinding('attr.width') width = '100%';
  @HostBinding('attr.height') height = '';
  @HostBinding('attr.id') id = '';
  @HostBinding('attr.viewBox') viewbox = '';

  constructor() {
  }

  ngOnChanges() {
    this.id = `pattern-${this.layerId}`;
    this.viewbox = `0,0,${hatches[this.hatch].width},${hatches[this.hatch].height}`;

    this.height = hatches[this.hatch].getPatternHeight(this.sectionHeight, this.sectionWidth);
  }

  get strokeWidth() {
    return hatches[this.hatch].width / this.sectionWidth;
  }

}
