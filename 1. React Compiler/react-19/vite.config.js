import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

const ReactCompilerConfig = {
  target: '19'
};

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', ReactCompilerConfig]
        ],
      },
    }),
  ],
});
