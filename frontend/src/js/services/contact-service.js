 export default class Contactservice {
    constructor(AppConstants, $http) {
        'ngInject';
    
        this._AppConstants = AppConstants;
        this._$http = $http;
      }

      sendEmail(payload) {
        console.log(payload);
        return this._$http({ 
         url: this._AppConstants.api + '/contact',
         method:'POST',
         data:payload
        }).then(success)
          .catch(fail);
        function success() {
          return true;
        } 
        function fail() {
          return false;
        }
    }
      
}
