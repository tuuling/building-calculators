import { Component, HostBinding, Input, OnChanges } from '@angular/core';
import { battinsul } from './battinsul';
import { rigidinsul } from './rigidinsul';
import { ansi31 } from './ansi31';
import { ansi32 } from './ansi32';
import { BaseHatch } from './baseHatch';


const hatches: { [propName: string]: BaseHatch } = {
  battinsul,
  rigidinsul,
  ansi31,
  ansi32
};

@Component({
  selector: '[hatch]',
  template: `
    <svg:path xmlns:svg="http://www.w3.org/2000/svg"
              fill="none" stroke="black"
              [attr.stroke-width]="strokeWidth"
              [attr.d]="d"/>
  `
})
export class HatchComponent implements OnChanges {
  @Input() hatch: string;
  @Input('height') sectionHeight: number;
  @Input('width') sectionWidth: number;
  @Input('id') layerId: number;

  @HostBinding('attr.width') width = '';
  @HostBinding('attr.height') height = '';
  @HostBinding('attr.id') id = '';
  @HostBinding('attr.viewBox') viewbox = '';

  constructor() {
  }

  ngOnChanges() {
    this.id = `pattern-${this.layerId}`;
    this.viewbox = `0,0,${hatches[this.hatch].width},${hatches[this.hatch].height}`;

    this.height = hatches[this.hatch].getPatternHeight(this.sectionHeight, this.sectionWidth);
    this.width = hatches[this.hatch].getPatternWidth(this.sectionHeight, this.sectionWidth);
  }

  get strokeWidth() {
    return hatches[this.hatch].getStrokeWidth(this.sectionHeight, this.sectionWidth);
  }

  get d() {
    return hatches[this.hatch].d;
  }

}
