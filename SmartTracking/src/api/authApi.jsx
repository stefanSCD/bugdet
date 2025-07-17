import axios from 'axios';

const API_BASE_URL = 'http://localhost:5205/api';

export const registerUser = (userData) => {
    return axios.post(`${API_BASE_URL}/Auth/register`, userData);
};

export const loginUser = (credentials) => {
    return axios.post(`${API_BASE_URL}/Auth/login`, credentials);
};

export const getUserData = (email) => {
    return axios.get(`${API_BASE_URL}/User/get-by-email/${encodeURIComponent(email)}`);
};
