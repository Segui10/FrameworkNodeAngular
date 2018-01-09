class ProfileCtrl {
  constructor(profile, User) {
    'ngInject';

    this.profile = profile;
    console.log(profile);

    if (User.current) {
      console.log(User.current.username);
      console.log(this.profile.username);
      //console.log(User.current.email);
      this.isUser = (User.current.username === this.profile.username );
      
    } else {
      this.isUser = false;
    }
  } 
}

export default ProfileCtrl;
