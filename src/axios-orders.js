import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-cf133.firebaseio.com/'
});

export default instance;