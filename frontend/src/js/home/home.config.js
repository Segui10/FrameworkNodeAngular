function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: 'scope',
    templateUrl: 'home/home.html',
    title: 'Home'
  });
};

export default HomeConfig;
