(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.values = "";
        $scope.color = "black";

        $scope.showMessage = function () {
            if ($scope.values === "") {
                $scope.message = "Please enter data first";
                $scope.messageColor = "red";
                $scope.textBoxColor = "red";
                return;
            }

            let cantItems = $scope.values.split(",").filter(value => value.trim() !== "").length;
            if (cantItems <= 3) {
                $scope.message = "Enjoy!";
                $scope.messageColor = "green";
                $scope.textBoxColor = "green";
            } else {
                $scope.message = "Too much!";
                $scope.messageColor = "green";
                $scope.textBoxColor = "green";
            }
        };
    }
})();