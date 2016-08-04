/**
 * Created by munni on 7/27/16.
 */

toDoApp.directive("navBar", function(){
    return {
        restrict: "AE",
        replace: true,
        templateUrl: "components/NavBar/NavBarTemplate.html",
        controller: "navBarController",
        controllerAs: "vm",
        bindToController: true
    };

});


toDoApp.controller("navBarController",function($scope,toDoService){
   var vm = this;
    vm.name = "divyaAkuthota";

    $scope.clearAll = function(){
      
    }

});
