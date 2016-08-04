toDoApp.directive("tileContainer", function(){
   return {
       restrict: "AE",
       replace: false,
       templateUrl: "components/TileContainer/TileContainerTemplate.html",
       controller:"tileContainerController",
       controllerAs: "vm",
       bindToController: true
   }

});


toDoApp.controller("tileContainerController", TileContainerController);

function TileContainerController($scope,toDoService){

    init = function(){
        toDoService.getNumberOfToDos();
        $scope.toDoItems = toDoService.toDoItemsCount;
    }

    init();

    //toDoItems;
    $scope.displayToDoItems = function(){
           $scope.toDoItems = toDoService.toDoItemsCount;
    }

    $scope.incToDoCount = function(){
        toDoService.toDoItemsCount = toDoService.toDoItemsCount + 1 ;
        $scope.toDoItems = toDoService.toDoItemsCount;
    }

    $scope.getNumber = function(num) {
        return new Array(num);
    }
    

}