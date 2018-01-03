angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("article/article-actions.html","<article-meta article=\"$ctrl.article\">\n\n  <span ng-show=\"$ctrl.canModify\">\n    <a class=\"btn btn-sm btn-outline-secondary\"\n      ui-sref=\"app.editor({ slug: $ctrl.article.slug })\">\n      <i class=\"ion-edit\"></i> Edit Article\n    </a>\n\n    <button class=\"btn btn-sm btn-outline-danger\"\n      ng-class=\"{disabled: $ctrl.isDeleting}\"\n      ng-click=\"$ctrl.deleteArticle()\">\n      <i class=\"ion-trash-a\"></i> Delete Article\n    </button>\n  </span>\n\n  <span ng-hide=\"$ctrl.canModify\">\n    <follow-btn user=\"$ctrl.article.author\"></follow-btn>\n    <favorite-btn article=\"$ctrl.article\">\n      {{ $ctrl.article.favorited ? \'Unfavorite\' : \'Favorite\' }} Article <span class=\"counter\">({{$ctrl.article.favoritesCount}})</span>\n    </favorite-btn>\n  </span>\n\n</article-meta>\n");
$templateCache.put("article/article.html","<div class=\"article-page\">\n\n  <!-- Banner for article title, action buttons -->\n  <div class=\"banner\">\n    <div class=\"container\">\n\n      <h1 ng-bind=\"::$ctrl.article.title\"></h1>\n\n      <div class=\"article-meta\">\n        <!-- Show author info + favorite & follow buttons -->\n        <article-actions article=\"$ctrl.article\"></article-actions>\n\n      </div>\n\n    </div>\n  </div>\n\n\n\n  <!-- Main view. Contains article html and comments -->\n  <div class=\"container page\">\n\n    <!-- Article\'s HTML & tags rendered here -->\n    <div class=\"row article-content\">\n      <div class=\"col-xs-12\">\n\n        <div ng-bind-html=\"::$ctrl.article.body\"></div>\n\n        <ul class=\"tag-list\">\n          <li class=\"tag-default tag-pill tag-outline\"\n            ng-repeat=\"tag in ::$ctrl.article.tagList\">\n            {{ tag }}\n          </li>\n        </ul>\n\n      </div>\n    </div>\n\n    <hr />\n\n    <div class=\"article-actions\">\n\n      <!-- Show author info + favorite & follow buttons -->\n      <article-actions article=\"$ctrl.article\"></article-actions>\n\n    </div>\n\n    <!-- Comments section -->\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-8 offset-md-2\">\n\n        <div show-authed=\"true\">\n          <list-errors from=\"$crl.commentForm.errors\"></list-errors>\n          <form class=\"card comment-form\" ng-submit=\"$ctrl.addComment()\">\n            <fieldset ng-disabled=\"$ctrl.commentForm.isSubmitting\">\n              <div class=\"card-block\">\n                <textarea class=\"form-control\"\n                  placeholder=\"Write a comment...\"\n                  rows=\"3\"\n                  ng-model=\"$ctrl.commentForm.body\"></textarea>\n              </div>\n              <div class=\"card-footer\">\n                <img ng-src=\"{{::$ctrl.currentUser.image}}\" class=\"comment-author-img\" />\n                <button class=\"btn btn-sm btn-primary\" type=\"submit\">\n                 Post Comment\n                </button>\n              </div>\n            </fieldset>\n          </form>\n        </div>\n\n        <div show-authed=\"false\">\n          <a ui-sref=\"app.login\">Sign in</a> or <a ui-sref=\"app.register\">sign up</a> to add comments on this article.\n        </div>\n\n        <comment ng-repeat=\"cmt in $ctrl.comments\"\n          data=\"cmt\"\n          delete-cb=\"$ctrl.deleteComment(cmt.id, $index)\">\n        </comment>\n\n\n      </div>\n    </div>\n\n  </div>\n\n\n\n</div>\n");
$templateCache.put("article/comment.html","<div class=\"card\">\n  <div class=\"card-block\">\n    <p class=\"card-text\" ng-bind=\"::$ctrl.data.body\"></p>\n  </div>\n  <div class=\"card-footer\">\n    <a class=\"comment-author\" ui-sref=\"app.profile.main({ username: $ctrl.data.author.username })\">\n      <img ng-src=\"{{::$ctrl.data.author.image}}\" class=\"comment-author-img\" />\n    </a>\n    &nbsp;\n    <a class=\"comment-author\" ui-sref=\"app.profile.main({ username: $ctrl.data.author.username })\" ng-bind=\"::$ctrl.data.author.username\">\n    </a>\n    <span class=\"date-posted\"\n      ng-bind=\"::$ctrl.data.createdAt | date: \'longDate\'\">\n    </span>\n    <span class=\"mod-options\" ng-show=\"$ctrl.canModify\">\n      <i class=\"ion-trash-a\" ng-click=\"$ctrl.deleteCb()\"></i>\n    </span>\n  </div>\n</div>\n");
$templateCache.put("auth/auth.html","<div class=\"auth-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n        <h1 class=\"text-xs-center\" ng-bind=\"::$ctrl.title\"></h1>\n        <p class=\"text-xs-center\">\n          <a ui-sref=\"app.login\"\n            ng-show=\"$ctrl.authType === \'register\'\">\n            Have an account?\n          </a>\n          <a ui-sref=\"app.register\"\n            ng-show=\"$ctrl.authType === \'login\'\">\n            Need an account?\n          </a>\n        </p>\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\" ng-show=\"$ctrl.authType === \'register\'\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Username\"\n                ng-model=\"$ctrl.formData.username\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"email\"\n                placeholder=\"Email\"\n                ng-model=\"$ctrl.formData.email\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"password\"\n                placeholder=\"Password\"\n                ng-model=\"$ctrl.formData.password\" />\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\"\n              ng-bind=\"::$ctrl.title\">\n            </button>\n\n          </fieldset>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>\n");
$templateCache.put("components/list-errors.html","<ul class=\"error-messages\" ng-show=\"$ctrl.errors\">\n  <div ng-repeat=\"(field, errors) in $ctrl.errors\">\n    <li ng-repeat=\"error in errors\">\n      {{field}} {{error}}\n    </li>\n  </div>\n</ul>\n");
$templateCache.put("contact/contact.html","<br><br>\n<script src=\"frontend/modules/contact/view/lib/bootstrap-button.js\"></script>\n<div class=\"container\">\n    <form id=\"contact_form\" name=\"contact_form\" class=\"form-contact\">\n        <br>\n        <h2 class=\"form-contact-heading\">Contacto</h2>\n\n        <div class=\"control-group\">\n            <input required ng-model=\"scope.inputName\" type=\"text\" id=\"inputName\" name=\"inputName\" placeholder=\"Nombre\" class=\"input-block-level\" dir=\"auto\" maxlength=\"100\">\n            <span class=\"text-danger\" ng-show=\"contact_form.inputName.$error.required && (contact_form.inputName.$dirty || contact_form.inputName.$touched)\">El campo es obligatorio</span>\n        </div>\n        <div class=\"control-group\">\n            <input required ng-model=\"scope.inputEmail\" type=\"email\" id=\"inputEmail\" name=\"inputEmail\" placeholder=\"Email *\" class=\"input-block-level\" maxlength=\"100\" ng-pattern=\"/^[a-z0-9!#$%&\'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*$/i\">\n            <span class=\"text-danger\" ng-show=\"contact_form.inputEmail.$error.required && (contact_form.inputEmail.$dirty || contact_form.inputEmail.$touched)\">El campo es obligatorio</span>\n            <span class=\"text-danger\" ng-show=\"contact_form.inputEmail.$error.email\">Email no valido</span>\n        </div>\n        <div class=\"control-group\">\n            <label class=\"cmbConsulta\" for=\"sel1\">Tema de Consulta</label>\n            <select ng-model=\"scope.inputSubject\" class=\"form-control\" id=\"inputSubject\" name=\"inputSubject\" title=\"Choose subject\">\n                <option value=\"\">- Por favor, seleccione un tema de consulta -</option>\n                <option value=\"actividad\">Info relativa a alguna actividad</option>\n                <option value=\"dpto\">Contacta con nuestro dpto de actividades</option>\n                <option value=\"trabaja\">Trabaja con nosotros</option>\n                <option value=\"sugerencias\">Haznos sugerencias</option>\n                <option value=\"reclamaciones\">Atendemos tus reclamaciones</option>\n                <option value=\"novedades\">Te avisamos de nuestras novedades</option>\n                <option value=\"diferente\">Algo diferente</option>\n            </select>\n        </div>\n        <div class=\"control-group\">\n            <textarea required ng-model=\"scope.inputMessage\" class=\"input-block-level\" rows=\"4\" id=\"inputMessage\" name=\"inputMessage\" placeholder=\"Introduzca aqui su mensaje *\" style=\"max-width: 100%;\" dir=\"auto\"></textarea>\n            <span class=\"text-danger\" ng-show=\"contact_form.inputMessage.$error.required && (contact_form.inputMessage.$dirty || contact_form.inputMessage.$touched)\">El campo es obligatorio</span>\n        </div>\n\n        <input type=\"hidden\" name=\"token\" value=\"contact_form\" />\n        \n        <input class=\"btn btn-primary\" type=\"submit\" name=\"submit\" id=\"submitBtn\" value=\"Enviar\" \n        ng-show=\"contact_form.inputName.$valid && contact_form.inputEmail.$valid && contact_form.inputMessage.$valid\" \n        ng-click=\"scope.SubmitContact()\"/>\n\n        \n        <div id=\"resultMessage\" ng-class=\"class\">{{message}}</div>\n    </form>\n</div> ");
$templateCache.put("editor/editor.html","<div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1 col-xs-12\">\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form>\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                ng-model=\"$ctrl.article.title\"\n                type=\"text\"\n                placeholder=\"Article Title\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                ng-model=\"$ctrl.article.description\"\n                type=\"text\"\n                placeholder=\"What\'s this article about?\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control\"\n                rows=\"8\"\n                ng-model=\"$ctrl.article.body\"\n                placeholder=\"Write your article (in markdown)\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"Enter tags\"\n                ng-model=\"$ctrl.tagField\"\n                ng-keyup=\"$event.keyCode == 13 && $ctrl.addTag()\" />\n\n              <div class=\"tag-list\">\n                <span ng-repeat=\"tag in $ctrl.article.tagList\"\n                  class=\"tag-default tag-pill\">\n                  <i class=\"ion-close-round\" ng-click=\"$ctrl.removeTag(tag)\"></i>\n                  {{ tag }}\n                </span>\n              </div>\n            </fieldset>\n\n            <button class=\"btn btn-lg pull-xs-right btn-primary\" type=\"button\" ng-click=\"$ctrl.submit()\">\n              Publish Article\n            </button>\n\n          </fieldset>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("home/home.html","<!-- Banner -->\n<section id=\"banner\">\n	<div class=\"inner\">\n		<h2>Spectral</h2>\n		<ul class=\"actions\">\n			<li><a href=\"#/\" class=\"button special\">Activate</a></li>\n		</ul>\n	</div>\n	<a href=\"#products\" class=\"more scrolly\">Componentes</a>\n</section>\n\n<!-- One -->\n<section id=\"one\" class=\"wrapper style1 special\">\n	<div class=\"inner\">\n		<input type=\"text\" name=\"\" ng-model=\"keywords\" id=\"\" placeholder=\"Search your favorite products\">\n		<input type=\"button\" class=\"button fit\" ng-click=\"search()\" value=\"Search\">\n	</div>\n</section>\n\n<!-- Three -->\n<section id=\"three\" class=\"wrapper style3 special\">\n	<div class=\"inner\">\n		<h1>Categorias</h1>\n		<ul class=\"features\">\n			<li><a href=\"#/oferta/procesador\" >\n				<h1>Procesadores</h1>\n			</a></li>\n			<li><a href=\"#/oferta/placaBase\">\n				<h1>Placas Base</h1>\n			</a></li>\n			<li><a href=\"#/oferta/discoDuro\">\n				<h1>Discos Duros</h1>\n			</a></li>\n			<li><a href=\"#/oferta/tarjetaGrafica\">\n				<h1>Gráficas</h1>\n			</a></li>\n			<li><a href=\"#/oferta/ram\">\n				<h1>Memoria RAM</h1>\n			</a></li>\n			<li><a href=\"#/oferta/grabadora\">\n				<h1>Grabadoras</h1>\n			</a></li>\n			<li><a href=\"#/oferta/disquetera\">\n				<h1>Disqueteras</h1>\n			</a></li>\n			<li><a href=\"#/oferta/multilector\">\n				<h1>Multilectores</h1>\n			</a></li>\n			<li><a href=\"#/oferta/tarjetaSonido\">\n				<h1>Sonido</h1>\n			</a></li>\n			<li><a href=\"#/oferta/torre\">\n				<h1>Torres</h1>\n			</a></li>\n			<li><a href=\"#/oferta/ventilacion\">\n				<h1>Ventilación</h1>\n			</a></li>\n			<li><a href=\"#/oferta/fuenteAlimentacion\">\n				<h1>Fuentes</h1>\n			</a></li>\n		</ul>\n	</div>\n</section>\n\n\n\n<!-- Two -->\n<section id=\"two\" class=\"wrapper alt style2\">\n	<section class=\"spotlight\">\n		<div class=\"image\"></div><div class=\"content\">\n			<h2>Magna primis lobortis<br />\n			sed ullamcorper</h2>\n			<p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>\n		</div>\n	</section>\n	<section class=\"spotlight\">\n		<div class=\"image\"></div><div class=\"content\">\n			<h2>Tortor dolore feugiat<br />\n			elementum magna</h2>\n			<p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>\n		</div>\n	</section>\n	<section class=\"spotlight\">\n		<div class=\"image\"></div><div class=\"content\">\n			<h2>Augue eleifend aliquet<br />\n			sed condimentum</h2>\n			<p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>\n		</div>\n	</section>\n</section>\n\n\n\n<!-- CTA -->\n<section id=\"cta\" class=\"wrapper style4\">\n	<div class=\"inner\">\n		<header>\n			<h2>Arcue ut vel commodo</h2>\n			<p>Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.</p>\n		</header>\n		<ul class=\"actions vertical\">\n			<li><a href=\"#\" class=\"button fit special\">Activate</a></li>\n			<li><a href=\"#\" class=\"button fit\">Learn More</a></li>\n		</ul>\n	</div>\n</section>");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n\n<div ui-view></div>\n\n<app-footer></app-footer>\n");
$templateCache.put("layout/footer.html","<div>\n  <footer id=\"footer\">\n      <ul class=\"icons\">\n          <li><a href=\"#/\" class=\"icon fa-twitter\"><span class=\"label\">Twitter</span></a></li>\n          <li><a href=\"#/\" class=\"icon fa-facebook\"><span class=\"label\">Facebook</span></a></li>\n          <li><a href=\"#/\" class=\"icon fa-instagram\"><span class=\"label\">Instagram</span></a></li>\n          <li><a href=\"#/\" class=\"icon fa-dribbble\"><span class=\"label\">Dribbble</span></a></li>\n          <li><a href=\"#/\" class=\"icon fa-envelope-o\"><span class=\"label\">Email</span></a></li>\n      </ul>\n      <ul class=\"copyright\">\n          <li>&copy; Untitled</li><li>Design: <a href=\"http://html5up.net\">HTML5 UP</a></li>\n      </ul>\n  </footer>\n</div>");
$templateCache.put("layout/header.html","    <!-- Header -->\n    <div>\n      <header id=\"header\" class=\"alt\">\n          <h1><a href=\"index.html\">Spectral</a></h1>\n          <nav id=\"nav\">\n                  <a  ui-sref-active=\"active\" ui-sref=\"app.contact\" class=\"menuToggle\"><span>Contact</span></a>\n                  <a  ui-sref-active=\"active\" ui-sref=\"app.home\" class=\"menuToggle\"><span>Home</span></a>\n                  <a  ui-sref-active=\"active\" ui-sref=\"app.list\" class=\"menuToggle\"><span>Ofertas</span></a>\n                  <a href=\'#/ofertas\' ng-show=\"misofertasV\">Mis ofertas</a>\n                      <a href=\'#/admin\' ng-show=\"adminV\">Administrar</a>\n                  <!-- LogProf -->\n                      <a id=\"acceder\" ng-show=\"accederV\" href=\"#/\" class=\"button special\" ng-click=\"open()\"  >Acceder</a>\n                      <a id=\'profile\' ng-show=\"profileV\" href=\'#/user/profile\'><img ng-show=\"profileV\" id=\'menuImg\' class=\'icon rounded\' src=\'{{avatar}}\'/>{{nombre}}</a>\n                      <a id=\'logout\' ng-show=\"logoutV\" ng-click=\'logout()\' >Log Out</a> -->\n          </nav>\n      </header>\n  </div> \n\n ");
$templateCache.put("list/list.details.html","<div class=\"home-page\" >\n    <div ng-repeat=\"c in scope.computer\">\n      <div class=\"contentof\">\n          <div class=\"imageof\"><img src=\"{{c.picture}}\" alt=\"\" height=\"150px\" width=\"150px\"></div>\n          <div class=\"nombre\">{{c.name}}</div>\n          <div class=\"nombre\">{{c.date}}</div>\n          <div class=\"nombre\">{{c.marca}}</div>\n          <div class=\"nombre\">{{c.status}}</div>\n          <div class=\"nombre\">{{c.type}}</div>\n  </div>\n    \n    </div>");
$templateCache.put("list/list.html","<div class=\"home-page\" >\n  <div class=\"ofertas\"></div>\n  <div ng-repeat=\"c in scope.computer\">\n    <div class=\"tarjeta\">\n        <div class=\"imagen\"><img src=\"{{c.picture}}\" alt=\"\" height=\"150px\" width=\"150px\"></div>\n        <div class=\"nombre\">{{c.name}}</div>\n        <div>{{c._id}}</div>\n        <a  ui-sref-active=\"active\" ui-sref=\"app.details({ id: c._id})\" class=\"menuToggle\"><span>Details</span></a>        \n    </div>\n</div>\n  \n  </div>\n  ");
$templateCache.put("profile/profile-articles.html","<article-list limit=\"5\" list-config=\"$ctrl.listConfig\"></article-list>\n");
$templateCache.put("profile/profile.html","<div class=\"profile-page\">\n\n  <!-- User\'s basic info & action buttons -->\n  <div class=\"user-info\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-md-10 offset-md-1\">\n\n          <img ng-src=\"{{::$ctrl.profile.image}}\" class=\"user-img\" />\n          <h4 ng-bind=\"::$ctrl.profile.username\"></h4>\n          <p ng-bind=\"::$ctrl.profile.bio\"></p>\n\n          <a ui-sref=\"app.settings\"\n            class=\"btn btn-sm btn-outline-secondary action-btn\"\n            ng-show=\"$ctrl.isUser\">\n            <i class=\"ion-gear-a\"></i> Edit Profile Settings\n          </a>\n\n          <follow-btn user=\"$ctrl.profile\" ng-hide=\"$ctrl.isUser\"></follow-btn>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Container where User\'s posts & favs are list w/ toggle tabs -->\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-md-10 offset-md-1\">\n\n        <!-- Tabs for switching between author articles & favorites -->\n        <div class=\"articles-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\"\n                ui-sref-active=\"active\"\n                ui-sref=\"app.profile.main({username: $ctrl.profile.username})\">\n                My Articles\n              </a>\n            </li>\n            \n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                ui-sref-active=\"active\"\n                ui-sref=\"app.profile.favorites({username: $ctrl.profile.username})\">\n                Favorited Articles\n              </a>\n            </li>\n\n          </ul>\n        </div>\n\n        <!-- List of articles -->\n        <div ui-view></div>\n\n\n      </div>\n\n    <!-- End row & container divs -->\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("settings/settings.html","<div class=\"settings-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n\n        <h1 class=\"text-xs-center\">Your Settings</h1>\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"URL of profile picture\"\n                ng-model=\"$ctrl.formData.image\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Username\"\n                ng-model=\"$ctrl.formData.username\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control form-control-lg\"\n                rows=\"8\"\n                placeholder=\"Short bio about you\"\n                ng-model=\"$ctrl.formData.bio\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"email\"\n                placeholder=\"Email\"\n                ng-model=\"$ctrl.formData.email\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"password\"\n                placeholder=\"New Password\"\n                ng-model=\"$ctrl.formData.password\" />\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\">\n              Update Settings\n            </button>\n\n          </fieldset>\n        </form>\n\n        <!-- Line break for logout button -->\n        <hr />\n\n        <button class=\"btn btn-outline-danger\"\n          ng-click=\"$ctrl.logout()\">\n          Or click here to logout.\n        </button>\n\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("components/article-helpers/article-list.html","<article-preview\n  article=\"article\"\n  ng-repeat=\"article in $ctrl.list\">\n</article-preview>\n\n<div class=\"article-preview\"\n  ng-hide=\"!$ctrl.loading\">\n  Loading articles...\n</div>\n\n<div class=\"article-preview\"\n  ng-show=\"!$ctrl.loading && !$ctrl.list.length\">\n  No articles are here... yet.\n</div>\n\n<list-pagination\n total-pages=\"$ctrl.listConfig.totalPages\"\n current-page=\"$ctrl.listConfig.currentPage\"\n ng-hide=\"$ctrl.listConfig.totalPages <= 1\">\n</list-pagination>\n");
$templateCache.put("components/article-helpers/article-meta.html","<div class=\"article-meta\">\n  <a ui-sref=\"app.profile.main({ username:$ctrl.article.author.username })\">\n    <img ng-src=\"{{$ctrl.article.author.image}}\" />\n  </a>\n\n  <div class=\"info\">\n    <a class=\"author\"\n      ui-sref=\"app.profile.main({ username:$ctrl.article.author.username })\"\n      ng-bind=\"$ctrl.article.author.username\">\n    </a>\n    <span class=\"date\"\n      ng-bind=\"$ctrl.article.createdAt | date: \'longDate\' \">\n    </span>\n  </div>\n\n  <ng-transclude></ng-transclude>\n</div>\n");
$templateCache.put("components/article-helpers/article-preview.html","<div class=\"article-preview\">\n  <article-meta article=\"$ctrl.article\">\n    <favorite-btn\n      article=\"$ctrl.article\"\n      class=\"pull-xs-right\">\n      {{$ctrl.article.favoritesCount}}\n    </favorite-btn>\n  </article-meta>\n\n  <a ui-sref=\"app.article({ slug: $ctrl.article.slug })\" class=\"preview-link\">\n    <h1 ng-bind=\"$ctrl.article.title\"></h1>\n    <p ng-bind=\"$ctrl.article.description\"></p>\n    <span>Read more...</span>\n    <ul class=\"tag-list\">\n      <li class=\"tag-default tag-pill tag-outline\"\n        ng-repeat=\"tag in $ctrl.article.tagList\">\n        {{tag}}\n      </li>\n    </ul>\n  </a>\n</div>\n");
$templateCache.put("components/article-helpers/list-pagination.html","<nav>\n  <ul class=\"pagination\">\n    <li class=\"page-item\"\n      ng-class=\"{active: pageNumber === $ctrl.currentPage }\"\n      ng-repeat=\"pageNumber in $ctrl.pageRange($ctrl.totalPages)\"\n      ng-click=\"$ctrl.changePage(pageNumber)\">\n\n      <a class=\"page-link\" href=\"\">{{ pageNumber }}</a>\n    </li>\n  </ul>\n</nav>\n");
$templateCache.put("components/buttons/favorite-btn.html","<button class=\"btn btn-sm\"\n  ng-class=\"{ \'disabled\' : $ctrl.isSubmitting,\n              \'btn-outline-primary\': !$ctrl.article.favorited,\n              \'btn-primary\': $ctrl.article.favorited }\"\n  ng-click=\"$ctrl.submit()\">\n  <i class=\"ion-heart\"></i> <ng-transclude></ng-transclude>\n</button>\n");
$templateCache.put("components/buttons/follow-btn.html","<button\n  class=\"btn btn-sm action-btn\"\n  ng-class=\"{ \'disabled\': $ctrl.isSubmitting,\n              \'btn-outline-secondary\': !$ctrl.user.following,\n              \'btn-secondary\': $ctrl.user.following }\"\n  ng-click=\"$ctrl.submit()\">\n  <i class=\"ion-plus-round\"></i>\n  &nbsp;\n  {{ $ctrl.user.following ? \'Unfollow\' : \'Follow\' }} {{ $ctrl.user.username }}\n</button>\n");}]);