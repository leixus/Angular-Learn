import { Component, OnInit } from '@angular/core';

/**
 * 结构性指令
 * @class StructuralDirectivesComponent
 */
@Component({
  selector: 'app-structural-directives',
  templateUrl: './structuralDirectives.component.html',
  styleUrls: ['./structuralDirectives.component.scss']
})

export class StructuralDirectivesComponent implements OnInit {

  color: string;

  constructor() {
    this.color = 'yellow';
  }

  ngOnInit() {}

}
