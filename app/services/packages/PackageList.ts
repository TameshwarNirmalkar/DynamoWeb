import {HttpService, Promise} from 'angular2/angular2';
export class PackageList{
  $http, $q, cachedBooks;
  constructor($http: HttpService, $q: Promise) {
    this.$http = $http;
    this.$q = $q
  }
  getPackages() {
    if (this.cachedBooks) {
      return this.$q.when(this.cachedBooks);
    }
    return this.$http.get('/books').then(function(data){
      this.cachedBooks = data.books;
      return this.cachedBooks;
    })
  }
}
