
define([],function(){
    function homeCtrl($rootScope,$scope) {
             $scope.menus=[
                 {name:'disease',label:'疾病风险评估'},
                 {name:'sports',label:'运动评估'},
                 {name:'report',label:'我的报告'}];

            $scope.toSubPage=function(name){
                var param={};
                if(name=='report'){
                    param={id:1};
                }
                $rootScope.go('home.'+name,param)
                console.log(name)
            }

        }

        return homeCtrl;
    });