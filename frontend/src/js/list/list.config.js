console.log("list");
function ListConfig($stateProvider) {
    'ngInject';
  
    $stateProvider
    .state('app.list', {
      url: '/list/:type',
      controller: 'ListCtrl',
      controllerAs: 'scope',
      templateUrl: 'list/list.html',
      resolve: {
        categorias:function(Computerservice,$stateParams){
          console.log($stateParams.type);
          return Computerservice.getOne($stateParams.type).then(
            (categorias) =>  categorias,
            (err) => $state.go('app.home')
          );
        }
       }
    })

    .state('app.details', {
      url: '/details/:id',
      controller: 'DetailsCtrl',
      controllerAs: 'scope',
      templateUrl: 'list/list.details.html',
      resolve: {
        details:function(Computerservice,$stateParams){
          console.log($stateParams.id);
          return Computerservice.get($stateParams.id).then(
            (details) => details,
            (err) => $state.go('app.list')
          );
        }
      }
    })
    
  };
  
  export default ListConfig;