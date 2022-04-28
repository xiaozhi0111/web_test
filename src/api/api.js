import { GET, POST } from './index';

export const getMapJson = () => {
    return GET('../../static/json/lines-bus.json');
}