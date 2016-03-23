import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';


import {Home} from './components/home/home';
//import {About} from './components/about/about';
import {Search} from './components/search/search';
import {Packages} from './components/packages/packages';
import {NamesList} from './services/NameList';


@Component({
	selector: 'app',
	viewBindings: [NamesList]
})
@RouteConfig([
	{path: '/', component: Home, as: 'browse'},
	{path: '/search', component: Search, as: 'search'}
])
@View({
	templateUrl: './app.html',
	directives: [RouterOutlet, RouterLink]
})
class App {
}


bootstrap(App, [routerInjectables]);
