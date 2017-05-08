angular
  .module('GiiG')
  .controller('LocationsIndexController', LocationsIndexController);

LocationsIndexController.$inject = ['locationsService'];

function LocationsIndexController(locationsService) {
  var vm = this;

  vm.locations = [];
  vm.locationDelete = locationDelete;

  activate();

  function activate() {
	locationsService.getLocations().then(function(response) {
  	vm.locations = response.data;
	});
	}

	function locationDelete(location_id) {
		console.log("locationsIndexcontroller" + location_id);
	  locationsService.deleteLocation(location_id)
	    .then( function(response)  {        
	      activate();
      });
	}
}

