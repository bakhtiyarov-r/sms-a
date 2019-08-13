import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Title }     from '@angular/platform-browser';

import {Bids} from '../../bids';
import {BidsTitle} from '../../bids-title';


     
@Component({
    selector: 'content',
    styleUrls: ['./bids-list.sass',],
    templateUrl: './bids-list.html',
})
export class BidsListComponent implements OnInit { 

    title= 'Список заявок';
    bidsTitle: BidsTitle; 
    initialBids: Bids[]= [];
    bids: Bids[]= [];
    maxResults: number;
    perPage: number= 10;
    page: number= 1;

    constructor(private httpService: HttpService, private titleService: Title){}

    public setTitle( newTitle: string) {
	    this.titleService.setTitle(this.title);
	}

	public changePage() {
		let start = this.page * this.perPage - this.perPage;
        let end = this.page * this.perPage;
        this.bids = this.initialBids.slice(start, end);
	}

	public onChanged(value: number) {
        this.perPage = value;
        this.changePage();
    }

    public onInput(value: number) {
    	this.page= value;
    	this.changePage();
    }

    ngOnInit() {
    	this.setTitle(this.title);

    	this.httpService.getData()
	    	.subscribe((resp: Bids) => {
	    		this.bidsTitle= resp["data"].title;
	    		this.initialBids= resp["data"].items;
	    		this.changePage();
	    		this.maxResults= this.initialBids.length;
	    	});

    }

    
}