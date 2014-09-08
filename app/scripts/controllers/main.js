'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];

    $scope.addTodo = function(){
      if($scope.todo.length > 0){
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      }
    };

    $scope.removeTodo = function(index){
      $scope.todos.splice(index, 1);
    };
  });
