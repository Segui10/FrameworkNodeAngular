import angular from 'angular';

// Create the module where our functionality can attach to
let ContactModule = angular.module('app.contact', []);

// Include our UI-Router config settings
import ContactConfig from './contact.config';
ContactModule.config(ContactConfig);

// Controllers
import ContactCtrl from './contact.controller';
ContactModule.controller('ContactCtrl', ContactCtrl);

// import contactservice from '../services/contact-service';
// ContactModule.controller('ContactCtrl',contactservice);

export default ContactModule;
