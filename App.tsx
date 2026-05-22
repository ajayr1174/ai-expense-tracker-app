/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './global.css';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import SplashScreen from './src/screens/onboarding/SplashScreen';
import OnboardingScreen from './src/screens/onboarding/OnboardingScreen';
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView className="bg-primary h-full flex-1">
        {/* <SplashScreen />
         */}
        {/* <OnboardingScreen /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
