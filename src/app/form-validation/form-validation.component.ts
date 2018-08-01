import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from './Hero';
import { forbiddenNameValidator } from './forbidden-name.directive';

/**
 * 表单验证组件
 * @class FormValidationComponent
 */
@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})

export class FormValidationComponent implements OnInit {

    constructor() {

    }

    ngOnInit () {}

    powers = ['', 'Really Smart', 'Super Flexible', 'Weather Changer'];

    hero = {name: 'Dr.1', alterEgo: 'Dr. What', power: this.powers[0]};
}



