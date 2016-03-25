import {Component, View, NgFor} from 'angular2/angular2';

import {PackageList} from '../../services/packages/PackageList';

@Component({
    selector: 'packages-component',
    providers: [PackageList]
})

@View({
    templateUrl: './components/packages/packages.html',
    directives: [NgFor]
})
export class Packages {
    packagelist: Array<any>;
    constructor(public list: PackageList) {
      //.packagelist = list;
      //this.packagelist.retrieveData()
      console.log( 'package list display' );
    }
}
