import axios from "axios";
const getProducts = function() {
    return new Promise(function(resolve, reject) {
        axios.get('https://fakestoreapi.com/products')
            .then(function(res) {
                resolve(res.data);
            })
            .catch(function(err) {
               console.log(err);
            });
    });

}

export {getProducts};
