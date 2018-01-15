angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("auth/auth.html","<div class=\"auth-page\">\n  <div class=\"container page\">\n    <div class=\"row\" style=\"text-align:center!important;\">\n\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n        <h1 class=\"text-xs-center\" ng-bind=\"::$ctrl.title\"></h1>\n        <p class=\"text-xs-center\">\n          <a ui-sref=\"app.login\"\n            ng-show=\"$ctrl.authType === \'register\'\">\n            Have an account?\n          </a>\n          <a ui-sref=\"app.register\"\n            ng-show=\"$ctrl.authType === \'login\'\">\n            Need an account?\n          </a>\n        </p>\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"control-group\" ng-show=\"$ctrl.authType === \'register\'\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Username\"\n                ng-model=\"$ctrl.formData.username\" />\n            </fieldset>\n\n            <fieldset class=\"control-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"email\"\n                placeholder=\"Email\"\n                ng-model=\"$ctrl.formData.email\" />\n            </fieldset>\n\n            <fieldset class=\"control-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"password\"\n                placeholder=\"Password\"\n                ng-model=\"$ctrl.formData.password\" />\n            </fieldset>\n\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\"\n              ng-bind=\"::$ctrl.title\">\n            </button>\n            <a target=\"_self\" href=\"http://localhost:8080/api/facebook\">Facebook</a>\n            <a target=\"_self\" href=\"http://localhost:8080/api/twitter\">Twitter</a>\n          </fieldset>\n        </form>\n      </div>\n    <li class=\"nav-item\">\n      <a ui-sref-active=\"active\" ui-sref=\"app.register\" style=\"color:red!important;\">Twitter</a>\n  </li>\n    </div>\n  </div>\n</div>\n</div>\n");
$templateCache.put("components/list-errors.html","<ul class=\"error-messages\" ng-show=\"$ctrl.errors\">\n  <div ng-repeat=\"(field, errors) in $ctrl.errors\">\n    <li ng-repeat=\"error in errors\">\n      {{field}} {{error}}\n    </li>\n  </div>\n</ul>\n");
$templateCache.put("contact/contact.html","<br><br>\n<!-- <script src=\"js/contact/bootstrap-button.js\"></script> -->\n<!-- <script src=\"frontend//bootstrap-button.js\"></script> -->\n<div class=\"container\">\n    <form id=\"contact_form\" name=\"contact_form\" class=\"form-contact\">\n        <br>\n        <h2 class=\"form-contact-heading\">Contacto</h2>\n\n        <div class=\"control-group\">\n            <input required ng-model=\"scope.inputName\" type=\"text\" id=\"inputName\" name=\"inputName\" placeholder=\"Nombre\" class=\"input-block-level\" dir=\"auto\" maxlength=\"100\">\n            <span class=\"text-danger\" ng-show=\"contact_form.inputName.$error.required && (contact_form.inputName.$dirty || contact_form.inputName.$touched)\">El campo es obligatorio</span>\n        </div>\n        <div class=\"control-group\">\n            <input required ng-model=\"scope.inputEmail\" type=\"email\" id=\"inputEmail\" name=\"inputEmail\" placeholder=\"Email *\" class=\"input-block-level\" maxlength=\"100\" ng-pattern=\"/^[a-z0-9!#$%&\'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*$/i\">\n            <span class=\"text-danger\" ng-show=\"contact_form.inputEmail.$error.required && (contact_form.inputEmail.$dirty || contact_form.inputEmail.$touched)\">El campo es obligatorio</span>\n            <span class=\"text-danger\" ng-show=\"contact_form.inputEmail.$error.email\">Email no valido</span>\n        </div>\n        <div class=\"control-group\">\n            <label class=\"cmbConsulta\" for=\"sel1\">Tema de Consulta</label>\n            <select ng-model=\"scope.inputSubject\" class=\"form-control\" id=\"inputSubject\" name=\"inputSubject\" title=\"Choose subject\">\n                <option value=\"\">- Por favor, seleccione un tema de consulta -</option>\n                <option value=\"actividad\">Info relativa a alguna actividad</option>\n                <option value=\"dpto\">Contacta con nuestro dpto de actividades</option>\n                <option value=\"trabaja\">Trabaja con nosotros</option>\n                <option value=\"sugerencias\">Haznos sugerencias</option>\n                <option value=\"reclamaciones\">Atendemos tus reclamaciones</option>\n                <option value=\"novedades\">Te avisamos de nuestras novedades</option>\n                <option value=\"diferente\">Algo diferente</option>\n            </select>\n        </div>\n        <div class=\"control-group\">\n            <textarea required ng-model=\"scope.inputMessage\" class=\"input-block-level\" rows=\"4\" id=\"inputMessage\" name=\"inputMessage\" placeholder=\"Introduzca aqui su mensaje *\" style=\"max-width: 100%;\" dir=\"auto\"></textarea>\n            <span class=\"text-danger\" ng-show=\"contact_form.inputMessage.$error.required && (contact_form.inputMessage.$dirty || contact_form.inputMessage.$touched)\">El campo es obligatorio</span>\n        </div>\n\n        <input type=\"hidden\" name=\"token\" value=\"contact_form\" />\n        \n        <input class=\"btn btn-primary\" type=\"submit\" name=\"submit\" id=\"submitBtn\" value=\"Enviar\" \n        ng-show=\"contact_form.inputName.$valid && contact_form.inputEmail.$valid && contact_form.inputMessage.$valid\" \n        ng-click=\"scope.SubmitContact()\"/>\n\n        \n        <div id=\"resultMessage\" ng-class=\"class\">{{message}}</div>\n    </form>\n</div> ");
$templateCache.put("editor/editor.html","<div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1 col-xs-12\">\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form>\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                ng-model=\"$ctrl.article.title\"\n                type=\"text\"\n                placeholder=\"Article Title\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                ng-model=\"$ctrl.article.description\"\n                type=\"text\"\n                placeholder=\"What\'s this article about?\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control\"\n                rows=\"8\"\n                ng-model=\"$ctrl.article.body\"\n                placeholder=\"Write your article (in markdown)\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"Enter tags\"\n                ng-model=\"$ctrl.tagField\"\n                ng-keyup=\"$event.keyCode == 13 && $ctrl.addTag()\" />\n\n              <div class=\"tag-list\">\n                <span ng-repeat=\"tag in $ctrl.article.tagList\"\n                  class=\"tag-default tag-pill\">\n                  <i class=\"ion-close-round\" ng-click=\"$ctrl.removeTag(tag)\"></i>\n                  {{ tag }}\n                </span>\n              </div>\n            </fieldset>\n\n            <button class=\"btn btn-lg pull-xs-right btn-primary\" type=\"button\" ng-click=\"$ctrl.submit()\">\n              Publish Article\n            </button>\n\n          </fieldset>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("home/home.html","<!-- Banner -->\n<section id=\"banner\">\n	<div class=\"inner\">\n		<h2>Spectral</h2>\n		<ul class=\"actions\">\n			<li><a href=\"#/\" class=\"button special\">Activate</a></li>\n		</ul>\n	</div>\n	<a href=\"#products\" class=\"more scrolly\">Componentes</a>\n</section>\n\n<!-- One -->\n<section id=\"one\" class=\"wrapper style1 special\">\n	<div class=\"inner\">\n		<input type=\"text\" name=\"\" ng-model=\"keywords\" id=\"\" placeholder=\"Search your favorite products\">\n		<input type=\"button\" class=\"button fit\" ng-click=\"search()\" value=\"Search\">\n	</div>\n</section>\n\n<!-- Three -->\n<section id=\"three\" class=\"wrapper style3 special\">\n	<div class=\"inner\">\n		<h1>Categorias</h1>\n		<ul class=\"features\">\n			<li><a ui-sref=\"app.list({type:\'processadores\'})\">\n				<h1>Procesadores</h1>\n			</a></li>\n			<li><a ui-sref=\"app.list({type: \'placaBase\'})\">\n				<h1>Placas Base</h1>\n			</a></li>\n			<li><a ui-sref=\"app.list({type: \'discoDuro\'})\">\n				<h1>Discos Duros</h1>\n			</a></li>\n			<li><a ui-sref=\"app.list({type: \'tarjetaGrafica\'})\">\n				<h1>Gráficas</h1>\n			</a></li>\n			<li><a ui-sref=\"app.list({type: \'ram\'})\">\n				<h1>Memoria RAM</h1>\n			</a></li>\n			<li><a ui-sref=\"app.list({type: \'teclado\'})\">\n				<h1>Teclado</h1>\n			</a></li>\n			<li><a ui-sref=\"app.list({type: \'disquetera\'})\">\n				<h1>Disqueteras</h1>\n			</a></li>\n			<li><a ui-sref=\"app.list({type: \'multilectores\'})\">\n				<h1>Multilectores</h1>\n			</a></li>\n			<li><a ui-sref=\"app.list({type: \'sonido\'})\">\n				<h1>Sonido</h1>\n			</a></li>\n			<li><a ui-sref=\"app.list({type: \'torres\'})\">\n				<h1>Torres</h1>\n			</a></li>\n			<li><a ui-sref=\"app.list({type: \'ventilacion\'})\">\n				<h1>Ventilación</h1>\n			</a></li>\n			<li><a ui-sref=\"app.list({type: \'fuentes\'})\">\n				<h1>Fuentes</h1>\n			</a></li>\n		</ul>\n	</div>\n</section>\n\n\n\n<!-- Two -->\n<section id=\"two\" class=\"wrapper alt style2\">\n	<section class=\"spotlight\">\n		<div class=\"image\"></div><div class=\"content\">\n			<h2>Magna primis lobortis<br />\n			sed ullamcorper</h2>\n			<p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>\n		</div>\n	</section>\n	<section class=\"spotlight\">\n		<div class=\"image\"></div><div class=\"content\">\n			<h2>Tortor dolore feugiat<br />\n			elementum magna</h2>\n			<p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>\n		</div>\n	</section>\n	<section class=\"spotlight\">\n		<div class=\"image\"></div><div class=\"content\">\n			<h2>Augue eleifend aliquet<br />\n			sed condimentum</h2>\n			<p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>\n		</div>\n	</section>\n</section>\n\n\n\n<!-- CTA -->\n<section id=\"cta\" class=\"wrapper style4\">\n	<div class=\"inner\">\n		<header>\n			<h2>Arcue ut vel commodo</h2>\n			<p>Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.</p>\n		</header>\n		<ul class=\"actions vertical\">\n			<li><a href=\"#\" class=\"button fit special\">Activate</a></li>\n			<li><a href=\"#\" class=\"button fit\">Learn More</a></li>\n		</ul>\n	</div>\n</section>");
$templateCache.put("list/list.details.html","\n<div class=\"details-page\" >\n    <div class=\"contentof\">\n    <div ng-repeat=\"c in scope.computer\">\n          <div class=\"imageof\"><img src=\"{{c.picture}}\" alt=\"\" height=\"150px\" width=\"150px\"></div>\n          <div class=\"nombre\">{{c.name}}</div>\n          <div class=\"nombre\">{{c.date}}</div>\n          <div class=\"nombre\">{{c.marca}}</div>\n          <div class=\"nombre\">{{c.status}}</div>\n          <div class=\"nombre\">{{c.type}}</div>\n            <div style=\"max-width:50%; max-height:50%;\" map-lazy-load=\"https://maps.google.com/maps/api/js\">\n              <ng-map default-style=\"true\"  zoom=\"7\" center=\"[38.3821778, -0.577064]\"> \n                    <marker ng-repeat=\"a in c.shop\"\n                    position=\"[{{a.latitude}}, {{a.longitude}}]\"\n                    data=\"{{data[$index]}}\"\n                    on-click=\"map.showInfoWindow(event, \'infow{{a.name}}{{$index}}\')\";\n                    title=\"pos: {{a.latitude}}, {{a.longitude}}\"></marker>\n                    <info-window id=\"infow{{a.name}}{{$index}}\" ng-repeat=\"a in c.shop\">\n                      <div style=\"color:black\" >\n                        Name: {{a.name}}<br/>\n                        <!-- latitude; {{a.latitude}}<br>\n                        longitude: {{a.longitude}}<br> -->\n                        Stock: {{a.stock}} Unidades\n                      </div>\n                    </info-window>\n              </ng-map>\n            </div>\n            <form action=\"http://localhost:8080/api/charge\" method=\"POST\">\n              <input type=\"hidden\" name=\"payment\" value=\"{{c._id}}\">\n              <script\n              src=\"https://checkout.stripe.com/checkout.js\" \n              class=\"stripe-button\"\n              data-key=\"pk_test_WMqiVRs7QV6k0qzCU7FCl3Ji\"\n              data-amount=\"320\"\n              data-name=\"Pay with Stripe on FarmixShop\"\n              data-description=\"A VIP (3.00€)\"\n              data-image=\"https://stripe.com/img/documentation/checkout/marketplace.png\"\n              data-label=\"Pay with Card Credit\"\n              data-locale=\"auto\"\n              data-currency=\"eur\">\n              </script>\n          </form>\n     </div>\n    \n  </div>\n \n</div>\n");
$templateCache.put("list/list.html","<div class=\"list-page\" >\n  <div  style=\"padding-top:5%;\" class=\"ofertas\"></div>\n  <div  ng-repeat=\"c in scope.computer\">\n    <div class=\"tarjeta\">\n        <div class=\"nombre\">{{c.name}}</div>\n        <div class=\"imagen\"><img src=\"{{c.picture}}\" alt=\"\" height=\"150px\" width=\"150px\"></div>\n        <a  ui-sref-active=\"active\" ui-sref=\"app.details({ id: c._id})\" class=\"listb\"><span>Details</span></a>        \n        <div class=\"morei\">\n            <div> Precio- {{c.price}} </div>\n            <div> Tipo- {{c.type}} </div>\n            <div> Marca- {{c.marca}} </div>\n        </div>\n    </div>\n</div>\n</div>");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n\n<div ui-view></div>\n\n<app-footer></app-footer>\n");
$templateCache.put("layout/footer.html","<div>\n  <footer id=\"footer\">\n      <ul class=\"icons\">\n          <li><a href=\"#/\" class=\"icon fa-twitter\"><span class=\"label\">Twitter</span></a></li>\n          <li><a href=\"#/\" class=\"icon fa-facebook\"><span class=\"label\">Facebook</span></a></li>\n          <li><a href=\"#/\" class=\"icon fa-instagram\"><span class=\"label\">Instagram</span></a></li>\n          <li><a href=\"#/\" class=\"icon fa-dribbble\"><span class=\"label\">Dribbble</span></a></li>\n          <li><a href=\"#/\" class=\"icon fa-envelope-o\"><span class=\"label\">Email</span></a></li>\n      </ul>\n      <ul class=\"copyright\">\n          <li>&copy; Untitled</li><li>Design: <a href=\"http://html5up.net\">HTML5 UP</a></li>\n      </ul>\n  </footer>\n</div>");
$templateCache.put("layout/header.html","    <!-- Header -->\n    <div>\n      <header id=\"header\" class=\"alt\">\n          <h1><a ui-sref=\"app.home\">Spectral</a></h1>\n          <nav id=\"nav\" > \n            <ul show-authed=\"false\" class=\"nav navbar-nav pull-xs-right\">\n                <li class=\"nav-item\">\n                    <a  ui-sref-active=\"active\" ui-sref=\"app.contact\"><span>Contact</span></a>\n                </li>      \n           \n                <li class=\"nav-item\">\n                    <a  ui-sref-active=\"active\" ui-sref=\"app.home\" ><span>Home</span></a>\n                </li>\n                  \n                <li class=\"nav-item\">\n                    <a  ui-sref-active=\"active\" ui-sref=\"app.list\"><span>Ofertas</span></a>\n                </li>\n                \n                <li class=\"nav-item\">\n                    <a ui-sref-active=\"active\" ui-sref=\"app.register\" style=\"color:red!important;\">Sign Up</a>\n                </li>\n\n                <li class=\"nav-item\">\n                    <a ui-sref-active=\"active\" ui-sref=\"app.login\" style=\"color:red!important;\">Log in</a>\n                </li>\n            </ul>\n               \n            <ul show-authed=\"true\" class=\"nav navbar-nav pull-xs-right\">\n            \n                <li class=\"nav-item\">\n                    <a  ui-sref-active=\"active\" ui-sref=\"app.contact\"><span>Contact</span></a>\n                </li>   \n\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.home\"> Home</a>\n                </li>\n\n                <li class=\"nav-item\">\n                    <a  ui-sref-active=\"active\" ui-sref=\"app.list\"><span>Ofertas</span></a>\n                 </li>\n\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.profile.main({ username: $ctrl.currentUser.username})\">\n                        <img ng-src=\"{{$ctrl.currentUser.image}}\" class=\"user-pic\" />\n                        {{ $ctrl.currentUser.username }}\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                        <a  ui-sref-active=\"active\" ui-sref=\"app.home\" class=\"btn btn-outline-danger\" ng-click=\"$ctrl.logout()\">\n                                <span>Log Out</span>\n                        </a>\n                    </li>\n            </ul>       \n          </nav>\n      </header>\n  </div> \n\n ");
$templateCache.put("profile/profile-articles.html","<article-list limit=\"5\" list-config=\"$ctrl.listConfig\"></article-list>\n");
$templateCache.put("profile/profile.html","<div class=\"profile-page\">\n\n  <!-- User\'s basic info & action buttons -->\n  <div class=\"user-info\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div style=\"padding-top:5%; text-align:center;\">\n\n          <img ng-src=\"{{::$ctrl.profile.image}}\" class=\"user-img\" />\n          <h4 ng-bind=\"::$ctrl.profile.username\"></h4>\n          <p ng-bind=\"::$ctrl.profile.email\"></p>\n\n          <a ui-sref=\"app.settings\"\n            class=\"btn btn-sm btn-outline-secondary action-btn\"\n            ng-show=\"$ctrl.isUser\">\n            <i class=\"ion-gear-a\"></i> Edit Profile Settings\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("settings/settings.html","<div class=\"settings-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n\n        <h1 class=\"text-xs-center\">Your Settings</h1>\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\">\n                \n                <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"URL of profile picture\"\n                ng-model=\"$ctrl.formData.image\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Username\"\n                ng-minlength=\"2\" maxlength=\"100\"\n                ng-model=\"$ctrl.formData.username\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n                <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Name\"\n                ng-minlength=\"2\" maxlength=\"100\"\n                ng-model=\"$ctrl.formData.name\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n                <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Apellidos\"\n                ng-minlength=\"2\" maxlength=\"100\"\n                ng-model=\"$ctrl.formData.apellidos\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n                <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Dni\"\n                ng-minlength=\"8\" maxlength=\"9\"\n                ng-model=\"$ctrl.formData.dni\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"email\"\n                placeholder=\"Email\"\n                ng-model=\"$ctrl.formData.email\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"password\"\n                placeholder=\"New Password\"\n                ng-model=\"$ctrl.formData.password\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\" calendar required\n                placeholder=\"Date Birthday\"\n                ng-pattern=\"/(0[1-9]|1[0-9]|2[0-9]|3[01])/(0[1-9]|1[012])/[0-9]{4}/\"\n                 class=\"datepicker\" dir=\"auto\" maxlength=\"100\"\n                ng-model=\"$ctrl.formData.date_birthday\"/>\n            </fieldset>\n\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\">\n              Update Settings\n            </button>\n\n          </fieldset>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("components/article-helpers/article-list.html","<article-preview\n  article=\"article\"\n  ng-repeat=\"article in $ctrl.list\">\n</article-preview>\n\n<div class=\"article-preview\"\n  ng-hide=\"!$ctrl.loading\">\n  Loading articles...\n</div>\n\n<div class=\"article-preview\"\n  ng-show=\"!$ctrl.loading && !$ctrl.list.length\">\n  No articles are here... yet.\n</div>\n\n<list-pagination\n total-pages=\"$ctrl.listConfig.totalPages\"\n current-page=\"$ctrl.listConfig.currentPage\"\n ng-hide=\"$ctrl.listConfig.totalPages <= 1\">\n</list-pagination>\n");
$templateCache.put("components/article-helpers/article-meta.html","<div class=\"article-meta\">\n  <a ui-sref=\"app.profile.main({ username:$ctrl.article.author.username })\">\n    <img ng-src=\"{{$ctrl.article.author.image}}\" />\n  </a>\n\n  <div class=\"info\">\n    <a class=\"author\"\n      ui-sref=\"app.profile.main({ username:$ctrl.article.author.username })\"\n      ng-bind=\"$ctrl.article.author.username\">\n    </a>\n    <span class=\"date\"\n      ng-bind=\"$ctrl.article.createdAt | date: \'longDate\' \">\n    </span>\n  </div>\n\n  <ng-transclude></ng-transclude>\n</div>\n");
$templateCache.put("components/article-helpers/article-preview.html","<div class=\"article-preview\">\n  <article-meta article=\"$ctrl.article\">\n    <favorite-btn\n      article=\"$ctrl.article\"\n      class=\"pull-xs-right\">\n      {{$ctrl.article.favoritesCount}}\n    </favorite-btn>\n  </article-meta>\n\n  <a ui-sref=\"app.article({ slug: $ctrl.article.slug })\" class=\"preview-link\">\n    <h1 ng-bind=\"$ctrl.article.title\"></h1>\n    <p ng-bind=\"$ctrl.article.description\"></p>\n    <span>Read more...</span>\n    <ul class=\"tag-list\">\n      <li class=\"tag-default tag-pill tag-outline\"\n        ng-repeat=\"tag in $ctrl.article.tagList\">\n        {{tag}}\n      </li>\n    </ul>\n  </a>\n</div>\n");
$templateCache.put("components/article-helpers/list-pagination.html","<nav>\n  <ul class=\"pagination\">\n    <li class=\"page-item\"\n      ng-class=\"{active: pageNumber === $ctrl.currentPage }\"\n      ng-repeat=\"pageNumber in $ctrl.pageRange($ctrl.totalPages)\"\n      ng-click=\"$ctrl.changePage(pageNumber)\">\n\n      <a class=\"page-link\" href=\"\">{{ pageNumber }}</a>\n    </li>\n  </ul>\n</nav>\n");
$templateCache.put("components/buttons/favorite-btn.html","<button class=\"btn btn-sm\"\n  ng-class=\"{ \'disabled\' : $ctrl.isSubmitting,\n              \'btn-outline-primary\': !$ctrl.article.favorited,\n              \'btn-primary\': $ctrl.article.favorited }\"\n  ng-click=\"$ctrl.submit()\">\n  <i class=\"ion-heart\"></i> <ng-transclude></ng-transclude>\n</button>\n");
$templateCache.put("components/buttons/follow-btn.html","<button\n  class=\"btn btn-sm action-btn\"\n  ng-class=\"{ \'disabled\': $ctrl.isSubmitting,\n              \'btn-outline-secondary\': !$ctrl.user.following,\n              \'btn-secondary\': $ctrl.user.following }\"\n  ng-click=\"$ctrl.submit()\">\n  <i class=\"ion-plus-round\"></i>\n  &nbsp;\n  {{ $ctrl.user.following ? \'Unfollow\' : \'Follow\' }} {{ $ctrl.user.username }}\n</button>\n");}]);