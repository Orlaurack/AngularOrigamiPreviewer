import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Coordinate } from 'src/app/coordinate';

export class Module {
  ap: Coordinate;
  an: Coordinate;
  ac: Coordinate;
  bp: Coordinate;
  bn: Coordinate;
  cp: Coordinate;
  cn: Coordinate;
  dp: Coordinate;
  dn: Coordinate;
  ep: Coordinate;
  en: Coordinate;
  fp: Coordinate;
  fn: Coordinate;
  gp: Coordinate;
  gn: Coordinate;
  hp: Coordinate;
  hn: Coordinate;
  ip: Coordinate;
  in: Coordinate;
  jp: Coordinate;
  jn: Coordinate;
  kp: Coordinate;
  kn: Coordinate;

  readonly vertexDistance = 120;

  constructor(leftPrimary: Coordinate, rightPrimary: Coordinate, leftSecond: Coordinate, rightSecond: Coordinate){
    const leftVertex: Coordinate = this.calculVertex(leftPrimary, rightPrimary, leftSecond);
    const rightVertex: Coordinate =  this.calculVertex(rightPrimary, leftPrimary, rightSecond);
    const moyenne = (coordinates: Coordinate[]) => {
      let x = 0;
      let y = 0;
      let z = 0;
      for (const coordinate of coordinates)
      {
        x += coordinate.x;
        y += coordinate.y;
        z += coordinate.z;
      }
      return new Coordinate(x / coordinates.length, y / coordinates.length, z / coordinates.length);
    };

    this.ap = leftPrimary;
    this.an = rightPrimary;
    this.ac = moyenne([leftPrimary, rightPrimary]);
    this.bp = moyenne([moyenne([leftPrimary, rightPrimary]), moyenne([leftPrimary, rightPrimary, leftVertex])]);
    this.bn = moyenne([moyenne([leftPrimary, rightPrimary]), moyenne([leftPrimary, rightPrimary, rightVertex])]);
    this.cp = moyenne([leftPrimary, rightPrimary, leftVertex]);
    this.cn = moyenne([leftPrimary, rightPrimary, rightVertex]);
    this.dp = moyenne([rightPrimary, leftVertex]);
    this.dn = moyenne([leftPrimary, rightVertex]);
    this.ep = moyenne([moyenne([rightPrimary, leftSecond, leftVertex]), moyenne([rightPrimary, leftSecond])]);
    this.en = moyenne([moyenne([leftPrimary, rightSecond, rightVertex]), moyenne([leftPrimary, rightSecond])]);
    this.fp = moyenne([rightPrimary, leftSecond, leftVertex]);
    this.fn = moyenne([leftPrimary, rightSecond, rightVertex]);
    this.gp = moyenne([moyenne([rightPrimary, leftVertex]), moyenne([leftSecond, leftVertex])]);
    this.gn = moyenne([moyenne([leftPrimary, rightVertex]), moyenne([rightSecond, rightVertex])]);
    this.hp = moyenne([leftSecond, leftVertex]);
    this.hn = moyenne([rightSecond, rightVertex]);
    this.ip = leftVertex;
    this.in = rightVertex;
    this.jp = moyenne([leftSecond, leftPrimary, leftVertex, leftVertex]);
    this.jn = moyenne([rightSecond, rightPrimary, rightVertex, rightVertex]);
    this.kp = moyenne([leftPrimary, leftVertex, leftSecond]);
    this.kn = moyenne([rightPrimary, rightVertex, rightSecond]);
  }
  calculVertex(A: Coordinate, B: Coordinate, C: Coordinate){
    const length = 0.35 + (this.vertexDistance / 200);
    return new Coordinate(((A.x + B.x + C.x) * length), ((A.y + B.y + C.y) * length), ((A.z + B.z + C.z) * length));
  }
}
