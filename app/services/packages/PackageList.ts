import {Injectable, Http} from 'angular2/angular2';
//http://www.dynamopackages.com/packages/
@Injectable()
export class PackageList{
  data: Array<any>;
  constructor(private http: Http) {
    this.http = http;
    this.data = null;
    console.log('DataService constructor');
  }

  retrieveData() {
    this.http.get('http://www.dynamopackages.com/packages/');
    //.map(res => res.json()).subscribe(data => { this.data = data.content;})
  }
}
