angular
    .module('GiiG')
    .factory('positionsService', positionsService);

positionsService.$inject = ['$http'];

function positionsService($http) {
    var service = {};

    service.getPositions = getPositions;
    service.createPosition = createPosition;

    return service;

    function getPositions() {
        return $http.get('/api/positions');
    }

    function createPosition(position) {
        return $http.post('/api/positions',position);
    }
}
