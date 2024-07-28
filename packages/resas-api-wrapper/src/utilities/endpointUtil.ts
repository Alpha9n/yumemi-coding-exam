import { Endpoint } from '../lib/types';

/**
 * URLを生成する関数
 * @param baseUrl 
 * @param endpoint 
 * @param query 
 * @returns {URL}
 */
export function createUrl(baseUrl: string, endpoint: Endpoint, query?: URLSearchParams): URL {
    return new URL(`${endpoint}?${query}`, baseUrl);
}