import {Injectable} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';


@Injectable()
export class PackageList{
  http: Http;
  constructor(http: Http) {
    console.log('Package list constructor');
    this.http = http;
  }
  getContent() {
    return this.http.get('http://dynamopackages.com/packages/').then(function(response) {
      return response.json();
    });
  }
}
