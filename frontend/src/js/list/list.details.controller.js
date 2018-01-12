class DetailsCtrl {
    constructor(User, $stateParams, AppConstants, $scope, details, Computerservice) {
      'ngInject';
      Stripe.setPublishableKey('pk_test_WMqiVRs7QV6k0qzCU7FCl3Ji');
      this.details = details;
      this._Computerservice = Computerservice;
      this._$scope = $scope;
      console.log(details);

      var scope = this;
      scope.computer= [];
      scope.shop=[];

      Computerservice.getAll().then(
        (obj) => {
            this.details.computer.forEach(function(param){
              console.log(details.id);
                // if(param._id==details.id){
                scope.computer.push(param);
                // }
              });
          console.log(scope.computer);
        }
      );
      console.log(details.id);
     }
    }
    
    export default DetailsCtrl;
    