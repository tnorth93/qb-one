import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://qb-one-default-rtdb.firebaseio.com/'
});

export default instance;