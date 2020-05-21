import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cross-section-graphic',
  template: `
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300px" height="300px">
      <g transform="translate(50 50)">
        <rect x="0" y="0" [attr.width]="beamScale.breath" [attr.height]="beamScale.height"
              style="fill:#f1d99e;stroke:#b3b3b3;stroke-width:2;"/>
        <!-- breath dimensions -->
        <line [attr.x1]="0" [attr.y1]="beamScale.height + 5" [attr.x2]="0" [attr.y2]="beamScale.height + 25"
              stroke="black"/>
        <line [attr.x1]="beamScale.breath" [attr.y1]="beamScale.height + 5" [attr.x2]="beamScale.breath"
              [attr.y2]="beamScale.height + 25" stroke="black"/>
        <text [attr.x]="beamScale.breath / 2" [attr.y]="beamScale.height + 30"
              style="text-anchor: middle; dominant-baseline: hanging;">b = {{breath}} mm
        </text>
        <!-- z axis marker -->
        <line [attr.x1]="-20" [attr.y1]="beamScale.height / 2" [attr.x2]="beamScale.breath + 20"
              [attr.y2]="beamScale.height / 2" stroke="gray" stroke-dasharray="4" stroke-width="1"></line>
        <text [attr.x]="-25" [attr.y]="beamScale.height /2" style="text-anchor: end; dominant-baseline: middle;"
              fill="gray"> z
        </text>


        <!-- height dimensions-->
        <line [attr.x1]="beamScale.breath + 5" [attr.y1]="0" [attr.x2]="beamScale.breath + 25" [attr.y2]="0"
              stroke="black"/>
        <line [attr.x1]="beamScale.breath + 5" [attr.y1]="beamScale.height" [attr.x2]="beamScale.breath + 25"
              [attr.y2]="beamScale.height" stroke="black"/>
        <text [attr.x]="beamScale.breath + 25" [attr.y]="beamScale.height / 2"
              style="text-anchor: start; dominant-baseline: middle;">h = {{height}} mm
        </text>
        <!-- y axis marker -->
        <line [attr.x1]="beamScale.breath / 2" [attr.y1]="-20" [attr.x2]="beamScale.breath / 2"
              [attr.y2]="beamScale.height + 20" stroke="gray" stroke-dasharray="4" stroke-width="1"></line>
        <text [attr.x]="beamScale.breath / 2" [attr.y]="-25"
              style="text-anchor: middle; dominant-baseline: text-bottom;" fill="gray"> y
        </text>

      </g>
    </svg>
  `
})
export class CrossSectionGraphicComponent {
  @Input() height: number;
  @Input() breath: number;

  get beamScale() {
    let scale: number;

    if (this.height > this.breath) {
      scale = 200 / this.height;
    } else {
      scale = 200 / this.breath;
    }

    return {
      breath: Math.floor(this.breath * scale),
      height: Math.floor(this.height * scale)
    }
  }
}
