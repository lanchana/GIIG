angular
  .module('GiiG')
  .controller('LocationsNewController', LocationsNewController);

LocationsNewController.$inject = ['$state', '$stateParams', 'locationsService'];

function LocationsNewController($state, $stateParams, locationsService) {
  var vm = this;
  vm.addlocation = addlocation;

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

  vm.address= [];

  console.log(vm.address);

  vm.saveLocation = saveLocation;

  function addlocation() {
    address = vm.address.split(',');
    vm.location.name = address[0];
    vm.location.address = address[1];
    vm.location.city = address[2];
    vm.location.state = address[3];

  }

  function saveLocation() {
    console.log(vm.address);
    address = vm.address.split(',');
    vm.location.name = address[0];
    vm.location.address = address[1];
    vm.location.city = address[2];
    vm.location.state = address[3];
    console.log(address[0]);
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
