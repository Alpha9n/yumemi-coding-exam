import { describe, test, expect } from 'vitest';
import { PrefectureResponseObject } from '../../lib/types';
import { getPrefectures, getCompositionPopulation } from '../../lib/fetch';


describe('RESAS API fetch', () => {
    const apiKey = process.env.VITE_RESAS_API_KEY??'api';
    const osakaPrefCode = 27;
    
    test('都道府県を正常に取得できる(zodを通過する)', async () => {
        const res: PrefectureResponseObject = await getPrefectures(apiKey);
        // 正常に返された時にnullになることを検知
        expect(res.message).toBe(null);
    });

    test('大阪府の総人口を正常に取得できる(zodを通過する)', async () => {
        const res = await getCompositionPopulation(apiKey, osakaPrefCode, '-');
        // 正常に返された時にnullになることを検知
        expect(res.message).toBe(null);
    });
});