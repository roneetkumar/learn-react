import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a17ecaed4ab33e42cf5555b035458429a6859f1c61f9b486149900f075e7a045'
    }
});
