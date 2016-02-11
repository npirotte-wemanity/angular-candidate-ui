(function () {
    'use strict';

    angular
        .module('app.step')
        .service('StepService', [
            '$http',
            StepService
        ]);

    function StepService ($http) {
        this.get = get;

        function get () {
            return $http.get('/step');
        }
    }
})();
