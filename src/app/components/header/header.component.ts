import { Component, Input } from '@angular/core';

@Component({
	selector: 'header-comp',
	styleUrls: ['./header.sass'],
	templateUrl: './header.html'
})

export class Header {

	@Input() title: string;

	constructor() {}
	
}
