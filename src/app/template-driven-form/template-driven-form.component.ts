import { Component, OnInit } from '@angular/core';
import {Hero} from './Hero';

/**
 * 表单组件
 * @class TemplateDrivenFormComponent
 */
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})

export class TemplateDrivenFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(0, '', '', '');

  submitted = false;

  constructor () {}

  ngOnInit () {}

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero(0, '', '');
  }

  // skyDog(): Hero {
  //   const myHero: Hero =  new Hero(42, 'SkyDog',
  //     'Fetch any object at any distance',
  //     'Leslie Rollover');
  //   console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
  //   return myHero;
  // }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
      form.controls['name'].value; // Dr. IQ
  }

  /////////////////////////////
}



