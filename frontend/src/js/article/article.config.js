function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article', {
    //url: '/article/:slug',
    //https://conduit.productionready.io/api/articles/test1_yomogan-iozmks
    url: '/articles/:slug',
    
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article/article.html',
    title: 'Article',
    resolve: {
      article: function(Articles, $state, $stateParams) {
        return Articles.get($stateParams.slug).then(
          (article) => article,
          (err) => $state.go('app.home')
        )
      }
    }
  });

};

export default ArticleConfig;
