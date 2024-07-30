import { describe, test, expect } from 'vitest';
import { createUrl } from "../../utilities/endpointUtil";

describe('URL生成', () => {
    test('入力された引数を元にURLが生成できる', () => {
        const expectedUrl = 'https://example.com/prefectures/?test=hoge';
        const searchParams = new URLSearchParams({ 'test': 'hoge' });
        const generatedUrl = createUrl('https://example.com/', 'prefectures/', searchParams);
        expect(generatedUrl.toString()).toBe(expectedUrl);
    });
});