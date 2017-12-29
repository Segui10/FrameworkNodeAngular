console.log("list");
function ListConfig($stateProvider) {
    'ngInject';
  
    $stateProvider
    .state('app.list', {
      url: '/list',
      controller: 'ListCtrl',
      controllerAs: 'scope',
      templateUrl: 'list/list.html'
    })
    .state('app.details', {
      url: '/details/:id',
      controller: 'DetailsCtrl',
      controllerAs: 'scope',
      templateUrl: 'list/list.details.html',
      resolve: {
        details:function($stateParams){
          //console.log($stateParams);
          return $stateParams;
        }
      }
    })
  };
  
  export default ListConfig;