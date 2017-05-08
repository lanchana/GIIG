angular
    .module('GiiG')
    .controller('LocationsEditController', LocationsEditController);

LocationsEditController.$inject = ['$stateParams', '$state', 'locationsService',];

function LocationsEditController($stateParams, $state, locationsService) {
  var vm = this;

  vm.location = {};

  vm.saveLocation = saveLocation;

  locationsService.getLocation($stateParams.id).then(function(response) {
    vm.location = response.data;
    // console.log(vm.location);
  });

  function saveLocation() {
    console.log('made it to the service' + vm.location.id);
    console.log(vm.location);
    locationsService.updateLocation(vm.location.id, vm.location).then(function(resp) {
      if(resp.status == 200) {
        $state.go('locationsIndex', { location_id: resp.data.location_id })
      } else {
        alert('Update had a problem')
      }
    });
  }
}
