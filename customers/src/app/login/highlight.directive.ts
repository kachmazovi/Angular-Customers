import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('');
  }

  constructor(private el: ElementRef) {
    console.log('highlight directive:', this.el);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
