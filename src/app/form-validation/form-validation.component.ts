import { Component, OnInit } from '@angular/core';
import {Heros} from '../template-form/heros';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {forbiddenNameValidator} from './forbidden-name.directive';
import {identityRevealedValidator} from './identity-revealed.directive';
import {UniqueAlterEgoValidator} from './async';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  heroForm: FormGroup;
  public hero: Heros;
  public powers = ['时空', '心灵', '命运', '力量', null];
  constructor(private alterEgoValidator: UniqueAlterEgoValidator) {}

  ngOnInit() {

    this.hero = new Heros(18, '小灰', this.powers[0], '嘿嘿嘿');

    this.heroForm = new FormGroup(
      {
          'name': new FormControl(this.hero.name, [
            Validators.required,
            Validators.minLength(4),
            forbiddenNameValidator(/bob/i) // 自定义验证器，不能出现bob
          ]),
          'alterEgo': new FormControl(this.hero.alterEgo, {
            asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
            updateOn: 'blur'
          }),
          'power': new FormControl(this.hero.power, Validators.required)
        },
      {
          validators: identityRevealedValidator
        }
      );

  }

  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); }

  get alterEgo() { return this.heroForm.get('alterEgo'); }

}
