import 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

import { Theme } from '@/constants/Theme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider value={Theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="dark" backgroundColor="#ffffff" />

          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="options" options={{ title: 'Modo de juego' }} />
            <Stack.Screen
              name="routine_viewer"
              options={{ title: 'Tus rutinas' }}
            />
            <Stack.Screen name="routines" options={{ headerShown: false }} />
            <Stack.Screen name="games" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
