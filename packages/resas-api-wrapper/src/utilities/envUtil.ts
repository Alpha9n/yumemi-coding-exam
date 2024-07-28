export default {
    get baseUrl(): string {
        return process.env.RESAS_API_BASE_URL || 'https://opendata.resas-portal.go.jp';
    },
    get apiKey(): string {
        return process.env.RESAS_API_KEY || '';
    }
}