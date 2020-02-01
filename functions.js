const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    createUser: () => {
        const user = { firstname : 'Brad'}
        user['lastname'] = 'Traversy'
        return user
    },
    fetchUser: () => {
        const url = 'https://jsonplaceholder.typicode.com/users/1'
        return axios
            .get(url)
            .then(res => res.data)
            .catch(err => console.log(err))    
    }
    

}


module.exports = functions;

