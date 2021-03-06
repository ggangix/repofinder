// github api 
const API_URL = 'https://api.github.com/users/';

module.exports = {
    getRepos: function(username) {
      return fetch(`${API_URL + username}/repos?per_page=100`).then(res => res.json());
    },
    getUser: function(username) {
      return fetch(API_URL + username).then(res => res.json());
    }
} 