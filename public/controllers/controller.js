/**
 * Created by jespejo on 19/10/16.
 */
// function AppCtrl() {
//     console.log('Hello world from controller');
// }

var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log('Hello World from controller');

    var refresh = function () {
        $http.get('/contactlist').success(function (response) {
            console.log('I got the data I requested');
            $scope.contactlist = response;
            $scope.contact = "";
        });
    };

    refresh();

    $scope.addContact = function () {
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function (response) {
            console.log(response);
            refresh();
        })
    };

    $scope.remove = function (id) {
        console.log(id);
        $http.delete('/contactlist' + id).success( function (response) {
            refresh();
        })
    };

    $scope.edit = function (id) {
        console.log(id);
        $http.get('/contactlist/' + id).success(function (response) {
            $scope.contact = response;
        });
    };

    $scope.update = function () {
        console.log($scope.contact._id);
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function (response) {
            refresh();
        })
    };

    $scope.deselect = function () {
        $scope.contact = "";
    };

    // person1 = {
    //     name: 'Jess',
    //     email: 'jess@email1.com',
    //     number: '(011) 152 683 6246'
    // };
    //
    // person2 = {
    //     name: 'Ale',
    //     email: 'ale@email2.com',
    //     number: '(261) 155 008288'
    // };
    //
    // person3 = {
    //     name: 'Dave',
    //     email: 'dave@email3.com',
    //     number: '(261) 152 437618'
    // };
    //
    // var contactList = [person1, person2, person3];
    // $scope.contactlist = contactList;

}]);