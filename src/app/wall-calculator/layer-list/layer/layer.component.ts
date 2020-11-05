import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WallLayer } from '../../../types/WallLayer';

@Component({
  selector: 'layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss']
})
export class LayerComponent {
  @Input() layer: WallLayer;
  @Output() layerChange = new EventEmitter<WallLayer>();

  @Input() index: number;
  @Input() temp: [number, number];

  edit = false;

}
