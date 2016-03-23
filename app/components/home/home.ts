/// <reference path="../../../tsd_typings/angular2/angular2.d.ts"/>
import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {PackageList} from '../../services/packages/PackageList';

@Component({
    selector: 'home-component',
    bindings: [PackageList]
})
@View({
    templateUrl: './components/home/home.html',
    directives: [RouterLink]
})
export class Home {
  constructor(public packagelist: PackageList) {
    console.log( packagelist.getPackageContent() );
  }
}
