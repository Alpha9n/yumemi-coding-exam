export default {
    get baseUrl(): string {
        return process.env.RESAS_API_BASE_URL ?? 'https://opendata.resas-portal.go.jp/api/v1/';
    },
    get apiKey(): string {
        const key = process.env.RESAS_API_KEY;
        if (!key) throw Error('API_KEY is undefined');
        return key;
    }
}