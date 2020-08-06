import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aop-section',
  templateUrl: './aop-section.component.html',
  styleUrls: ['./aop-section.component.scss']
})
export class AopSectionComponent implements OnInit {
  @Input() title = 'default-title';

  constructor() {

  }

  ngOnInit(): void {

  }

}
