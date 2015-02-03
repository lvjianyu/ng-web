/**
 * Created by Andy.Lv on 2015/2/3.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').controller('articleController', ['$scope', '$http', '$state',
        function ($scope, $http, $state) {

            $http.get('/api/article/' + $state.params.id).then(function (res) {
                if (res.status === 200) {
                    $scope.content = res.data[0].content;
                }
            });
        }]);

})(angular);