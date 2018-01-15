class ContactCtrl {
  constructor( AppConstants, $scope, Contactservice, $state, toastr) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;
    this._Contactservice = Contactservice;
    this._$state = $state;
    this._toastr = toastr;

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
              to: 'segui.guerola@gmail.com',
              subject: scope.inputSubject,
              text: scope.inputMessage,
              type: 'admin'
      };
      console.log(data);
      
      this._Contactservice.sendEmail(data).then(function (response) {
        console.log(response);
                        if (response) {
                            console.log('Email sent correctly!');
                            scope.resultMessageOk = 'Email sent correctly!';
                            setTimeout(function () {
                              toastr.success('Se envio correctamente','Email');
                                scope.resultMessageOk = '';
                                $state.go('app.home');
                            }, 3000);
                        } else {
                          toastr.error('Ha habido algun error intentalo mas tarde','Email');
                            scope.resultMessageFail = 'Problem sending your email, please try again later!';
                             setTimeout(function () {
                                scope.resultMessageFail = '';
                             }, 3000);
                        }
      });
    };
  }
}

export default ContactCtrl;
