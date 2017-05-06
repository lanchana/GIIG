angular
 .module('GiiG')
 .factory('locationsService', locationsService);

locationsService.$inject = ['$http'];

function locationsService($http) {
 var service = {};

 service.getLocations = getLocations;
 service.getLocation = getLocation;
 service.createLocation = createLocation;
 service.updateLocation = updateLocation;

 return service;

 function getLocations() {
   // return $http.get('/api/locations');
   return $http.get('/api/locations');
 }

 function getLocation(id) {
   return $http.get('/api/locations/' + id);
 }

 function createLocation(location) {
   return $http.post('/api/locations/', location);
 }

 function updateLocation(location) {
   return $http.put('/api/locations/' + location.id, location);
 }
}
