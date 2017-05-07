angular
  .module('GiiG')
  .controller('PositionsIndexController', PositionsIndexController)

PositionsIndexController.$inject = ['positionsService'];

function PositionsIndexController(positionsService) {
  var vm = this;

  vm.positions = [];

  positionsService.getPositions().then((response) => {
    vm.positions = response.data;
  });
}
