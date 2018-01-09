import angular from 'angular';

// Create the module where our functionality can attach to
let listModule = angular.module('app.list', []);

// Include our UI-Router config settings
import ListConfig from './list.config';
listModule.config(ListConfig);

// Controllers
import ListCtrl from './list.controller';
listModule.controller('ListCtrl', ListCtrl);

import DetailsCtrl from './list.details.controller';
listModule.controller('DetailsCtrl', DetailsCtrl);

export default listModule;

