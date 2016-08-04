/**
 * Created by munni on 7/29/16.
 */
toDoApp.service("toDoService", function(){
    var _toDoItemsCount;

    _getToDoList = function(){

    }

    _getNumberOfToDos = function(){
        _toDoItemsCount = localStorage.length;
        console.log(_toDoItemsCount);
    }

    return {
       toDoItemsCount: _toDoItemsCount,
       getToDoList: _getToDoList,
        getNumberOfToDos:_getNumberOfToDos
    }

});