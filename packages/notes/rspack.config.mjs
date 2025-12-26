import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { defaultRsPackConfig } from '../../rspack.helper.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defaultRsPackConfig({
  name: 'notes',
  filename: 'notes.container.bundle',
  dirname: __dirname,
  exposes: {
    './App': './src/App',
  },
  // Use extraConfig if you need to override or add specific rules
  extraConfig: {
    // e.g., devtool: 'source-map'
  }
});