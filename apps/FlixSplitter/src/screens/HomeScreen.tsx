import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { MainStackNavigationProp } from '../navigation/MainNavigator';
import Button from '../components/Button';
import { ScriptManager } from '@callstack/repack/client';
import { mf } from '../mf';
import { registerRemotes } from '@module-federation/runtime';

const HomeScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const navigateTo = screen => {
    navigation.navigate(screen);
  };

  const loadScript = () => {
    registerRemotes([
      {
        name: 'MiniApp',
        entry: `http://localhost:9001/ios/mf-manifest.json`,
        // entry: `http://localhost:4999/packages/MiniApp/build/generated/ios/mf-manifest.json`,
      },
    ]);
    console.log(
      '📁[1;97;46m[4m[3mapps/FlixApp/src/screens/HomeScreen.tsx:19[0m📁\n',
      '💁  ℹ️ Loaded >>> ',
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*OBQlBO7TDm3Tyour',
        }}
        //source={require('../../../../assets/pic1.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Button
        label="Profile"
        style={styles.button}
        onPress={() => navigateTo('Profile')}
      />
      <Button
        label="MiniApp"
        style={styles.button}
        onPress={() => {
          loadScript();
          navigateTo('MiniApp');
        }}
      />
      <Button
        label="Notes"
        style={styles.button}
        onPress={() => navigateTo('Notes')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 40,
  },
  button: {
    width: '50%',
    borderRadius: 16,
    marginVertical: 8,
  },
  logo: {
    width: 300,
    height: 200,
  },
});

export default HomeScreen;
