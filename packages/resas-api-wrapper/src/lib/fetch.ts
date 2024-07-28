import { createUrl } from '../utilities/endpointUtil';
import envUtil from '../utilities/envUtil';
import { PopulationResponseObject, populationResponseObjectSchema, PrefectureResponseObject, prefectureResponseObjectSchema } from './types';

function getRequestOptions(apiKey: string): RequestInit {
    const header = new Headers();
    header.append('X-API-KEY', apiKey);
    header.append('content-type', 'application/json');
    return {
        method: 'GET',
        headers: header,
        redirect: 'follow'
    }
}
const defaultBaseUrl = 'https://opendata.resas-portal.go.jp/api/v1/';

export async function getPrefectures(apiKey: string, baseUrl: string = defaultBaseUrl): Promise<PrefectureResponseObject> {
    const response = await fetch(
        createUrl(baseUrl, 'prefectures/'), 
        getRequestOptions(apiKey)
    );
    return prefectureResponseObjectSchema.parseAsync(await response.json());
}

export async function getCompositionPopulation(apiKey: string, prefCode: number, cityCode: number | '-', baseUrl: string = defaultBaseUrl, addArea?: string): Promise<PopulationResponseObject> {
    const response = await fetch(
        createUrl(
            baseUrl,
            'population/composition/perYear/', 
            new URLSearchParams({
                prefCode: `${prefCode}`, 
                cityCode: `${cityCode}`, 
                addArea: addArea??''
            })), 
        getRequestOptions(apiKey)
    );
    return populationResponseObjectSchema.parseAsync(await response.json());
}