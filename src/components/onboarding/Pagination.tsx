import { View } from 'react-native';

type Props = {
  currentIndex: number;
  total: number;
};

export default function Pagination({ currentIndex, total }: Props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
      }}
    >
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={{
            width: currentIndex === index ? 24 : 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: currentIndex === index ? '#6D28D9' : '#D1D5DB',
            marginHorizontal: 4,
          }}
        />
      ))}
    </View>
  );
}
