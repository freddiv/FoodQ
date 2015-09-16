angular.module('NoteWrangler', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/welcome'
    })
    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html',
      controller: function($http){
        var controller = this;
        $http({method: 'GET', url: '/notes'}).success(function(data){
          controller.notes = data;
        });
      },
      controllerAs: 'notesCtrl'
    })
    .when('/welcome', {
      templateUrl: 'templates/welcome.html'
    })
    .when('/notes/new', {
      templateUrl: 'templates/pages/notes/edit.html'

    })
    .otherwise({
      redirectTo: '/welcome'
    });
}]);
