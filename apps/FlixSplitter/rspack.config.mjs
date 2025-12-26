import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';
import rspack from '@rspack/core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Rspack configuration enhanced with Re.Pack defaults for React Native.
 *
 * Learn about Rspack configuration: https://rspack.dev/config/
 * Learn about Re.Pack configuration: https://re-pack.dev/docs/guides/configuration
 */

export default Repack.defineRspackConfig(({ mode, ...rest }) => {
  console.log("📁[1;97;46m[4m[3mapps/FlixApp/rspack.config.mjs:17[0m📁\n","💁  ℹ️ rest >>> ", rest)
  return {
    mode,
    context: __dirname,
    entry: './index.js',
    resolve: {
      ...Repack.getResolveOptions(),
    },
    output: {
      uniqueName: 'sas-FlixApp',
    },
    module: {
      rules: [
        {
          test: /\.[cm]?[jt]sx?$/,
          type: 'javascript/auto',
          use: {
            loader: '@callstack/repack/babel-swc-loader',
            parallel: true,
            options: {},
          },
        },
        ...Repack.getAssetTransformRules(),
      ],
    },
    plugins: [
      new Repack.RepackPlugin(),
      new Repack.plugins.ModuleFederationPluginV2({
        name: 'FlixSplitter',
        dts: false,
        // remotes: {
        //   notes: `notes@dynamic`
        //   // notes: `notes@http://localhost:4999/packages/notes/build/generated/ios/mf-manifest.json`
        // },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: '19.2.0' },
          'react-native': {
            singleton: true,
            eager: true,
            requiredVersion: '0.83.1',
          },
          '@react-navigation/native': {
            singleton: true,
            eager: true,
            requiredVersion: '6.1.18',
          },
          '@react-navigation/native-stack': {
            singleton: true,
            eager: true,
            requiredVersion: '6.11.0',
          },
          'react-native-safe-area-context': {
            singleton: true,
            eager: true,
            requiredVersion: '^5.6.2',
          },
          'react-native-screens': {
            singleton: true,
            eager: true,
            requiredVersion: '^4.19.0',
          },
        },
      }),
      // silence missing @react-native-masked-view optionally required by @react-navigation/elements
      new rspack.IgnorePlugin({
        resourceRegExp: /^@react-native-masked-view/,
      }),
    ],
  };
});
