class AuthCtrl {
  constructor(User, $state, toastr) {
    'ngInject';

    this._User = User;

    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');
    this._$state = $state;
    this._toastr = toastr;
  }

  submitForm() {
    this.isSubmitting = true;

    this._User.attemptAuth(this.authType, this.formData).then(
      (res) => {
        setTimeout(() => {
          this._toastr.success('Sucuenta se ha creado correctemente.','Bienvenido');
        },800); 
        this._$state.go('app.home');
      },
      (err) => {
        setTimeout(() => {
          this._toastr.error('Ha habido un error, ponjanse en contacto con el administrador de la web.','activación');
        },800); 
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    )
  }
}

export default AuthCtrl;
