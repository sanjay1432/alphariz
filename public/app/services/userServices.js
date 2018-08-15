angular.module('userServices', [])

.factory('User', function($http) {
    var userFactory = {}; // Create the userFactory object

    // Register users in database
    userFactory.create = function(regData) {
        return $http.post('/api/users', regData);
    };

    
    // Get all the users from database
    userFactory.getUsers = function() {
        return $http.get('/api/users/');
    };

    // Get user to then edit
    userFactory.getUser = function(id) {
        return $http.get('/api/edit/' + id);
    };

    // Delete a user
    userFactory.deleteUser = function(userid) {
        return $http.delete('/api/user/' + userid);
    };

    // Edit a user
    userFactory.editUser = function(id) {
        return $http.put('/api/edit', id);
    };

    return userFactory; // Return userFactory object
});
