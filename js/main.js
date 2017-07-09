/**
 * Created by penglijiao on 17/5/19.
 */

require.config({
    paths: {
        "angular": '../libs/angular/angular.min.v1.2',
        "uiRouter": '../libs/angular/angular-ui-router.min',
        "angularAMD": '../libs/angular/angularAMD.min',
        "ngload": '../libs/angular/ngload.min',
        "angularCSS": "../libs/angular/angular-css.min",
        "jquery": '../libs/jquery/jquery-1.12.4.min',
        "echart":'../libs/plugin/echarts.min',
        "commonFunc":"../js/common/commonFunc",
        "routeManager":'routeManager'
    },
    shim: {
        "angular": { exports: "angular" },
        "uiRouter": ["angular"],
        "angularAMD": ["angular"],
        "ngload": ["angularAMD"],
        "angularCSS": ["angular"],
        'commonFunc':['jquery'],
        'routeManager':["angularAMD","uiRouter"]
    }
});

define(["angular", "angularAMD", "uiRouter", "angularCSS","app","jquery"
 ], function (angular,angularAMD,uiRouter,angularCSS,myApp) {

    return angularAMD.bootstrap(myApp);
});


