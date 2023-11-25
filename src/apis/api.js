import axios from 'axios';

const api = axios.create({
    baseURL:"https://port-0-team-6-be-cn1vmr2clpde5wws.sel5.cloudtype.app/",
    headers: {
        // access_token: cookies.get('access_token'),
    }
});

export default api;