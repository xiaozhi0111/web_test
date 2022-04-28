import { GET, POST } from './index';

export const loginApi = (params) => {
    return POST('/users/login',params);
}