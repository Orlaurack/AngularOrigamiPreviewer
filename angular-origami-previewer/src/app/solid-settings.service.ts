import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolidSettingsService {
  @Output() fps: number;
  @Output() inertia: number;
  @Output() rotation: {x: number, y: number};
  @Output() scale: number;
  @Output() fov: number;

  constructor() {
    this.fps = 20;
    this.inertia = 0.96;
    this.rotation = {x: 0, y: 0};
    this.scale = 1;
    this.fov = 1;
  }
}
