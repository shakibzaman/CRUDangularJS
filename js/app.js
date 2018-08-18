var myApp=angular.module("myApp",[]);
myApp.controller("myCtrl",function($scope){
    $scope.newUser={};
    $scope.selectUsers={};
    $scope.users=[
        {name:'Shakib',email:'shakib@gmail.com'},
        {name:'Saba',email:'saba@gmail.com'},
        {name:'Tisha',email:'tisha@gmail.com'}
    ];

    $scope.saveUser=function(){
        $scope.users.push($scope.newUser);
        $scope.newUser={};

    };
    $scope.selectUsers=function(user){
        $scope.clickedUser=user;
    };
    $scope.deleteUser=function(){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
    };
});