import { Injectable } from '@angular/core';
import { Coordinate } from 'src/app/coordinate';
import { SolidService } from './solid.service';


@Injectable({
  providedIn: 'root'
})


export class RotationService {
  lastRotation = [{x: 0, y: 0}, {x: 0, y: 0}];


  constructor() { }

  rotatePoints(solid: {}, rotation: {x: number, y: number}, up: boolean) {
    if (rotation === undefined){
      rotation = this.lastRotation[0];
    }
    this.lastRotation[0] = rotation;

    if (up){
      rotation = this.lastRotation[0];
      rotation.x = rotation.x * 0.96;
      rotation.y = rotation.y * 0.96;
    }
    const rx = (rotation.y) % 360 * (Math.PI / 180) * 0.6;
    const ry = - (rotation.x) % 360 * (Math.PI / 180) * 0.6;

    const sinAnglex = Math.sin(rx);
    const cosAnglex = Math.cos(rx);
    const sinAngley = Math.sin(ry);
    const cosAngley = Math.cos(ry);
    for (const index in solid) {
      if (Object.prototype.hasOwnProperty.call(solid, index)) {
        const modules = solid[index];

        for (const p in modules){
          if (Object.prototype.hasOwnProperty.call(modules, p)) {
            const point = modules[p];
            const pointMem = new Coordinate(point.x, point.y, point.z);
            const y = pointMem.y * cosAnglex - pointMem.z * sinAnglex;
            let z = pointMem.z * cosAnglex + pointMem.y * sinAnglex;
            const x = pointMem.x * cosAngley + z * sinAngley;
            z = z * cosAngley - pointMem.x * sinAngley;
            modules[p] = new Coordinate(x, y, z);
          }
        }
      }
    }
    return solid;
  }

  projectPoints(solid: Coordinate[]){
      const projectedSolid = solid;

      for (const index in projectedSolid) {
        if (Object.prototype.hasOwnProperty.call(projectedSolid, index)) {
          const modules = solid[index];
          for (const p in modules){
            if (Object.prototype.hasOwnProperty.call(modules, p)) {
              const point = modules[p];
              /* Projection */ // 800 = fov 1000 = distance
              const f =  (100000 / 1000) / ((14 * 1000 + point.z));
              modules[p].push(point.x * f);
              modules[p].push(point.y * -f);
            }
          }
        }
      }
      return projectedSolid;
  }

}
