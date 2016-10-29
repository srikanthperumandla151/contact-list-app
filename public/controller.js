var app=angular.module("myapp",[]);

app.controller("mycontroller",["$scope","$http",function($scope,$http){
var refresh=function(){
	$http.get("/techminds").success(function(response){
		$scope.techminds=response;
		$scope.contact="";
	});
}
	refresh();

	$scope.addcontact=function(){
		$http.post("/techminds",$scope.contact).success(function(response){

			console.log(response);
			refresh();
		})
	}
	$scope.editcontact=function(id){
		console.log(id);
		$http.get("/techminds/"+id).success(function(response){
			$scope.contact=response;
		})
	}
	$scope.updatecontact=function(){
		$http.put("/techminds/"+$scope.contact._id,$scope.contact).success(function(response){
			refresh();
		});
	}
	$scope.removecontact=function(id){
		
		$http.delete("/techminds/"+id).success(function(response){
			refresh();

			console.log("removed successfuly");
		})
	}
}]);
