// github api 
const API_URL = 'https://api.github.com/users/';

module.exports = {
    getRepos: function(username) {
        return fetch(API_URL + username + '/repos');
    },
    getUser: function(username) {
        return fetch(API_URL + username);
    }
} 