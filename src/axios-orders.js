import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-app-001.firebaseio.com/'
});

export default instance;