import { createUrl } from '../utilities/endpointUtil';
import { PopulationResponseObject, populationResponseObjectSchema, PrefectureResponseObject, prefectureResponseObjectSchema } from './types';

/**
 * RESAS APIにリクエストするために必要なオプションを作成する関数
 * @param apiKey 
 * @returns {RequestInit}
 */
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

/**
 * RESAS APIの都道府県一覧を取得するための関数  
 * reference: https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
 * @param apiKey 
 * @param baseUrl 
 * @returns {Promise<PrefectureResponseObject>}
 */
export async function getPrefectures(apiKey: string, baseUrl: string = defaultBaseUrl): Promise<PrefectureResponseObject> {
    const response = await fetch(
        createUrl(baseUrl, 'prefectures/'), 
        getRequestOptions(apiKey)
    );
    return prefectureResponseObjectSchema.parseAsync(await response.json());
}

/**
 * RESAS APIの人口構成を取得するための関数  
 * reference: https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
 * @param apiKey 
 * @param prefCode 
 * @param cityCode 
 * @param baseUrl 
 * @param addArea 
 * @returns {Promise<PopulationResponseObject>}
 */
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