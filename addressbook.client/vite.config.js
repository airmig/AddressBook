import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
import { env } from 'process';

const target = 'http://localhost:5264';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        proxy: {
            '^/addressbook/contacts': {
                target,
                secure: false
            },
            '^/addressbook/countries': {
                target,
                secure: false
            }, 
            '^/addressbook/deletecontact/': {
                target,
                secure: false,
                changeOrigin: true,
                rewrite: (path) => {
                    // Preserve query strings
                    const query = path.split('?')[1] ? `?${path.split('?')[1]}` : '';
                    return path + query;
                  }
            },      
            '^/addressbook/updatecontact': {
                target,
                secure: false,
                changeOrigin: true
            },
            '^/addressbook/addcontact': {
                target,
                secure: false,
                changeOrigin: true
            },          
        },
        port: 5173
    }
})
