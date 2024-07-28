import { defineConfig } from 'vitest/config';
import dotenv from 'dotenv';

export default defineConfig({
    test: {
        globals: true,
        env: dotenv.config({ path: '.env.local' }).parsed
    }
})