import axios from 'axios';
import config from '../config.js';

export const login = (username, password) => {
    return axios.post(config.serverDomain + '/login', { username, password });
};

export const register = (username, password) => {
    return axios.post(config.serverDomain + '/register', { username, password });
};
