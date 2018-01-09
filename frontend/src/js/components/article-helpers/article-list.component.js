class ArticleListCtrl {
  constructor(User, Articles, $scope, $state) {
    'ngInject';
    
    /////////////////////////////////////////////////
    //console.log(User.current); //yomogan..........
    this.listConfig = {
      type: User.current ? 'feed' : 'all',
    };
    //console.log(this.listConfig.type); //feed
    
    //console.log(this.listConfig.filters); //undefined
    this.profileState = $state.current.name.replace('app.profile.', '');
    //console.log(this.profileState); //main o favorites
    
    if (this.profileState === 'main') {
      this.listConfig = { type: 'all' };
      this.listConfig.filters = {author: User.current.username};
    } else if (this.profileState === 'favorites') {
      this.listConfig = { type: 'all' };
      this.listConfig.filters = {favorited: User.current.username};
    }
    //console.log(this.listConfig);
    /////////////////////////////////////////////////
    this._Articles = Articles;
    this.setListTo(this.listConfig);

    $scope.$on('setListTo', (ev, newList) => {
      this.setListTo(newList);
    });
    
    $scope.$on('setPageTo', (ev, pageNumber) => {
      this.setPageTo(pageNumber);
    });
  }

  setListTo(newList) {
    // Set the current list to an empty array
    this.list = [];

    // Set listConfig to the new list's config
    //console.log(this.newList);
    this.listConfig = newList;
    this.runQuery();
  }

  setPageTo(pageNumber) {
    this.listConfig.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    // Show the loading indicator
    this.loading = true;

    // Create an object for this query
    let queryConfig = {
      type: this.listConfig.type,
      filters: this.listConfig.filters || {}
    };

    // Set the limit filter from the component's attribute
    queryConfig.filters.limit = this.limit;

    // If there is no page set, set page as 1
    if (!this.listConfig.currentPage) {
      this.listConfig.currentPage = 1;
    }

    // Add the offset filter
    queryConfig.filters.offset = (this.limit * (this.listConfig.currentPage - 1));

    // Run the query
    this._Articles
      .query(queryConfig)
      .then(
        (res) => {
          this.loading = false;

          // Update list and total pages
          this.list = res.articles;
          //console.log(res.articles);
          this.listConfig.totalPages = Math.ceil(res.articlesCount / this.limit);
        }
      );
  }
}

let ArticleList = {
  bindings: {
    limit: '=',
    listConfig: '='
  },
  controller: ArticleListCtrl,
  templateUrl: 'components/article-helpers/article-list.html'
};

export default ArticleList;
