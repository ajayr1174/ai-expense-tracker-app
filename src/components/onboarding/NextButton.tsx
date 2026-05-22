import { TouchableOpacity, Text } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

export default function NextButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-primary py-4.5 rounded-2xl items-center"
    >
      <Text className="text-text-inverse text-lg font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
