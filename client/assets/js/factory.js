function dataFactory($http) {
    return $http.get('data.json');
}

dataFactory.$inject = ['$http'];