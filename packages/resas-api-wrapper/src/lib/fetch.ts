import { createUrl } from '../utilities/endpointUtil';
import envUtil from '../utilities/envUtil';
import { PopulationResponseObject, populationResponseObjectSchema, PrefectureResponseObject, prefectureResponseObjectSchema } from './types';

const header = new Headers();
header.append('X-API-KEY', envUtil.apiKey);
header.append('content-type', 'application/json');

const requestOptions: RequestInit = {
    method: 'GET',
    headers: header,
    redirect: 'follow'
}

export async function getPrefectures(): Promise<PrefectureResponseObject> {
    const response = (await fetch(createUrl('prefectures/'), requestOptions));
    return prefectureResponseObjectSchema.parseAsync(await response.json());
}

export async function getCompositionPopulation(prefCode: number, cityCode: number | '-', addArea?: string): Promise<PopulationResponseObject> {
    const response = await fetch(createUrl('population/composition/perYear/', new URLSearchParams({prefCode: `${prefCode}`, cityCode: `${cityCode}`, addArea: addArea??''})), requestOptions);
    return populationResponseObjectSchema.parseAsync(await response.json());
}