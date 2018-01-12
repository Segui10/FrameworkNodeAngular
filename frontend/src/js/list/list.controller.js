class ListCtrl {
  constructor(User, Computerservice,categorias, AppConstants, $scope) {
    'ngInject';
    this._categorias = categorias;
    this.appName = AppConstants.appName;
    this._$scope = $scope;
    this._Computerservice = Computerservice;
    
    var scope = this;
    scope.computer= [];

    if (this._categorias !== "") {
      this._categorias.computer.forEach(function(param){
        console.log(param);
        scope.computer.push(param);
      });
    }else if(this._categorias === ""){
      this._Computerservice.getAll().then(
        (obj) => {
          obj.computer.forEach(function(param){
              scope.computer.push(param);
          });
          console.log(scope.computer);
        }
      );
    }
   }
  }
  
  export default ListCtrl;
  