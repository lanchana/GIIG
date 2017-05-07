angular
    .module('GiiG')
    .controller('PositionsEditController', PositionsEditController);

PositionsEditController.$inject = ['$stateParams', '$state', 'positionsService',];

function PositionsEditController($stateParams, $state, positionsService) {
  var vm = this;

  vm.position = {};

  vm.savePosition = savePosition;

  positionsService.getPosition($stateParams.id).then((resp) => {
    vm.position = resp.data;
    console.log(vm.position);
  });

  function savePosition() {
    console.log($stateParams.id, vm.position);
    positionsService.updatePosition($stateParams.id, vm.position).then(function(resp) {
      if(resp.status == 200) {
        $state.go('positionsIndex')
      } else {
        alert('Something went wrong when trying to update')
      }
    });
  }
}
