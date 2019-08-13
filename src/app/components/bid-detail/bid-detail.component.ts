import { Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpService} from '../../services/http.service';
import { Title }     from '@angular/platform-browser';

import {Bids} from '../../bids';
     
@Component({
    selector: 'bid-detail',
    styleUrls: [ './bid-detail.sass', ],
    templateUrl: './bid-detail.html',
})
export class BidDetailComponent implements OnInit { 

    title= 'Заявка ';
    id: number;
    bids: Bids[];
    bidDetail: Bids;

    constructor(private httpService: HttpService, private activateRoute: ActivatedRoute, private titleService: Title){
        this.id = activateRoute.snapshot.params['id'];
    }

    public setTitle( newTitle: string) {
        this.titleService.setTitle(this.title);
    }

    ngOnInit() {
        this.setTitle(this.title);

    	this.httpService.getData()
	    	.subscribe((resp: Response) => {
	    		this.bids= resp["data"].items;
	    		this.bidDetail= this.bids.find((item: any) => item.id == this.id);
                this.title+=  this.bidDetail.number + ' ' + this.bidDetail.equipment_a + ' ' + this.bidDetail.equipment;

	    	});

    }


    

}