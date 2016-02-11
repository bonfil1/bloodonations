'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // Map coordenates
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  }
]);
