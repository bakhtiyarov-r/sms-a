import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'pagination',
	templateUrl: './pagination.html',
	styleUrls: [ './pagination.sass' ]
})

export class PaginationComponent implements OnInit {

	@Input() maxResults: number;
	@Input() perPage: number;
	@Input() page: number;
	@Output() onChanged = new EventEmitter<number>();
	@Output() onInput = new EventEmitter<number>();

	pages: number[]= [10,30,50];
	disabledPrev: string;
	disabledNext: string

	
	constructor() {}

	change(value:number) {
        this.onChanged.emit(value);
    }

    changePage(value:any) {

    	

    	switch (value) {
    		case "prev":
    			if (this.page == 1) return; 
    			this.page--;
    			break;
    		case "next":
    			if (this.page == this.maxPages()) return;
    			this.page++;
    			break;
    		default:
    			this.page= value;
    			break;
    	}
    	
    	
        this.onInput.emit(this.page);
    }

	maxPages() {
		return Math.ceil(this.maxResults / this.perPage)
	}

    ngOnInit() {
    	
	}
}
