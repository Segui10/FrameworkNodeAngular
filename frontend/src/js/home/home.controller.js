class HomeCtrl {
  constructor( Computerservice, AppConstants, $scope,  $window) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;
    this._Computerservice = Computerservice;

    // Get list of all tags
     /*this._Computerservice.getAll().then(
        (computer) => {
        this.computer = true;
          console.log(computer);
          //console.log(User.current);//null
          this.computer = computer;
        }
      );  */
      $scope.search= function(){
        console.log($scope.keywords);
        $window.location.href = '/#!/list/'+$scope.keywords;
      }
  }
}

export default HomeCtrl;
