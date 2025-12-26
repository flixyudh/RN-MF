import {Federated} from '@callstack/repack/client';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Notes = React.lazy(() => Federated.importModule('notes', './App'));

const FallbackComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator color="rgba(56, 30, 114, 1)" size="large" />
  </View>
);

const NotesScreen = () => {
  return (
    <React.Suspense fallback={<FallbackComponent />}>
      <Notes />
    </React.Suspense>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotesScreen;
