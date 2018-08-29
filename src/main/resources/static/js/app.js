var app = angular.module('bibliotecaApp', ['ngRoute','angularCSS','angular-md5'])
.config(function($routeProvider, $locationProvider){
	
	$locationProvider.html5Mode(true);	
	
	$routeProvider
	.when('/', {
		templateUrl:'partials/login.html',
		controller:"LoginController",
		css:'/css/login.css'
	})
	.when('/cadUsuario', {
		templateUrl:'partials/cadUsuario.html',
		controller:"CadUsuarioController",
		css:'/css/cadUsuario.css'
	})
	.when('/main',{
		templateUrl:'partials/principal.html',
		controller:"PrincipalController"
	})
	.otherwise({redirectTo: '/'});
	
});