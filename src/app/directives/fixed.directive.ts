import { Directive, ElementRef, Renderer2, HostListener, AfterContentInit } from '@angular/core';

@Directive ({
	selector: '[fixed]'
})

export class FixedDirective implements AfterContentInit {

	elemTop: any;

	constructor( private elementRef: ElementRef, private renderer: Renderer2 ) {
		
	}

	@HostListener('window:scroll') onScroll() {
		this.addFixed();
	}

	addFixed() {
		
		if ( window.pageYOffset >= this.elemTop ) {
              this.renderer.addClass(this.elementRef.nativeElement, 'fixed');
        } else {
              this.renderer.removeClass(this.elementRef.nativeElement, 'fixed');
        }
		
	}

	ngAfterContentInit() {
		this.elemTop= this.elementRef.nativeElement.offsetTop
	}
}