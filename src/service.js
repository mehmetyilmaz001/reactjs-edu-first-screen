import axios from 'axios';
import store from './state/store';

const instance = axios.create({
    baseURL: 'https://firestore.googleapis.com/v1/projects/ksreactedu/databases/(default)/documents/'
});

const token = store.getState().auth.token; 
console.log("service token", token)
instance.defaults.headers.common['Content-Type'] = "application/json";

export default instance;