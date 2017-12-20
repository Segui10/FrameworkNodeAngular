function ContactConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.contact', {
    url: '/contact',
    controller: 'ContactCtrl',
    controllerAs: 'scope',
    templateUrl: 'contact/contact.html'
  })
};

export default ContactConfig;
