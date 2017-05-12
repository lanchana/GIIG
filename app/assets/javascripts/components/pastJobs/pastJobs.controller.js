angular
  .module('GiiG')
  .controller('PastJobsController', PastJobsController);

PastJobsController.$inject = ['$stateParams', 'jobsService'];

function PastJobsController($stateParams, jobsService) {
  var vm = this;



  activate();

  function activate() {

  }



}
