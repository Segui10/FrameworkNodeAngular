class DetailsCtrl {
    constructor(User, $stateParams, AppConstants, $scope, details, Computerservice) {
      'ngInject';
      this.details = details;
      this._Computerservice = Computerservice;
      this._$scope = $scope;

      var scope = this;
      scope.computer= [];
      scope.shop=[];


      Computerservice.getAll().then(
        (obj) => {
            obj.computer.forEach(function(param){
                if(param._id==details.id){
                scope.computer.push(param);
                }
              });
          console.log(scope.computer);
        }
      );

      console.log(details.id);
     }
    }
    
    export default DetailsCtrl;
    