

define([],function(){
    function homeCtrl($rootScope,$scope) {
        $scope.name="欢迎使用健康评估服务终端系统";
        $("#login").click(function(){
            $rootScope.go("home")
        })

    }

    return homeCtrl;
});