import { getCompositionPopulation, getPrefectures } from "./lib/fetch";
import { PopulationResponseObject, PrefectureResponseObject } from "./lib/types";

/**
 * RESAS APIラッパークラス
 */
export class ResasApi {
    apiKey: string;
    baseUrl: string;
    /**
     * @param apiKey RESAS-APIのAPIkey
     * @param baseUrl http~バージョン表記までのURL
     */
    constructor (
        apiKey: string,
        baseUrl?: string
    ) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl ?? 'https://opendata.resas-portal.go.jp/api/v1/';
    }

    /**
     * RESAS APIの都道府県一覧を取得するためのメソッド  
     * reference: https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
     * @returns {Promise<PrefectureResponseObject>}
     */
    getPrefecture(): Promise<PrefectureResponseObject> {
        return getPrefectures(this.apiKey, this.baseUrl);
    }

    /**
     * RESAS APIの人口構成を取得するためのメソッド  
     * reference: https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
     * @param prefCode 
     * @param cityCode 
     * @param addArea 
     * @returns {Promise<PopulationResponseObject>}
     */
    getCompositionPopulation(prefCode: number, cityCode: number | '-', addArea?: string): Promise<PopulationResponseObject> {
        return getCompositionPopulation(this.apiKey, prefCode, cityCode, this.baseUrl, addArea);
    }
}