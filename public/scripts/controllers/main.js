'use strict';

angular.module('mainApp')
  .controller('MainCtrl', function($scope, $http) {
    $scope.users = [];
    $scope.username = '';

    $scope.getUsers = function() {
      $http.get('/api/users').then(function(data) {
        $scope.users = data.data;
      });
    };

    $scope.getUsers();

    $scope.createUser = function() {
      $http.post('/api/users', {'username': $scope.username})
      .then(function() {
        $scope.username = '';
        $scope.getUsers();
      });
    };

    $scope.deleteUser = function(user) {
      $http.delete('/api/users/' + user.id)
      .then(function() {
        $scope.getUsers();
      });
    };

    $scope.createTask = function(user) {
      $http.post('/api/users/' + user.id + '/tasks', {'title': user.title})
      .then(function() {
        $scope.getUsers();
      });
    };

    $scope.solveTask = function(user, task) {
      $http.put('/api/users/' + user.id + '/tasks/' + task.id, {'isDone': true})
      .then(function() {
        $scope.getUsers();
      });
    };

    $scope.deleteTask = function(user, task) {
      $http.delete('/api/users/' + user.id + '/tasks/' + task.id)
      .then(function() {
        $scope.getUsers();
      });
    };
  });
