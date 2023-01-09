import axios from 'axios';


export const BASE_URL = 'http://127.0.0.1:8000/';

const setSession = (serviceToken) => {
    if (serviceToken) {
        localStorage.setItem('serviceToken', serviceToken);
        axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
    } else {
        localStorage.removeItem('serviceToken');
        delete axios.defaults.headers.common.Authorization;
    }
};


 export const googleAuth = async (idToken) => {
    const headers = {
        Authorization: idToken,
        'Content-Type': 'application/json'
    };
    try {
        const response = await axios.post(`${BASE_URL}auth/google-auth/`, { headers });
        const { access, user } = response.data;
        setSession(access);
        return response.data;
    } catch (error) {
        console.log('Error while calling google auth API ', error);
    }
};