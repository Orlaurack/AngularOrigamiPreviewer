export class Coordinate {
  x: number;
  y: number;
  z: number;
  xProjected: number;
  yProjected: number;

  constructor(x: number, y: number, z= 0){
    this.x = x;
    this.y = y;
    this.z = z;
  }

  moveTo(x: number, y: number, z= 0, xProjected?: number, yProjected?: number){
    this.x = x;
    this.y = y;
    this.z = z;
    this.xProjected = xProjected;
    this.yProjected = yProjected;
  }

}
