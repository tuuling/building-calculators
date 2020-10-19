import { Component, OnInit } from '@angular/core';
import { Woodgrade, woodgrades } from '../../types/Woodgrade';

@Component({
  selector: 'app-post-calculator',
  templateUrl: './post-calculator.component.html',
  styleUrls: ['./post-calculator.component.scss']
})
export class PostCalculatorComponent implements OnInit {

  woodgradeKey = 'c24';

  beam = {
    breath: 100, //b
    height: 100, //h
    length: 2500 //L
  }

  loads = {
    dead: 0.7, //G
    long: 0.2, //Q1
    mid: 0.3, //Q2
    short: 0.1 //Q3
  }

  kmodMap = new Map([
    [1, [0.6, 0.7, 0.8, 0.9]],
    [2, [0.6, 0.7, 0.8, 0.9]],
    [3, [0.5, 0.55, 0.65, 0.7]]
  ])

  usageClass: number = 1;
  relLength: number = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  get woodgrade(): Woodgrade {
    return woodgrades.get(this.woodgradeKey);
  }

  get kmod() {
    let uClass = this.kmodMap.get(this.usageClass);
    const totalLoad = this.loads.dead + this.loads.long + this.loads.mid + this.loads.short;

    return (this.loads.dead / totalLoad) * uClass[0] +
      (this.loads.long / totalLoad) * uClass[1] +
      (this.loads.mid / totalLoad) * uClass[2] +
      (this.loads.short / totalLoad) * uClass[3];

  }

  get YM() {
    const types = {
      'sawn': 1.3,
      'gluelam': 1.25
    }

    return types[this.woodgrade.type];
  }

  get strengthD() {
    return (this.woodgrade.f.c.paral * this.kmod) / this.YM;
  }

  get totalLoad() {
    return this.loads.long * 1.5
      + this.loads.mid * 1.5
      + this.loads.short * 1.5
      + this.loads.dead * 1.2;
  }

  get compressionTension() {
    return (this.totalLoad * 1000) / this.netArea;
  }

  get compressionResistance() {
    return {
      z: this.compressionTension / (this.flexFactor.z * this.strengthD),
      y: this.compressionTension / (this.flexFactor.y * this.strengthD),
    }
  }

  get betaC() {
    const types = {
      'sawn': 0.2,
      'gluelam': 0.1
    }

    return types[this.woodgrade.type];
  }

  get radiusOfGyration() {
    return {
      z: this.beam.height / Math.sqrt(12),
      y: this.beam.breath / Math.sqrt(12)
    }
  }

  get netArea() {
    return this.beam.breath * this.beam.height;
  }

  get flexLength() {
    return {
      z: this.beam.length * this.relLength,
      y: this.beam.length * this.relLength
    }
  }

  get relSlimness() {
    const slimness = {
      z: (this.flexLength.z/this.radiusOfGyration.z),
      y: (this.flexLength.y/this.radiusOfGyration.y)
    }

    return {
      z: (slimness.z/Math.PI)*Math.sqrt(this.woodgrade.f.c.paral/this.woodgrade.E.fivePerc),
      y: (slimness.y/Math.PI)*Math.sqrt(this.woodgrade.f.c.paral/this.woodgrade.E.fivePerc)
    }
  }
// Kc
  get flexFactor() {
    const kz = 0.5 * (1 + this.betaC * (this.relSlimness.z - 0.3) + Math.pow(this.relSlimness.z, 2));
    const ky = 0.5 * (1 + this.betaC * (this.relSlimness.y - 0.3) + Math.pow(this.relSlimness.y, 2));

    return {
      z: 1 / (kz + Math.sqrt(Math.pow(kz,2) - Math.pow(this.relSlimness.z,2))),
      y: 1 / (ky + Math.sqrt(Math.pow(ky,2) - Math.pow(this.relSlimness.y,2))),
    }
  }
}
