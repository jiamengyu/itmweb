import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({ selector: '[appHighlight]'})

export class HighlightDirective{
    constructor( render: Renderer, el: ElementRef) {
        render.setElementStyle(el.nativeElement, 'backgroundColor', 'blue');
    }
}
