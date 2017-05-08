angular
    .module('GiiG')
    .factory('positionsService', positionsService);

positionsService.$inject = ['$http'];

function positionsService($http) {
    var service = {};

    service.getPositions = getPositions;
    service.createPosition = createPosition;
    service.getPosition = getPosition;
    service.updatePosition = updatePosition;
    service.deletePosition = deletePosition;

    return service;

    function getPositions() {
        return $http.get('/api/positions');
    }

    function getPosition(id) {
        return $http.get('/api/positions/'+id)
    }

    function createPosition(position) {
        console.log(position);
        return $http.post('/api/positions/',position);
    }

    function updatePosition(position_id, position) {
        return $http.patch('/api/positions/'+ position_id, position);
    }

    function deletePosition(position_id) {
        return $http.delete('/api/positions/'+ position_id);
    }
}
