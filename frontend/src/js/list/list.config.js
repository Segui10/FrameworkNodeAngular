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
      url: '/details',
      controller: 'ListCtrl',
      controllerAs: 'scope',
      templateUrl: 'list/list.details.html'
    })
  };
  
  export default ListConfig;