import axios from 'axios';

const instanceAPI = axios.create({
    baseURL:
        'https://servicodados.ibge.gov.br/api/v1/localidades/',
    headers: { 'X-Custom-Header': 'tmx-mercury' },
});

export { instanceAPI };
