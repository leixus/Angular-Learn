import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdDirective } from './ad.directive';
import {AdItem} from './ad-item';

/**
 * 表单组件
 * @class DynamicComponent
 */
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})

export class DynamicComponent implements OnInit {

  @ViewChild(AdDirective) adHost: AdDirective;
  // piblic ads: AdItem[];

  constructor() {
      // this.ads = [
        // {name: 'Bombasto', bio: 'Brave as they come'},
        // {name: 'Dr IQ', bio: 'Smart as they come'}  ,
        // {headline: 'Hiring for several positions', body: 'Submit your resume today!'},
        // {headline: 'Openings in all departments', body: 'Apply today'},
      // ];
  }

  ngOnInit() {}
}
