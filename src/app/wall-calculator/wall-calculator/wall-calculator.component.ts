import { Component, OnInit } from '@angular/core';
import { WallLayer } from '../../types/WallLayer';
import { List } from 'immutable';

@Component({
  selector: 'app-wall-calculator',
  templateUrl: './wall-calculator.component.html',
  styleUrls: ['./wall-calculator.component.scss']
})
export class WallCalculatorComponent implements OnInit {

  layers = List<WallLayer>([
    { name: 'name 1', thickness: 120, lambda: 1 },
    { name: 'name 2', thickness: 200, lambda: 2 },
    { name: 'name 3', thickness: 50, lambda: 3 },
    { name: 'name 4', thickness: 150, lambda: 4 },
    { name: 'name 5', thickness: 250, lambda: 5 }
  ]);

  constructor() {
  }

  ngOnInit(): void {
  }


}
