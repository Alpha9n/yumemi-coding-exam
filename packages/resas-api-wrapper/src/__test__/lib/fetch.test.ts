import { getPrefectures, getCompositionPopulation } from "../../lib/fetch";

describe('RESAS API fetch', () => {
    test('都道府県を正常に取得できる(zodを通過する)', async () => {
        const res = await getPrefectures();
        expect(res.message).toBe(null);
    });

    test('大阪府の総人口を正常に取得できる(zodを通過する)', async () => {
        const res = await getCompositionPopulation(27, '-');
        expect(res.message).toBe(null);
    });
});