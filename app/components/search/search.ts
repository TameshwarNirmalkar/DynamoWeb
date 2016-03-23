import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'search-component'
})
@View({
    templateUrl: './components/search/search.html',
    directives: [RouterLink]
})
export class Search {}
