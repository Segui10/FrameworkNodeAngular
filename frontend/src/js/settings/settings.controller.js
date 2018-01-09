class SettingsCtrl {
  constructor(User, $state, toastr) {
    'ngInject';

    this._User = User;
    this._$state = $state;
    this._toastr = toastr;

    this.formData = {
      email: User.current.email,
      name: User.current.name,
      apellidos: User.current.apellidos,
      image: User.current.image,
      username: User.current.username,
      date_birthday: User.current.date_birthday,
      dni: User.current.dni
    }
    //this.logout = User.logout.bind(User);
  }

  submitForm() {
    this.isSubmitting = true;
    this._User.update(this.formData).then(
      (user) => {
        setTimeout(() => {
          this._toastr.success('Su cuenta se ha actualizado correctamente.','Actualización');
        },800); 
        this._$state.go('app.profile.main', {username:user.username})
      },
      (err) => {
        setTimeout(() => {
          this._toastr.success('Lo sentimos su cuenta no se ha actualizado.','Error');
        },800);
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    )
  }
}

export default SettingsCtrl;
