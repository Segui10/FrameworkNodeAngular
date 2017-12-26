class DetailsCtrl {
    constructor(User, $stateParams, AppConstants, $scope) {
      'ngInject';
      this.appName = AppConstants.appName;
      this._$scope = $scope;
      
      var scope = this;
      scope.computer= [];
      scope.shop=[];
  
      Computerservice.getAll().then(
        (obj) => {
          console.log(obj.computer);
          obj.computer.forEach(function(param){
            scope.computer.push(param);
          });
          console.log(scope.computer);
        }
      );
     }
    }
    
    export default DetailsCtrl;
    