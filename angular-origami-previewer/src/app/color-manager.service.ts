import { ThrowStmt } from '@angular/compiler';
import { Injectable, Input, Output, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ColorManagerService {
  @Output() readonly SHEMAS: {
    unic1: number[],
    grad2: number[],
    line2: number[],
    grad3: number[],
    mixe3: number[],
    dgra3: number[],
    line4: number[],
    grad4: number[],
    mixe5: number[],
    grad5: number[],
    spca5: number[],
    grad6: number[],
    mixe6: number[],
    line7: number[],
    grad8: number[],
    grad10: number[],
    mixe15: number[],
    mixe30: number[]
  };
  @Output() readonly LAYOUTS: {
    unic: string,
    grad: string,
    mixe: string,
    line: string,
    zone: string,
    dgra: string,
    spca: string,
    spcb: string,
    spcc: string,
    spcd: string
  };
  @Output() readonly NUMBERS: number[];

  @Output() layout: string;
  @Output() number: number;
  @Output() validLayouts: string[];
  @Output() validNumbers: number[];
  @Output() shemaName: string;
  @Output() shema: number[];


  @Input() storedColors: {color: string}[] = [];
  @Input() showedColors: {color: string}[] = [];
  @Input() inputColors: {color: string}[] = [];

  url: URLSearchParams;

  constructor() {
    this.SHEMAS = {
      unic1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      grad2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
      line2: [0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      grad3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2],
      mixe3: [0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 0, 2, 0, 1, 2, 1, 0, 2, 1, 0, 1, 0, 2, 1, 2, 1, 0, 2, 2, 0],
      dgra3: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 0, 0, 0, 0, 0],
      line4: [1, 0, 2, 2, 3, 3, 3, 0, 0, 2, 2, 3, 3, 3, 0, 0, 3, 2, 2, 3, 3, 0, 0, 3, 2, 2, 3, 3, 1, 0],
      grad4: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 3, 3, 3, 3, 3],
      mixe5: [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 1, 2, 3, 0, 4, 2, 0, 1, 4, 2, 3, 1, 4, 0, 3, 2, 4, 1, 0, 3],
      grad5: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 2, 2, 3, 2, 3, 2, 2, 3, 2, 2, 3, 2, 2, 3, 4, 4, 4, 4, 4],
      spca5: [0, 1, 2, 0, 3, 1, 4, 0, 1, 3, 2, 4, 3, 1, 3, 0, 4, 2, 3, 4, 2, 1, 3, 4, 1, 2, 3, 4, 0, 1],
      grad6: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 3, 2, 4, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 5, 5, 5, 5, 5],
      mixe6: [0, 1, 2, 3, 1, 4, 3, 0, 4, 2, 5, 4, 5, 1, 0, 3, 5, 2, 4, 5, 1, 0, 5, 3, 2, 1, 3, 4, 2, 0],
      line7: [1, 0, 2, 2, 6, 4, 4, 0, 5, 3, 2, 4, 6, 4, 0, 0, 6, 2, 3, 4, 6, 0, 0, 6, 2, 2, 6, 4, 1, 5],
      grad8: [0, 0, 0, 1, 2, 4, 3, 3, 1, 2, 4, 3, 1, 3, 2, 4, 3, 3, 6, 4, 5, 7, 6, 4, 5, 7, 6, 4, 7, 5],
      grad10: [0, 0, 0, 1, 2, 5, 3, 4, 1, 2, 5, 3, 1, 4, 2, 5, 3, 4, 8, 6, 7, 9, 8, 6, 7, 9, 8, 6, 9, 7],
      mixe15: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 5, 13, 7, 14, 10, 9, 11, 12, 1, 13, 14, 3, 2, 4, 6, 0, 8],
      mixe30: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    };
    this.LAYOUTS = {
      unic: 'Pleine',
      grad: 'Dégradé',
      mixe: 'Mélange',
      line: 'Lignes',
      zone: 'Zones',
      dgra: 'Dégradé double',
      spca: 'Spécial 1',
      spcb: 'Spécial 2',
      spcc: 'Spécial 3',
      spcd: 'Spécial 4'
    };
    this.NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 10, 15, 30];
    for (const color of ['#7F7F00', '#3F5818', '#3FA618', '#18BF58', '#58E63F', '#7FFF7F',
                         '#A6E63F', '#E6BF58', '#BFA618', '#BF5818', '#E63F58', '#A6183F',
                         '#58183F', '#7F007F', '#183F58', '#183FA6', '#007F7F', '#18BFA6',
                         '#3FA6E6', '#58E6BF', '#A6E6BF', '#BFA6E6', '#E6BFA6', '#FF7F7F',
                         '#E63FA6', '#BF58E6', '#A618BF', '#5818BF', '#7F7FFF', '#3F58E6'])
    {
      this.storedColors.push({color});
      this.showedColors.push({color});
    }
    this.number = 30;
    this.layout = 'mixe';
    this.shema = this.SHEMAS.mixe30;
    this.url = new URLSearchParams(document.location.search);
    if (this.url.has('l') && this.url.has('n') && this.url.has('c')){
      this.degenerateUrl(this.url.get('l'), parseInt(this.url.get('n'), 10), this.url.get('c').split(',') );
    }
    this.update();
  }

  @Output() update(){

    this.validLayouts = [];
    this.validNumbers = [];
    for (const shemaName of Object.keys(this.SHEMAS)){
      if (shemaName.includes(this.layout)){
        this.validNumbers.push(parseInt(shemaName.replace(this.layout, ''), 10));
      }
      if (shemaName.includes(this.number.toString())){
        this.validLayouts.push(shemaName.replace(this.number.toString(), ''));
      }
    }

    if (this.layout + this.number in this.SHEMAS){
      this.shemaName = this.layout + this.number;
      this.shema = this.SHEMAS[this.shemaName];

      this.inputColors = [];
      for (let index = 0; index < this.number; index++){
        this.inputColors.push(this.storedColors[index]);
      }
    }
    let i = 0;
    for (const index of this.shema){
      this.showedColors[i++] = this.inputColors[index];
    }

    this.generateUrl();
  }

  @Output() generateUrl() {
    const colorsAscii = [];
    const hexToAscii = (hex: string) => {
      return String.fromCharCode(parseInt((hex[1] + hex[2]), 16)) +
             String.fromCharCode(parseInt((hex[3] + hex[4]), 16)) +
             String.fromCharCode(parseInt((hex[5] + hex[6]), 16));
    };
    for (const c of this.storedColors){
      colorsAscii.push(hexToAscii(c.color));
    }
    this.url.set('l', this.layout);
    this.url.set('n', this.number.toString());
    this.url.set('c', colorsAscii.join(','));

  }

  @Output() degenerateUrl(l: string, n: number, c: string[]) {
    const asciiToHex = (ascii: string) => {
      const a = ascii[0].charCodeAt(0);
      const b = ascii[1].charCodeAt(0);
      const d = ascii[2].charCodeAt(0);

      return '#' + (a === 65533 ? 63 : a).toString(16).padStart(2, '0').toUpperCase() +
                   (b === 65533 ? 63 : b).toString(16).padStart(2, '0').toUpperCase() +
                   (d === 65533 ? 63 : d).toString(16).padStart(2, '0').toUpperCase();
    };
    for (const index in this.storedColors){
      if (index in this.storedColors){
        this.storedColors[index].color = asciiToHex(c[index]);
      }
    }
    this.number = n;
    this.layout = l;
    this.update();
  }
}
