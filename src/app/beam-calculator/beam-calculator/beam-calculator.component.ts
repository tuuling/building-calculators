import { Component } from '@angular/core';
import { Woodgrade } from '../../types/Woodgrade';
import { woodgrades } from '../../types/Woodgrade';

@Component({
  selector: 'app-beam-calculator',
  templateUrl: './beam-calculator.component.html',
  styleUrls: ['./beam-calculator.component.scss']
})
export class BeamCalculatorComponent {

  woodgradeKey = 'c24';

  beam = {
    breath: 50, //b
    height: 150, //h
    length: 2000, //L
    spacing: 900 //S
  }

  loads = {
    dead: 0.7, //G
    long: 0.2, //Q1
    mid: 0.3, //Q2
    short: 0.1 //Q3
  }

  usageClass: number = 1;

  kmodMap = new Map([
    [1, [0.6, 0.7, 0.8, 0.9]],
    [2, [0.6, 0.7, 0.8, 0.9]],
    [3, [0.5, 0.55, 0.65, 0.7]]
  ])

  get woodgrade(): Woodgrade {
    return woodgrades.get(this.woodgradeKey);
  }

  get elasticSectionModulus() {
    return this.beam.breath * Math.pow(this.beam.height, 2) / 6;
  }

  get totalLoad() {
    return this.loads.long * 1.5
      + this.loads.mid * 1.5
      + this.loads.short * 1.5
      + this.loads.dead * 1.2;
  }

  get distLoad() {
    return (this.totalLoad / 1000) * this.beam.spacing;
  }

  get bendingMoment() {
    return this.distLoad * Math.pow(this.beam.length, 2) / 8;
  }

  get bendingTension() {
    return this.bendingMoment / this.elasticSectionModulus;
  }

  get effectiveLength() {
    return this.beam.length * 0.95;
  }

  get critBendingTension() {
    return (Math.pow(this.beam.breath * 0.78, 2)
      / (this.beam.height * this.effectiveLength)
    ) * this.woodgrade.E.fivePerc;
  }

  get relLambdaM() {
    return Math.sqrt(this.woodgrade.f.m / this.critBendingTension);
  }

  get strengthD() {
    return (this.woodgrade.f.m * this.kmod * this.kh) / this.YM;
  }

  get kcrit() {
    if (this.relLambdaM <= 0.75) {
        return 1;
    } else if (this.relLambdaM > 0.75 && this.relLambdaM <= 1.4) {
      return 1.56 - 0.75 * this.relLambdaM;
    } else {
      return 1 / Math.pow(this.relLambdaM, 2);
    }
  }

  get kmod() {
    let uClass = this.kmodMap.get(this.usageClass);
    const totalLoad = this.loads.dead + this.loads.long + this.loads.mid + this.loads.short;

    return (this.loads.dead / totalLoad) * uClass[0] +
      (this.loads.long / totalLoad) * uClass[1] +
      (this.loads.mid / totalLoad) * uClass[2] +
      (this.loads.short / totalLoad) * uClass[3];

  }

  get kh() {
    if (this.woodgrade.type === 'sawn' && this.beam.height < 150) {
      return Math.min(Math.pow(150 / this.beam.height, 0.2), 1.3);
    } else if (this.woodgrade.type === 'gluelam' && this.beam.height < 600) {
      return Math.min(Math.pow(600 / this.beam.height, 0.1), 1.1);
    } else {
      return 1;
    }
  }

  get YM() {
    const types = {
      'sawn': 1.3,
      'gluelam': 1.25
    }

    return types[this.woodgrade.type];
  }

  get bendingResistance() {
    return this.bendingTension / this.strengthD;
  }

  get bendingResistanceWKcrit() {
    return this.bendingTension / (this.strengthD * this.kcrit);
  }

}
