import { Component } from '@angular/core';

import memoizeOne from 'memoize-one';
import { v4 } from 'uuid';
import { List } from 'immutable';
import { sum as d3sum } from 'd3-array';

import { WallLayer } from '../../types/WallLayer';
import { Surface } from '../../types/Surface';


@Component({
  selector: 'app-wall-calculator',
  templateUrl: './wall-calculator.component.html',
  styleUrls: ['./wall-calculator.component.scss']
})
export class WallCalculatorComponent {

  layers = List<WallLayer>([
    new WallLayer({ name: 'Kergbetoon', thickness: 150, lambda: 0.24, UUID: v4(), hatch: 'battinsul' }),
    new WallLayer({ name: 'Polüuretaan', thickness: 80, lambda: 0.03, UUID: v4(), hatch: 'rigidinsul' }),
    new WallLayer({ name: 'Kergbetoon', thickness: 300, lambda: 0.24, UUID: v4(), hatch: 'arconc' })
  ]);

  temp = { external: -15, internal: 20 };

  _surfaces = memoizeOne((layers: List<WallLayer>, temp: { external; internal }) => {
    const girth = d3sum(this.layers, d => d.thickness);
    const totalR = d3sum(this.layers, d => d.Rvalue) + 0.13 + 0.04;
    const surfaces: Surface[] = [];
    let depth = girth;
    let depthR = 0.13;

    surfaces.push({ depth, temp: this.getSurfaceTemp(temp, depthR, totalR) });

    layers.forEach(layer => {
      depth -= layer.thickness;
      depthR += layer.Rvalue;

      surfaces.push({ depth, temp: this.getSurfaceTemp(temp, depthR, totalR) });
    });

    return surfaces;
  });

  get surfaces() {
    return this._surfaces(this.layers, this.temp);
  }

  getSurfaceTemp(temps: { external; internal }, prevR, totalR) {
    const deltaTemp = temps.internal - temps.external;
    return temps.internal - deltaTemp * (prevR / totalR);
  }

  get RTotal() {
    return this.layers.reduce((Rtotal, layer) => Rtotal + layer.Rvalue, 0);
  }

  get UValue() {
    return 1 / this.RTotal;
  }

}
