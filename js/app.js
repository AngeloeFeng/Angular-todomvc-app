(function (angular) {
    'use strict';
    //整个应用程序值有一个ng-app
    //ng-app 值对应一个模块
    angular
    // todoApp.ctrl 是 todoApp这个 主模块 的 子模块
    .module('todoApp',['todoApp.ctrl','todoApp.service'])
})(angular);