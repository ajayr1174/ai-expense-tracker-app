import { View, Text, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

type Props = {
  item: {
    title: string;
    subtitle: string;
    image: any;
  };
};

export default function OnboardingItem({ item }: Props) {
  return (
    <View className="w-full px-6 py-6 items-center justify-center">
      <Image
        source={item.image}
        resizeMode="contain"
        className="w-[300px] h-[300px]"
      />

      <Text className="text-[34px] font-bold text-center mt-10 text-text-primary">
        {item.title}
      </Text>

      <Text className="text-lg text-center mt-5 text-text-secondary px-5">
        {item.subtitle}
      </Text>
    </View>
  );
}
