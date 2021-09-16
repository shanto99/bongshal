import axios from "axios";
const login = function(email, password) {
    return new Promise(function(resolve, reject) {
        axios.post('/login', {
            email: email,
            password: password
        }).then(function(res) {
            resolve(res.data);
        }).catch(function(err) {
            reject(err);
        });
    });
};

const getUser = function () {
    return new Promise(function (resolve, reject) {
        axios.get('/user').then(function(res) {
            resolve(res.data);
        }).catch(function(err) {
            reject(err);
        });
    })
}

const logout = function() {
    return new Promise(function (resolve, reject) {
       axios.post('/logout')
           .then(function(res) {
               resolve(res.data);
           })
           .catch(function(err) {
              reject(err);
           });
    });
}

export {login, getUser, logout};
