angular
 .module('GiiG')
 .factory('initialSkillsService', initialSkillsService);

initialSkillsService.$inject = ['$http'];

function initialSkillsService($http) {
	 var service = {};

   service.postSkills = postSkills;

  

	return service;

	function postSkills(skill) {
	  return $http.post('/api/skills/', skill);
	}      		
}