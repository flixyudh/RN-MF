import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import { Federated, Script, ScriptManager } from '@callstack/repack/client';
import { Platform } from 'react-native';
import './mf'

// const resolveURL = Federated.createURLResolver({
//   containers: {
//     notes: 'http://localhost:9002/[name][ext]',
//     MiniApp: 'http://localhost:9001/index.bundle',
//     ui: 'http://localhost:9003/index.bundle',
//   },
// });

// ScriptManager.shared.addResolver(async (scriptId, caller) => {
//   console.log("📁[1;97;46m[4m[3mapps/FlixApp/src/App.tsx:16[0m📁\n","💁  ℹ️ scriptId >>> ", scriptId)
//   console.log("📁[1;97;46m[4m[3mapps/FlixApp/src/App.tsx:17[0m📁\n","💁  ℹ️ caller >>> ", caller)
//   let url;
//   if (caller === 'main') {
//     console.log(
//       '📁[1;97;46m[4m[3mapps/FlixApp/src/App.tsx:14[0m📁\n',
//       '💁  ℹ️ asd >>> ',
//       Script.getDevServerURL(scriptId),
//     );
//     url = Script.getDevServerURL(scriptId);
//   } else {
//     console.log(
//       '📁[1;97;46m[4m[3mapps/FlixApp/src/App.tsx:15[0m📁\n',
//       '💁  ℹ️ resolveURL(scriptId, caller) >>> ',
//       resolveURL(scriptId, caller),
//     );
//     url = resolveURL(scriptId, caller);
//   }

//   console.log(
//     '📁[1;97;46m[4m[3mapps/FlixApp/src/App.tsx:21[0m📁\n',
//     '💁  ℹ️ url >>> ',
//     url,
//   );

//   if (!url) {
//     return undefined;
//   }

//   return {
//     url,
//     cache: false, // For development
//     query: {
//       platform: Platform.OS,
//     },
//   };
// });

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
