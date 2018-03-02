(function () {
    'use strict';

    angular
        .module('jhipsterApplicationAngularJsApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
