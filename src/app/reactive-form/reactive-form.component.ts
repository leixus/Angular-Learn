import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { states } from './data-model';

/**
 * 表单组件
 * @class ReactiveFormComponent
 */
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})

export class ReactiveFormComponent implements OnInit {

  // public name = new FormControl();
  //
  // heroForm = new FormGroup({
  //     name: new FormControl()
  // });

  heroForm: FormGroup;
  states = states;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    // this.heroForm = this.fb.group({
    //   name: ['', Validators.required ],
    //   street: '',
    //   city: '',
    //   state: '',
    //   zip: '',
    //   power: '',
    //   sidekick: ''
    // });
    this.heroForm = this.fb.group({ // <-- the parent FormGroup
      name: ['', Validators.required ],
      address: this.fb.group({ // <-- the child FormGroup
        street: '',
        city: '',
        state: '',
        zip: ''
      }),
      power: '',
      sidekick: ''
    });
  }

  ngOnInit () {

  }

}



