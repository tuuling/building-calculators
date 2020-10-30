import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WallLayer } from '../../types/WallLayer';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { List } from 'immutable';

@Component({
  selector: 'layer-list',
  templateUrl: './layer-list.component.html',
  styleUrls: ['./layer-list.component.scss']
})
export class LayerListComponent implements OnInit {
  @Input() layers: List<WallLayer>;
  @Output() layersChange = new EventEmitter<List<WallLayer>>();

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    this.layers = this.arraymove(this.layers, event.previousIndex, event.currentIndex);
    this.layersChange.emit(this.layers);
  }

  private arraymove<T>(arr: List<T>, oldindex, newindex): List<T> {
    if (newindex >= arr.size) {
      return arr;
    }
    const value = arr.get(oldindex);
    return arr.delete(oldindex).insert(newindex, value);
  }

  addLayer(): void {
    this.layers = this.layers.push({name: '', thickness: 0, lambda: null});
    this.layersChange.emit(this.layers);
  }

  getRvalue(layer: WallLayer) {
    return Math.round(layer.thickness / 1000 * layer.lambda * 100) / 100;
  }
}
