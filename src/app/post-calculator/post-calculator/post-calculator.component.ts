import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-calculator',
  templateUrl: './post-calculator.component.html',
  styleUrls: ['./post-calculator.component.scss']
})
export class PostCalculatorComponent implements OnInit {

  woodgradeKey = 'c24';

  beam = {
    breath: 50, //b
    height: 150, //h
    length: 2000 //L
  }

  usageClass: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
