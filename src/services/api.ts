import axios from 'axios';

const api = axios.create({
	baseURL: `https://deliverfy-app.herokuapp.com`,
	timeout: 5000,
});

export { api };
