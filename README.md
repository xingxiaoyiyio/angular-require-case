 
 # 应用场景
 基于angular的PC端web项目，采用require加载资源，使用angularAMD和angularCSS实现按需加载angular的controllers和css。
 
 # 项目框架搭建
 ### 1、项目目录
 目录结构较简单，index是项目启动首页，js存放项目的自定义js,libs存放第三方插件及工具，views存放页面；
 
 ![](https://github.com/xingxiaoyiyio/angular-require-case/raw/master/img/1.png) 
 
 ### 2、目录说明
 本项目搭建好的目录包含一个登录页面login,主界面home,三个home页面下的子页面disease、report、sports;
 
 ### 3、require资源加载
 本项目采用require加载静态资源，main.js是require加载资源的配置文件，内容如下：
 
 ```javascript
 require.config({
    paths: {
        //angular
        "angular": '../libs/angular/angular.min.v1.2',      
        //实现angular单页面路由
        "uiRouter": '../libs/angular/angular-ui-router.min',
       //动态加载js
        "angularAMD": '../libs/angular/angularAMD.min',
       //动态加载js
        "ngload": '../libs/angular/ngload.min',      
      //动态加载css
        "angularCSS": "../libs/angular/angular-css.min",
      //jquery引用
        "jquery": '../libs/jquery/jquery-1.12.4.min',
        //echart插件引用
        "echart":'../libs/plugin/echarts.min',
       //angular路径文件引用
        "routeManager":'routeManager'
    },
    shim: {
      //定义require加载的优先顺序
        "angular": { exports: "angular" },
        "uiRouter": ["angular"],
        "angularAMD": ["angular"],
        "ngload": ["angularAMD"],
        "angularCSS": ["angular"],
        'commonFunc':['jquery'],
        'routeManager':["angularAMD","uiRouter"]
    }
});

   //app.js是定义初始化angular项目的配置
define(["angular", "angularAMD", "uiRouter", "angularCSS","app","jquery"
 ], function (angular,angularAMD,uiRouter,angularCSS,myApp) {
    //资源加载后手动启动项目angular的app
    return angularAMD.bootstrap(myApp);
});

```
### 4、app.js配置angular

```javascript
//routeManager是路径配置文件
define(['angular', 'routeManager'],
    function(angular,RouteManager) {
        var myApp = angular.module('starter', ['ui.router',"door3.css"]);
            myApp.config(
//配置按需加载contrlloer
                ['$controllerProvider', function($controllerProvider) {
                    myApp.controller = $controllerProvider.register;
                }])
//配置路有文件
            .config(RouteManager)
                }])
            .run(['$rootScope', '$state', '$window',function($rootScope, $state, $window) {
//$rootScope下可以定义全局方法和全局变量，以下定义了页面跳转的公共方法
                $rootScope.go=function(path,param){
                    $state.go(path,param);
                }

            }]);

        window.app = myApp;
        return myApp;
    });
 ```
    
 ### 5、routeManager.js配置angular路由
    
 ```javascript
    define(["angularAMD"], function (angularAMD) {
    'use strict';
    var routeManager = function($stateProvider, $urlRouterProvider) {
             //定义默认路径为登录页面
             $urlRouterProvider.otherwise('/login');

            $stateProvider.state('login', angularAMD.route({
                    url: '/login',
                    controllerUrl: "js/controllers/loginCtrl.js",   //登录页面的controller文件
                    templateUrl: 'views/login.html'  //登录页面的文件路径
            }))
            .state('home', angularAMD.route({
                url: '/home',
                cache:'true',
                templateUrl: 'views/home.html',
                controllerUrl: 'js/controllers/homeCtrl.js'
            }))
            .state('home.disease', angularAMD.route({    
                url: '/disease',               //home文件下的子页面
                templateUrl:'views/disease.html',   
                controllerUrl: 'js/controllers/diseaseCtrl.js',    //子页面的controller
                css:"css/disease.css"          //子页面的css文件

            }))
    }

    return routeManager;
  });
 ```

 
