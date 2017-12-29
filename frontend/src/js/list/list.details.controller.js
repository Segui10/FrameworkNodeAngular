class DetailsCtrl {
    constructor(User, $stateParams, AppConstants, $scope, details) {
      'ngInject';
      this.details = details;

      console.log(details.id);
     }
    }
    
    export default DetailsCtrl;
    