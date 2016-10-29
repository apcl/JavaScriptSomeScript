var app = angular.module("angfireMdl", ["firebase"]);
app.controller("angfireCtrl", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("Productos");
  // create a synchronized array
  $scope.productos = $firebaseArray(ref);

  $scope.clase = "nomuestra";

  $scope.mostrar = function(){
  	$scope.clase = "muestra";
  	$scope.fin = $scope.filtro;
  }

});