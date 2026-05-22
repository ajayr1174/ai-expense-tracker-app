import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

const SplashScreen = () => {
  return (
    <View className="flex-1 bg-background-dark items-center justify-center px-6">
      {/* Status Bar */}
      <StatusBar backgroundColor="#0D1020" barStyle="light-content" />

      {/* Robot Image */}
      <Image
        source={require('../assets/images/bot.png')}
        className="w-[320px] h-[320px]"
        resizeMode="contain"
      />

      {/* Title */}
      <Text className="text-white text-4xl font-extrabold tracking-wide text-center">
        AI EXPENSE AGENT
      </Text>

      {/* Subtitle */}
      <Text className="text-zinc-300 text-center text-lg leading-7 mt-4 font-medium">
        Smart. Simple. Stress-Free{'\n'}
        Expenses
      </Text>
    </View>
  );
};

export default SplashScreen;
