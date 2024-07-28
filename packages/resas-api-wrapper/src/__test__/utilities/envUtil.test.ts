import env from '../../utilities/envUtil';

describe('環境変数ユーティリティ', () => {
    test('環境変数をstringで取得できる', () => {
        const baseUrl = env.baseUrl;
        const apiKey = env.apiKey;
        expectTypeOf({ url: baseUrl, key: apiKey}).toEqualTypeOf<{ url: string, key: string }>();
    });
});