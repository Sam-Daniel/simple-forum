angular.module("forum",[])
.controller("mainController",function($scope){
	$scope.messages=[];
	$scope.addMessage=function(){
		$scope.messages.push({"time":Date.now(),"content":$scope.content});
		$scope.content="";
	};
})