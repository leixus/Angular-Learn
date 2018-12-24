import { Component, OnInit } from '@angular/core';
import { Heros } from './heros';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

    public powers = ['时空', '心灵', '命运', '力量', null];

    public hero: Heros;

    submitted = false;

    constructor() { }

    onSubmit() { this.submitted = true; }

    get diagnostic() { return JSON.stringify(this.hero); }

    newHero() {
        this.hero = new Heros(42, '', '');
    }

    ngOnInit() {

        this.hero = new Heros(18, '小灰', this.powers[0], '不可描述');

        let myHero = new Heros(42, '小明', '放火', '可选的不知道名称的');

        // console.log('英雄的名称: ' +  myHero.name);
        // console.log('英雄的名称: ' +  this.model.name);
    }

}
