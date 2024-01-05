// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, 'src/pages/qwizhome'),
  publicDir: resolve(__dirname, 'public'),
  plugins: [react()],
  server: {
    port: 8080,
  },
  build: {
    outDir: resolve(__dirname, './lib'),
    rollupOptions: {
      input: {
        qwizhome: resolve(__dirname, '/index.html'),
        // createquestion: resolve(__dirname, 'createquestion/index.html'),
      },
    },
  },
});
