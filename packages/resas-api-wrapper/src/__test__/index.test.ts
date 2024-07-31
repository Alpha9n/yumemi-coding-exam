import { describe, test, expect } from 'vitest';
import { ResasApi } from '../../dist';


describe('RESAS API ラッパークラス', () => {
    const BASE_URL = 'https://opendata.resas-portal.go.jp/api/v1/';
    const apiKey = process.env.VITE_RESAS_API_KEY??'api';
    const osakaPrefCode = 27;
    const resas = new ResasApi(apiKey, BASE_URL);
    test('正常に都道府県が取得できる', async () => {
        const prefs = await resas.getPrefecture();
        expect(prefs.result.at(osakaPrefCode-1)?.prefName).toBe('大阪府');
    });

    test('正常に指定した人口構成が取得できる', async () => {
        const population = await resas.getCompositionPopulation(osakaPrefCode, '-');
        expect(population.result.data.at(0)?.label).toBe('総人口');
    });
});