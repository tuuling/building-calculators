import {Component, OnInit} from '@angular/core';
import {Woodgrade} from "./types/Woodgrade";
import {woodgrades} from "./types/Woodgrade";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  woodgrades = woodgrades;
  woodgrade: Woodgrade = woodgrades.get('c14');

  beam = {
    breath: 50, //b
    height: 100, //h
    length: 1200, //L
    spacing: 900 //S
  }

  loads = {
    dead: 0.7, //G
    long: 0.2, //Q1
    mid: 0.3, //Q2
    short: 0.1, //Q3
  }

  isoViewport = {
    height: 280,
    width: 480,
    padding: 20
  }

  usageClass: number = 1;

  kmodMap = new Map([
    [1, [0.6, 0.7, 0.8, 0.9]],
    [2, [0.6, 0.7, 0.8, 0.9]],
    [3, [0.5, 0.55, 0.65, 0.7]]
  ])


  ngOnInit() {
  }

  changeGrade(event) {
    this.woodgrade = this.woodgrades.get(event.target.value);
  }

  get elasticSectionModulus() {
    return this.beam.breath * Math.pow(this.beam.height, 2) / 6;
  }

  get beamScale() {
    let scale = 1

    if (this.beam.height > this.beam.breath) {
      scale = 200 / this.beam.height;
    } else {
      scale = 200 / this.beam.breath;
    }

    return {
      breath: Math.floor(this.beam.breath * scale),
      height: Math.floor(this.beam.height * scale)
    }
  }

  get isoScale() {
    const d30 = Math.PI / 6;
    const scale = this.isoViewport.width / (
      Math.cos(d30) * this.beam.length
      + Math.cos(d30) * (this.beam.spacing * 2 + this.beam.breath * 3));
    return {
      breath: Math.floor(this.beam.breath * scale),
      height: Math.floor(this.beam.height * scale),
      length: Math.floor(this.beam.length * scale),
      spacing: Math.floor(this.beam.spacing * scale),
    }
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

  get strengthD() {
    return (this.woodgrade.bendingStrength * this.kmod) / this.woodgrade.YM;
  }

  get kmod() {
    let uClass = this.kmodMap.get(this.usageClass);
    console.log(this.usageClass);
    const totalLoad = this.loads.dead + this.loads.long + this.loads.mid + this.loads.short;

    return (this.loads.dead / totalLoad) * uClass[0] +
      (this.loads.long / totalLoad) * uClass[1] +
      (this.loads.mid / totalLoad) * uClass[2] +
      (this.loads.short / totalLoad) * uClass[3];

  }

  cloneCord(x) {
    const s = this.isoScale;
    const up = this.up;
    const right = this.right;

    return {
      x: right(s.spacing) * x,
      y: up(s.spacing) * x
    }
  }

  get ratio() {
    return 1 / ((this.isoScale.length + this.isoScale.spacing * 2 + this.isoScale.breath * 3) / this.isoScale.length);
  }

  get origin() {
    return {
      x: this.isoViewport.width * this.ratio,
      y: this.isoViewport.height
    }
  }

  up = y => -Math.floor(Math.sin(Math.PI / 6) * y);
  down = y => Math.floor(Math.sin(Math.PI / 6) * y);
  left = x => -Math.floor(Math.cos(Math.PI / 6) * x);
  right = x => Math.floor(Math.cos(Math.PI / 6) * x);

  get isoD() {
    const s = this.isoScale;
    const up = this.up;
    const down = this.down;
    const left = this.left;
    const right = this.right;

    const origin = `${this.origin.x},${this.origin.y}`;

    return `
    M ${origin}
    l ${left(s.length)},${up(s.length)}
    v -${s.height}
    l ${right(s.breath)},${up(s.breath)}
    l ${right(s.length)},${down(s.length)}
    v ${s.height}
    l ${left(s.breath)},${down(s.breath)}
    v -${s.height}
    l ${right(s.breath)},${up(s.breath)}
    M ${origin}
    m 0,-${s.height}
    l ${left(s.length)},${up(s.length)}
    `;
  }
}
