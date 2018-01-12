export default class Computer {

  constructor(JWT, AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
  }

  getAll() {
      console.log('GetAll');
    return this._$http({
      url: this._AppConstants.api + '/computer',
      method: 'GET',
    }).then((res) => res.data);
  }

  get(id){
    console.log('Get' + id);
    return this._$http({
      url: this._AppConstants.api + '/computer/' + id,
      method: 'POST',
    }).then((res) => res.data);
    console.log(res);
  }

  getOne(type) {
    console.log('GetOne' + type);
    return this._$http({
      url: this._AppConstants.api + '/computer/' + type,
      method: 'GET',
    }).then((res) => res.data);
   console.log(res);
 // return res.data;

}
homeSearch(type){
  return this._$http({
    url: 'http://localhost:8081/#!/list/' + type,
  });
}

}