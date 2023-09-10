import './src/lib/dayjs';

import { StatusBar } from 'react-native';
import { useFonts, Inter_700Bold, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter';

import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_400Regular
  });

  if(!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <Routes />
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    </>
  );
}
