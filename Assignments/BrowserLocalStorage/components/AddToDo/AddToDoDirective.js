
toDoApp.directive("addToDo", function(){
    return {
        restrict: "AE",
        replace: true,
        templateUrl: "components/AddToDo/AddToDoTemplate.html",
        controller: "addToDoController",
        controllerAs: "vm",
        bindToController: true
    };

});


toDoApp.controller("addToDoController", function($scope){
    var vm = this;

    $scope.saveToDoItem = function(){
      console.log($scope.task);
    }
});
