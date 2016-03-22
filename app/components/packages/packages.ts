import {Component, View, NgFor} from 'angular2/angular2';

import {PackageList} from '../../services/packages/PackageList';

@Component({
    selector: 'packages-component'
})
@View({
    templateUrl: './components/packages/packages.html',
    directives: [NgFor]
})
export class Packages {
    constructor(public list: PackageList) {
    }
}
