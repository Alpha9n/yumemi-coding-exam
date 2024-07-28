import { Endpoint } from '../lib/types';
import envUtil from './envUtil';

export function createUrl(endpoint: Endpoint, query?: URLSearchParams): URL {
    return new URL(`${envUtil.baseUrl}${endpoint}?${query}`);
}