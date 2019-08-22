import {credentials} from './constantData'

export default function (data) {
        if(data.password === credentials.password && data.username === credentials.username) {
            return Promise.resolve(data)
        } else {
            return Promise.reject({errorMessage:'Username or Password is incorrect'})
        }
}