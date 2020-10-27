import { Component, OnInit } from '@angular/core';
import { WallLayer } from '../../types/WallLayer';

@Component({
  selector: 'app-wall-calculator',
  templateUrl: './wall-calculator.component.html',
  styleUrls: ['./wall-calculator.component.scss']
})
export class WallCalculatorComponent implements OnInit {

  layers: WallLayer[] = [
    {name: 'name 1', thickness: 120, lambda: 1},
    {name: 'name 2', thickness: 200, lambda: 2},
    {name: 'name 3', thickness: 50, lambda: 3}
  ];

  currentDrop: number = null;

  constructor() { }

  ngOnInit(): void {
  }



}
