/**
 * Created by munni on 7/27/16.
 */

var toDoApp = angular.module("myToDoList",[]);

toDoApp.controller("ToDoController", toDoController);



function toDoController($scope){
    $scope.name = "Divya Akuthota";
}

