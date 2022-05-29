const UserService = require('./../services/UserServices')

class UserView {
    static createUser(payload){
        if(payload === null) {
            console.log('Return error, payload null')
            return {error: 'Payload does not exist.'}
        }else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number'){
            console.log('User created')
            return UserService.create(payload.id, payload.username, payload.name)
        }else{
            console.log("Something is wrong")
            return {error: "Error, payload properties need to have a valid value"}
        }
    }
}

module.exports = UserView