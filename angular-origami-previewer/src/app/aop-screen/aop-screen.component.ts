import { Component, Input, OnInit, EventEmitter  } from '@angular/core';
import { SolidService } from '../solid.service';
import { RotationService } from '../rotation.service';
import { Coordinate } from 'src/app/coordinate';
import { ColorManagerService } from '../color-manager.service';

@Component({
  selector: 'app-aop-screen',
  templateUrl: './aop-screen.component.html',
  styleUrls: ['./aop-screen.component.scss']
})


export class AopScreenComponent implements OnInit {

  svg: string;
  rotation: RotationService;
  intervalAutoRotation: any;
  solidService: SolidService;
  solid: {};
  paths: {d: string, stroke: string, stroke_width: number, fill: string, data_z: number}[] = [];
  mouseDowned = false;
  mouse: {x, y} = {x: 0, y: 0};
  fps: number = 1000 / 20;
  inertia = 0.96;

  @Input() colorManagerService: ColorManagerService;

  constructor(colorManagerService: ColorManagerService) {
    this.colorManagerService = colorManagerService;
    this.paths = [];
   }

  ngOnInit(): void {
    this.solidService = new SolidService();
    this.rotation = new RotationService();
    this.solid = this.solidService.generateSolid();
    this.intervalAutoRotation = setInterval(() => {
      this.rotation.rotatePoints(this.solid, this.mouse, true);
      if (this.mouseDowned){
        this.mouse = {x: 0, y: 0};
      }else{
        this.mouse.x *= this.inertia;
        this.mouse.y *= this.inertia;
      }
      this.generateSVG(this.solid);
    }, this.fps);
  }


  generateSVG(solid: {}){
    const insertWithZ = (o: {d: string, stroke: string, stroke_width: number, fill: string, data_z: number}) => {
      let stop = true;
      let i = 0;
      while (stop){
        if (this.paths.length <= i || o.data_z >= this.paths[i].data_z){
          this.paths.splice(i, 0, o);
          stop = false;
        }
        i++;
      }
    };

    const getCoord = (coordinate: Coordinate) => {
      const digits = Math.pow(10, 6);
      const scale = 300;
      const round = (v) => {
        return Math.round(v * digits) / digits;
      };
      return `${round(coordinate.x / scale * 150 + 250)} ${round(coordinate.y / scale * 150 + 250)}`;
    };

    this.paths = [];
    let i = 0;
    for (const s in solid) {
      if (solid.hasOwnProperty(s)) {
          const module = solid[s];
          const color = this.colorManagerService.showedColors[i++].color;
          insertWithZ({
            d: `M${getCoord(module.ap)}L${getCoord(module.bp)}L${getCoord(module.cp)}L${getCoord(module.dp)}L${getCoord(module.an)}ZM${getCoord(module.ac)}L${getCoord(module.cp)}ZM${getCoord(module.cp)}L${getCoord(module.an)}Z`,
            stroke: '#000f',
            stroke_width: 0.8,
            fill: color,
            data_z: (module.cp).z,
          });
          insertWithZ({
            d: `M${getCoord(module.an)}L${getCoord(module.bn)}L${getCoord(module.cn)}L${getCoord(module.dn)}L${getCoord(module.ap)}ZM${getCoord(module.cn)}L${getCoord(module.ac)}ZM${getCoord(module.cn)}L${getCoord(module.ap)}Z`,
            stroke: '#000f',
            stroke_width: 0.8,
            fill: color,
            data_z: (module.cn).z,
          });
          insertWithZ({
            d: `M${getCoord(module.dp )}L${getCoord(module.gp )}L${getCoord(module.ip )}L${getCoord(module.hp )}L${getCoord(module.fp )}L${getCoord(module.ep)}L${getCoord(module.an)}ZM${getCoord(module.dp)}L${getCoord(module.hp)}Z`,
            stroke: '#000f',
            stroke_width: 0.8,
            fill: color,
            data_z: (module.fp).z,
          });
          insertWithZ({
            d: `M${getCoord(module.ap )}L${getCoord(module.dn )}L${getCoord(module.gn )}L${getCoord(module.in )}L${getCoord(module.hn )}L${getCoord(module.fn)}L${getCoord(module.en)}ZM${getCoord(module.dn)}L${getCoord(module.hn)}Z`,
            stroke: '#000f',
            stroke_width: 0.8,
            fill: color,
            data_z: (module.fn).z,
          });
          insertWithZ({
            d: `M${getCoord(module.ip )}L${getCoord(module.jp )}L${getCoord(module.hp )}Z`,
            stroke: '#000f',
            stroke_width: 0.8,
            fill: color,
            data_z: (module.kp).z,
          });
          insertWithZ({
            d: `M${getCoord(module.jn )}L${getCoord(module.in )}L${getCoord(module.hn )}Z`,
            stroke: '#000f',
            stroke_width: 0.8,
            fill: color,
            data_z: (module.kn).z,
          });

      }
    }
  }
  mouseDown(){
    this.mouseDowned = true;
  }

  mouseMove(e){
    if (this.mouseDowned){
      this.mouse = {x: this.mouse.x + e.movementX, y: this.mouse.y + e.movementY};
    }
  }
  mouseUp(e){
    this.mouseDowned = false;
  }
}
