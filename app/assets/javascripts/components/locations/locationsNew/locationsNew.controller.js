angular
  .module('GiiG') 
  .controller('LocationsNewController', LocationsNewController);

LocationsNewController.$inject = ['$state', '$stateParams', 'locationsService'];

function LocationsNewController($state, $stateParams, locationsService) {
  var vm = this;

  vm.location = {
    business_type: '',
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    description: '',
    phone_num: '',
  };

  vm.saveLocation = saveLocation;

  function saveLocation() {
    locationsService.createLocation(vm.location)
        .then((response) => {
          if(response.status == 201) {
            $state.go('locationsIndex')
          } else {
            alert('Server is Down')
          }
        });
  }
}
