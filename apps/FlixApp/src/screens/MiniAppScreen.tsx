import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { FederationErrorFallback } from '../components/FederationErrorFallback';
import { loadRemote } from '@module-federation/runtime';

// const MiniAppNavigator = React.lazy(() => import('notes/App'));
const MiniAppNavigator = React.lazy(async () => {
  try {
    const component = await loadRemote('MiniApp/App');
    // In many MF2 setups, you need to return an object with a 'default' key
    return { default: component.default || component };
  } catch (error) {
    console.error("Failed to load remote:", error);
    // Return a fallback component so the app doesn't crash hard
    return { default: () => <Text>Failed to load</Text> };
  }
});
// const RemoteModule = React.lazy(() =>
//   import('notes/App').then(module => {
//     // If the module has a default export, use it.
//     // Otherwise, assume the first export is the component.
//     const Component = module.default || Object.values(module)[0];

//     if (!Component) {
//       throw new Error("Bundle loaded but no component export was found.");
//     }

//     return { default: Component };
//   })
// );

const FallbackComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator color="rgba(56, 30, 114, 1)" size="large" />
  </View>
);

const MiniAppScreen = () => {
  return (
    <ErrorBoundary
      fallback={<FederationErrorFallback />}
      onError={(error, errorInfo) => {
        console.log('🔴 Federation Error caught:', error.message);
        console.log('🔴 Error Info:', errorInfo);
      }}
    >
      <React.Suspense fallback={<FallbackComponent />}>
        {/* <MiniAppNavigator /> */}
        <MiniAppNavigator />
      </React.Suspense>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MiniAppScreen;
