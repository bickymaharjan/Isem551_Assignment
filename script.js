
var aba = angular.module('AddressBookApp', ['ngRoute']);

aba.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/Main', {
            templateUrl: 'views/Main.html',
            controller: 'MainController'
        }).
        when('/About', {
            templateUrl: 'views/About.html',
            controller: 'AboutController'
        }).
        otherwise({
            redirectTo: '/Main'
        });
  }]);

aba.controller('MainController', function ($scope) {

    $scope.message = 'This is Main screen message using $scope';

});


aba.controller('AboutController', function ($scope) {

    $scope.message = 'This is an About screen message using $scope';

});


//angular.module('AddressBookApp', ['ngRoute'])
//.config(function ($routeProvider) {
//    $routeProvider
//        .when('/', {
//            templateUrl: 'views/Main.html',
//            controller: 'MainController'
//        })

//        .when('/About', {
//            templateUrl: 'views/About.html',
//            controller: 'AboutController'
//        })

//        .when('/Contact', {
//            templateUrl: 'views/Contact.html',
//            controller: 'ContactController'

//        .otherwise('/')
//        })
//    })

//    .controller('MainController', function () {
//    })

//    .controller('AboutController', function () {
//    })

//    .controller('ContactController', function () {
//    });

