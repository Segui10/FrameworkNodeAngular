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
  };
  
  export default ListConfig;