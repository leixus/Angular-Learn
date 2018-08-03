import { Component, OnInit } from '@angular/core';

/**
 * 属性指令
 * @class AttributeDirectivesComponent
 */
@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attributeDirectives.component.html',
  styleUrls: ['./attributeDirectives.component.scss']
})

export class AttributeDirectivesComponent implements OnInit {

  color: string;

  constructor() {
      this.color = 'yellow';
  }

  ngOnInit() {}

}
