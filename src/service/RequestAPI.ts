import axios from 'axios';

const RequestAPI =
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

const RequestService = (
    fn: any,
    api: string = RequestAPI
) => {
    axios
        .get(api)
        .then(fn)
        .catch(e => {
            throw new Error(e);
        });
};

export { RequestAPI, RequestService };
