import { Component, Input, OnInit } from '@angular/core';
import { WallLayer } from '../../types/WallLayer';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'layer-list',
  templateUrl: './layer-list.component.html',
  styleUrls: ['./layer-list.component.scss']
})
export class LayerListComponent implements OnInit {
  @Input() layers: WallLayer[];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    this.array_move(this.layers, event.previousIndex, event.currentIndex);
  }

  private array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
      return false;
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  };

  addLayer(): void {
    this.layers.push({name: '', thickness: 0, lambda: null})
  }

  getRvalue(layer: WallLayer) {
    return Math.round(layer.thickness / 1000 * layer.lambda * 100) / 100;
  }
}
