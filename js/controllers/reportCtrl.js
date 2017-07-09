define([],function(){
    function homeCtrl($rootScope,$scope,$stateParams) {

        console.log($stateParams.id)
        $scope.id=$stateParams.id;

    }

    return homeCtrl;
});