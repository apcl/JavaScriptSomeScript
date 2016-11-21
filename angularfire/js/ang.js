var app = angular.module("angfireMdl", ["firebase"]);
app.controller("angfireCtrl", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("notebooks");
  // create a synchronized array
  $scope.productos = $firebaseArray(ref);

  console.log($scope.productos);

  $scope.pch = "pch1"
  $scope.clase = "nomuestra";
  $scope.divindex = "divindex1"
  $scope.txtSearch = "frm-control1 search1"
  $scope.btnSearch = "btn btn-primary btnBlock1"



  $scope.mostrar = function(){

  	if (!$scope.filtro) {
		$scope.clase = "nomuestra";
	}
  	else{
      $scope.divindex = "divindex2"
      $scope.pch = "pch2"
      $scope.txtSearch = "frm-control2"
      $scope.btnSearch = "btn btn-primary btnBlock2"

  		$scope.clase = "muestra";
  		$scope.imagen = "imagen";
  		$scope.marca = "marca";
      $scope.modelo = "modelo";
      $scope.nombre = "nombre";
  	}
  	
  	$scope.fin = $scope.filtro;
  }
});