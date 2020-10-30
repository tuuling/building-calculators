import { Component, Input, OnChanges } from '@angular/core';
import { WallLayer } from '../../types/WallLayer';
import memoizeOne from 'memoize-one';
import { List } from 'immutable';
import { scaleLinear } from 'd3-scale';
import { sum as d3sum } from 'd3-array';

type SectionLayer = WallLayer & {
  depth: number;
};

@Component({
  selector: 'cross-section',
  templateUrl: './cross-section.component.html',
  styleUrls: ['./cross-section.component.scss']
})
export class CrossSectionComponent implements OnChanges {
  @Input('layers') layersInput: List<WallLayer> = List<WallLayer>([]);

  margin = {top: 20, right: 20, bottom: 30, left: 30};
  temp = {min: -15, max: 20};
  height = 400;
  width = 400;
  scaleX = scaleLinear()
    .range([this.margin.left, this.margin.left + this.width]);
  scaleY = scaleLinear()
    .domain([this.temp.max, this.temp.min])
    .range([this.margin.top + 50, this.margin.top + this.height - 50]);

  ngOnChanges() {
    this.scaleX.domain([0, d3sum(this.layersInput, d => d.thickness)]);
  }

  _layers = memoizeOne((layers: List<WallLayer>): List<SectionLayer> => {
    let depth = 0;

    return layers.reverse().map(layer => {
      const ret = {...layer, depth};
      depth += layer.thickness;
      return ret;
    });
  });

  get layers() {
    return this._layers(this.layersInput);
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
