import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
    constructor(private el: ElementRef) {}

    @Input() defaultColor: string;

    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }

}
