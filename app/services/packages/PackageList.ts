import {Injectable} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class PackageList{
  http: Http;
  contentData: Array<Object>;
  constructor(http: Http) {
    console.warn('Package list constructor');
    this.http = http;
  }
  getContent() {
    return this.http.get('http://dynamopackages.com/packages/').then(function(response) {
      return response.json();
    });
  }
  getPackageContent(){
    return this.http.get('http://dynamopackages.com/packages/')
      .map((data: any) => data.json())
      .subscribe(
              (data: any) => {
                  this.contentData = data.content;
              },
              err => console.log(err), // error
              () => console.log('getPackageContent Complete') // complete
          );
  }
}
