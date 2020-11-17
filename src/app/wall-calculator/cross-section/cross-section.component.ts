import { AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, ViewChild } from '@angular/core';

import { WallLayer } from '../../types/WallLayer';
import { Surface } from '../../types/Surface';

import { List } from 'immutable';

import { scaleLinear } from 'd3-scale';
import { axisRight } from 'd3-axis';
import { sum as d3sum, bisector } from 'd3-array';
import { select } from 'd3-selection';
import 'd3-transition';


type SectionLayer = WallLayer & {
  depth: number;
};

@Component({
  selector: 'cross-section',
  templateUrl: './cross-section.component.html',
  styleUrls: ['./cross-section.component.scss']
})
export class CrossSectionComponent implements OnChanges, AfterViewInit {
  @Input('layers') layersInput: List<WallLayer> = List<WallLayer>([]);
  @Input('surfaces') surfacesInput: Surface[] = [];
  @Input() temps: { external; internal };

  @ViewChild('tempAxis') tempAxis: ElementRef;

  margin = { top: 20, right: 20, bottom: 30, left: 50 };
  height = 400;
  width = 400;
  scale = 0.7;

  pointer: {
    x: number;
    y: number;
    label: string;
  };

  scaleDepth = scaleLinear()
    .clamp(true);
  scaleTemp = scaleLinear()
    .range([this.margin.top + 50, this.margin.top + this.height - 50])
    .clamp(true);

  layers: List<WallLayer> = List<WallLayer>([]);
  surfaces: Surface[] = [];
  tempsPath = '';

  ngOnChanges() {
    this.scaleTemp.domain([this.temps.internal, this.temps.external].sort().reverse());

    this.layers = this.layersInput.reverse();
    this.surfaces = [...this.surfacesInput].reverse();

    const girth = d3sum(this.layersInput, d => d.thickness);

    this.scaleDepth
      .range([this.margin.left, this.margin.left + girth * this.scale])
      .domain([0, girth]);

    this.tempsPath = this.surfaces.reduce(
      (path, surface) => path + `L${this.scaleDepth(surface.depth)} ${this.scaleTemp(surface.temp)}`,
      `M${this.scaleDepth(0) - 25} ${this.scaleTemp(this.temps.external)} h 20`
    ).concat(`L${this.scaleDepth(girth) + 5} ${this.scaleTemp(this.temps.internal)} h20`);

  }

  ngAfterViewInit() {
    const axis = axisRight<number>(this.scaleTemp).tickFormat(d => `${d}°C`);

    axis(select(this.tempAxis.nativeElement));
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    const xm = this.scaleDepth.invert(event.offsetX);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    const bisectSurface = bisector<Surface, number>(d => d.depth).center;
    const i = bisectSurface(this.surfaces, xm);

    this.pointer.x = this.scaleDepth(this.surfaces[i].depth);
    this.pointer.y = this.scaleTemp(this.surfaces[i].temp);
    this.pointer.label = this.surfaces[i].temp.toFixed(1);

  }

  @HostListener('mouseleave', ['$event'])
  onMouseleave() {
    this.pointer = null;
  }

  @HostListener('mouseenter', ['$event'])
  onMouseenter() {
    this.pointer = {x: 0, y: 0, label: ''};
  }

  trackingFunction(index: number, layer: SectionLayer) {
    return layer.name;
  }

  get dim() {
    return {
      height: this.margin.top + this.margin.bottom + this.height,
      width: this.margin.left + this.margin.right + this.width
    };
  }

  get viewBox() {
    return `0 0 ${this.dim.width} ${this.dim.height}`;
  }

}
