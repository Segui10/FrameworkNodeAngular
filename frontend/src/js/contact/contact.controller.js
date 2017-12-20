class ContactCtrl {
  constructor( AppConstants, $scope, Contactservice) {
    'ngInject';

    
    this.appName = AppConstants.appName;
    this._$scope = $scope;
    this._Contactservice = Contactservice;

    console.log('contact');
    var scope = this;
    scope.title = 'Contact';
    scope.inputName = '';
    scope.inputEmail = '';
    scope.inputSubject = '';
    scope.inputMessage = '';
    scope.SubmitContact = SubmitContact;

    function SubmitContact() {
     console.log('Hola Llore');
      var data = {
              name: scope.inputName,
              from: scope.inputEmail,
              to: 'segui654@gmail.com',
              subject: scope.inputSubject,
              text: scope.inputMessage,
              type: 'admin'
      };
      console.log(data);
      
      this._Contactservice.sendEmail(data).then(function (response) {
        console.log(response);
                        if (response) {
                            //logger.success('Email sent correctly!');
                            scope.resultMessageOk = 'Email sent correctly!';
                            //$timeout(function () {
                                scope.resultMessageOk = '';
                                $state.go('main');
                           // }, 3000);
                        } else {
                            scope.resultMessageFail = 'Problem sending your email, please try again later!';
                            // $timeout(function () {
                                scope.resultMessageFail = '';
                            // }, 3000);
                        }
      });
    };
  }
}

export default ContactCtrl;
