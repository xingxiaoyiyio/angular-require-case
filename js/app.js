/**
 * Created by penglijiao on 17/5/19.
 */

define(['angular', 'routeManager'],
    function(angular,RouteManager) {
        var myApp = angular.module('starter', ['ui.router',"door3.css"]);
            myApp.config(
                ['$controllerProvider', function($controllerProvider) {
                    myApp.controller = $controllerProvider.register;
                }])
            .config(RouteManager)
            .run(['$rootScope', '$state', '$window',function($rootScope, $state, $window) {
                $rootScope.go=function(path,param){
                    $state.go(path,param);
                }

            }]);

        window.app = myApp;
        return myApp;
    });