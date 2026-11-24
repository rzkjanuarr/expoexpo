import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const DetailScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Detail : {id}</Text>
    </View>
  );
};

export default DetailScreen;
