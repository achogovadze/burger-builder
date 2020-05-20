import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-e5621.firebaseio.com/'
})

export default instance