angular
 .module('GiiG')
 .factory('initialSkillsService', initialSkillsService);

initialSkillsService.$inject = ['$http'];

function initialSkillsService($http) {
	 var service = {};

    service.postSkills = postSkills;


	return service

	function postSkills(array_of_skills) {
        return $http.get('/api/applicant/' + jobseeker_id);
    }
}