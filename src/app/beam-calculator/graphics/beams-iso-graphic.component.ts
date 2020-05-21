import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-beams-iso-graphic',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"
         [attr.viewBox]="'0 0 ' + (isoViewport.width + isoViewport.padding*2) +' '+ (isoViewport.height + isoViewport.padding*2)"
         [attr.width]="isoViewport.width + isoViewport.padding*2"
         [attr.height]="isoViewport.height + isoViewport.padding*2">

      <g [attr.transform]="'translate('+isoViewport.padding+' '+isoViewport.padding+')'">
        <path [attr.d]="isoD"
              style="fill:#f1d99e;stroke:#b3b3b3;stroke-width:1;" stroke-linejoin="round"
              id="isoBeam"></path>
        <use href="#isoBeam" [attr.x]="cloneCord(1).x" [attr.y]="cloneCord(1).y"></use>
        <use href="#isoBeam" [attr.x]="cloneCord(2).x" [attr.y]="cloneCord(2).y"></use>

        <!--      spacing dimension    -->
        <g stroke="#8e8e8e" color="#8e8e8e">
          <line
            [attr.x1]="origin.x + right(isoScale.breath / 2)"
            [attr.y1]="origin.y + up(isoScale.breath / 2)"
            [attr.x2]="origin.x + right(isoScale.breath / 2)"
            [attr.y2]="origin.y + up(isoScale.breath / 2) + 10"></line>
          <line
            [attr.x1]="origin.x + right(isoScale.spacing) + right(isoScale.breath / 2)"
            [attr.y1]="origin.y + up(isoScale.spacing) + up(isoScale.breath / 2)"
            [attr.x2]="origin.x + right(isoScale.spacing) + right(isoScale.breath / 2)"
            [attr.y2]="origin.y + up(isoScale.spacing) + up(isoScale.breath / 2) + 10"></line>

          <line
            [attr.x1]="origin.x + right(isoScale.breath / 2)"
            [attr.y1]="origin.y + up(isoScale.breath / 2) + 5"
            [attr.x2]="origin.x + right(isoScale.spacing) + right(isoScale.breath / 2)"
            [attr.y2]="origin.y + up(isoScale.spacing) + up(isoScale.breath / 2) + 5"></line>
          <text [attr.x]="origin.x + right(isoScale.spacing / 2)"
                [attr.y]="origin.y + up(isoScale.spacing / 2) + 5"
                dominant-baseline="text-before-edge"
                text-anchor="start"
                stroke="none">
            S = {{spacing}}
          </text>
        </g>

        <g stroke="#8e8e8e">
          <line
            [attr.x1]="origin.x"
            [attr.y1]="origin.y"
            [attr.x2]="origin.x + left(12)"
            [attr.y2]="origin.y + down(12) "></line>

          <line
            [attr.x1]="origin.x + left(isoScale.length)"
            [attr.y1]="origin.y + up(isoScale.length)"
            [attr.x2]="origin.x + left(isoScale.length) + left(12)"
            [attr.y2]="origin.y + up(isoScale.length) + down(12)"></line>

          <line
            [attr.x1]="origin.x + left(6)"
            [attr.y1]="origin.y + down(6)"
            [attr.x2]="origin.x + left(isoScale.length) + left(6)"
            [attr.y2]="origin.y + up(isoScale.length) + down(6)"></line>

          <text [attr.x]="origin.x + left(isoScale.length/2) + left(6)"
                [attr.y]="origin.y + up(isoScale.length/2) + down(6)"
                dominant-baseline="text-before-edge"
                text-anchor="end"
                stroke="none">
            L = {{length}}
          </text>
        </g>
      </g>
    </svg>
  `
})
export class BeamsIsoGraphicComponent {
  @Input() height: number;
  @Input() breath: number;
  @Input() length: number;
  @Input() spacing: number;

  isoViewport = {
    height: 280,
    width: 480,
    padding: 20
  }


  get isoScale() {
    const d30 = Math.PI / 6;
    const scale = this.isoViewport.width / (
      Math.cos(d30) * this.length
      + Math.cos(d30) * (this.spacing * 2 + this.breath * 3));
    return {
      breath: Math.floor(this.breath * scale),
      height: Math.floor(this.height * scale),
      length: Math.floor(this.length * scale),
      spacing: Math.floor(this.spacing * scale)
    }
  }

  get ratio() {
    return 1 / ((this.isoScale.length + this.isoScale.spacing * 2 + this.isoScale.breath * 3) / this.isoScale.length);
  }

  cloneCord(x) {
    const s = this.isoScale;
    const up = this.up;
    const right = this.right;

    return {
      x: right(s.spacing) * x,
      y: up(s.spacing) * x
    }
  }

  get origin() {
    return {
      x: this.isoViewport.width * this.ratio,
      y: this.isoViewport.height
    }
  }

  up = y => -Math.floor(Math.sin(Math.PI / 6) * y);
  down = y => Math.floor(Math.sin(Math.PI / 6) * y);
  left = x => -Math.floor(Math.cos(Math.PI / 6) * x);
  right = x => Math.floor(Math.cos(Math.PI / 6) * x);

  get isoD() {
    const s = this.isoScale;
    const up = this.up;
    const down = this.down;
    const left = this.left;
    const right = this.right;

    const origin = `${this.origin.x},${this.origin.y}`;

    return `
    M ${origin}
    l ${left(s.length)},${up(s.length)}
    v -${s.height}
    l ${right(s.breath)},${up(s.breath)}
    l ${right(s.length)},${down(s.length)}
    v ${s.height}
    l ${left(s.breath)},${down(s.breath)}
    v -${s.height}
    l ${right(s.breath)},${up(s.breath)}
    M ${origin}
    m 0,-${s.height}
    l ${left(s.length)},${up(s.length)}
    `;
  }
}
