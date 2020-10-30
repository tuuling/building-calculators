import { Component, Input } from '@angular/core';
import { WallLayer } from '../../types/WallLayer';
import memoizeOne from 'memoize-one';
import { List } from 'immutable';

type SectionLayer = WallLayer & {
  depth: number;
};

@Component({
  selector: 'cross-section',
  templateUrl: './cross-section.component.html',
  styleUrls: ['./cross-section.component.scss']
})
export class CrossSectionComponent {
  @Input('layers') layersInput: List<WallLayer>;

  _layers = memoizeOne((layers: List<WallLayer>): List<SectionLayer> => {
    let depth = 0;

    return layers.map(layer => {
      const ret = { ...layer, depth };
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
}
