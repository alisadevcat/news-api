import { CallbackFunction } from '../utils/types';
import {ApiResponse} from '../utils/interfaces';
import {Options} from '../utils/types';
import {URLOptions} from '../utils/types';
import {ApiOptions} from '../utils/types';

class Loader {
    baseLink: string;
    options: ApiOptions;

    constructor(baseLink: string, options: ApiOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp({endpoint, options = {}} : { endpoint: string; options?: Options}, callback: CallbackFunction<ApiResponse> = () => {
            console.error('No callback for GET response');
        }
    ) {
        
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options:Options, endpoint:string) {
        
        const urlOptions:URLOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.entries(urlOptions).forEach(([key, value]): void => {
            url += `${key}=${value ?? ''}&`;
          });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: CallbackFunction<ApiResponse>, options:Options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
