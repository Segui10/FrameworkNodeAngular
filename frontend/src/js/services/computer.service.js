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
     console.log(res.data);
    return res.data;
  }

}