import path from 'node:path';
import * as Repack from '@callstack/repack';
import rspack from '@rspack/core';

export const defaultRsPackConfig = ({ 
  name, 
  filename, 
  exposes = {}, 
  dirname, 
  extraConfig = {} 
}) => {
  return Repack.defineRspackConfig(({ mode, platform, ...rest }) => {
    return {
      mode,
      context: dirname,
      entry: {},
      resolve: {
        ...Repack.getResolveOptions(),
      },
      output: {
        path: path.resolve(dirname, "build/generated", platform),
      },
      module: {
        rules: [
          {
            test: /\.[cm]?[jt]sx?$/,
            type: 'javascript/auto',
            use: {
              loader: '@callstack/repack/babel-swc-loader',
              options: {},
            },
          },
          ...Repack.getAssetTransformRules({ inline: true }),
        ],
      },
      plugins: [
        new Repack.RepackPlugin(),
        new Repack.plugins.ModuleFederationPluginV2({
          name,
          filename,
          dts: false,
          exposes,
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
        new rspack.IgnorePlugin({
          resourceRegExp: /^@react-native-masked-view/,
        }),
      ],
      ...extraConfig, // Spread extra configuration here
    };
  });
};