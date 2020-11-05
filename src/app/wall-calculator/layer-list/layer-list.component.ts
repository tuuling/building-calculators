import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WallLayer } from '../../types/WallLayer';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { List } from 'immutable';
import { Surface } from '../../types/Surface';

@Component({
  selector: 'layer-list',
  templateUrl: './layer-list.component.html',
  styleUrls: ['./layer-list.component.scss']
})
export class LayerListComponent {
  @Input() layers: List<WallLayer>;
  @Output() layersChange = new EventEmitter<List<WallLayer>>();

  @Input() surfaces: Surface[];
  @Input() temps: { external; internal };

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
    this.layers = this.layers.push(new WallLayer({ name: '', thickness: 1, lambda: 1 }));
    this.layersChange.emit(this.layers);
  }

  // clone so that everyone knows it was changed
  onLayerChange() {
    this.layers = List([...this.layers]);
    this.layersChange.emit(this.layers);
  }
}
