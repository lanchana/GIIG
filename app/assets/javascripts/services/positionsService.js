angular
    .module('GiiG')
    .factory('positionsService', positionsService);

positionsService.$inject = ['$http'];

function positionsService($http) {
    var service = {};

    service.getPositions = getPositions;

    return service;

    function getPositions() {
        return $http.get('/api/positions');
    }
}
