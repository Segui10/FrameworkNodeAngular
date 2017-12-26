class ListCtrl {
  constructor(User, Computerservice, AppConstants, $scope) {
    'ngInject';
    this.appName = AppConstants.appName;
    this._$scope = $scope;
    this._Computerservice = Computerservice;
    
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
  
  export default ListCtrl;
  