import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from './services/http.service';
import { FixedDirective } from './directives/fixed.directive';


import { AppComponent }   from './components/main/app.component';
import { Header } from './components/header/header.component';
import { BidsListComponent }   from './components/bids-list/bids-list.component';
import { BidDetailComponent }   from './components/bid-detail/bid-detail.component';
import { PaginationComponent } from './components/pagination/pagination.component';

const appRoutes: Routes = [
	{path: '', component: BidsListComponent},
	{path: 'bid/:id', component: BidDetailComponent}
]

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule, NgbModule ],
    declarations: [ AppComponent, Header, BidsListComponent, BidDetailComponent, PaginationComponent, FixedDirective ],
    bootstrap:    [ AppComponent ],
    providers:    [ Title, HttpService ],
})
export class AppModule { }
