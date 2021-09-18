import axios from "axios";
const createCategory = function(categoryName, parentCategory=null) {
    return new Promise(function(resolve, reject) {
        axios.post('/create_category', {
            category_name: categoryName
        }).then(function(res) {
            resolve(res.data);
        }).catch(function(err) {
            reject(err);
        })
    });
}

const getCategories = function () {
    return new Promise(function (resolve, reject) {
        axios.get('/categories').then(function(res) {
            resolve(res.data);
        }).catch(function(err) {
            reject(err);
        });
    });
}

const createSubCategory = function(category_name, parent_category) {
    return new Promise(function (resolve, reject) {
        axios.post('/create_sub_category', {
            category_name: category_name,
            parent_category: parent_category
        }).then(function(res) {
            resolve(res.data);
        }).catch(function(err) {
           reject(err);
        });
    });
}

export {createCategory, getCategories, createSubCategory};
