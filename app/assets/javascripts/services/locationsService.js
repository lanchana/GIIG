angular
 .module('GiiG')
 .factory('locationsService', locationsService);

locationsService.$inject = ['$http'];

function locationsService($http) {
 var service = {};

 service.getLocations   = getLocations;
 service.getLocation    = getLocation;
 service.createLocation = createLocation;
 service.updateLocation = updateLocation;
 service.deleteLocation = deleteLocation;

 return service;

 function getLocations() {
   // return $http.get('/api/locations');
   return $http.get('/api/locations');
 }

 function getLocation(id) {
   return $http.get('/api/locations/' + id);
 }

 function createLocation(location) {
    console.log(location);
   return $http.post('/api/locations/', location);
 }

 function updateLocation(location_id, location) {
   return $http.put('/api/locations/' + location_id, location);
 }

 function deleteLocation(location_id) {
 	console.log('delete' + location_id);
    return $http.delete('/api/locations/' + location_id);
    }
}
