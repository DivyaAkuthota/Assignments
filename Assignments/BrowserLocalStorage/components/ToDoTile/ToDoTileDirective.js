/**
 * Created by munni on 7/27/16.
 */

toDoApp.directive("toDoTile", function(){
   return {
       restrict : "AE",
       replace: true,
       templateUrl:"components/ToDoTile/ToDoTileTemplate.html",
       controller:"toDoTileController",
       controllerAs: "vm",
       bindToController: true,
       scope: {}
   }
});


toDoApp.controller("toDoTileController", function($scope){

    $scope.key;
    $scope.task;

    $scope.saveToLocalStorage = function(){
        $scope.key = "day1";
        localStorage.setItem("task1", $scope.task);
    }


    $scope.deleteFromLocalStorage = function(){

    }
});
