import { Injectable } from '@angular/core';
import { Coordinate } from 'src/app/coordinate';
import { Module } from 'src/app/module';

@Injectable({
  providedIn: 'root'
})

export class SolidService {

  readonly size: number;
  constructor() {
    this.size = 1;
  }

  getIcosaedre(){
    const distance = (((Math.sqrt(5) + 1) / 2) * 200 / 2) * this.size;
    const demiscale = (200 / 2) * this.size;
    return {
        A: new Coordinate(0, -demiscale, -distance),
        B: new Coordinate(0, demiscale, -distance),
        C: new Coordinate(-distance, 0, -demiscale),
        D: new Coordinate(-distance, 0, demiscale),
        E: new Coordinate(demiscale, -distance, 0),
        F: new Coordinate(demiscale, distance, 0),
        G: new Coordinate(distance, 0, -demiscale),
        H: new Coordinate(-demiscale, distance, 0),
        I: new Coordinate(-demiscale, -distance, 0),
        J: new Coordinate(0, demiscale, distance),
        K: new Coordinate(0, -demiscale, distance),
        L: new Coordinate(distance, 0, demiscale)
    };
  }

  generateSolid(){
    const i = this.getIcosaedre();
    return {
      1: new Module(i.A, i.B, i.C, i.G),
      2: new Module(i.A, i.C, i.I, i.B),
      3: new Module(i.B, i.C, i.A, i.H),
      4: new Module(i.C, i.H, i.D, i.B),
      5: new Module(i.B, i.H, i.C, i.F),
      6: new Module(i.F, i.H, i.B, i.J),
      7: new Module(i.B, i.F, i.H, i.G),
      8: new Module(i.F, i.G, i.L, i.B),
      9: new Module(i.B, i.G, i.F, i.A),
      10: new Module(i.A, i.G, i.B, i.E),
      11: new Module(i.E, i.G, i.A, i.L),
      12: new Module(i.A, i.E, i.G, i.I),
      13: new Module(i.A, i.I, i.E, i.C),
      14: new Module(i.E, i.I, i.K, i.A),
      15: new Module(i.C, i.I, i.A, i.D),
      16: new Module(i.D, i.I, i.C, i.K),
      17: new Module(i.C, i.D, i.I, i.H),
      18: new Module(i.D, i.H, i.J, i.C),
      19: new Module(i.D, i.J, i.K, i.H),
      20: new Module(i.H, i.J, i.D, i.F),
      21: new Module(i.F, i.J, i.H, i.L),
      22: new Module(i.J, i.L, i.K, i.F),
      23: new Module(i.F, i.L, i.J, i.G),
      24: new Module(i.G, i.L, i.F, i.E),
      25: new Module(i.E, i.L, i.G, i.K),
      26: new Module(i.K, i.L, i.E, i.J),
      27: new Module(i.E, i.K, i.L, i.I),
      28: new Module(i.I, i.K, i.E, i.D),
      29: new Module(i.J, i.K, i.D, i.L),
      30: new Module(i.D, i.K, i.I, i.J),
    };
  }
}
