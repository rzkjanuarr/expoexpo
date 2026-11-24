import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.fontStyle}>Home Screen</Text>
      <Link href={'/about'} style={styles.fontStyle}>
        About Screen
      </Link>
      <Link href={'/recipe'} style={styles.fontStyle}>
        Recipe Screen
      </Link>
      <Link href={'/recipe/10'} style={styles.fontStyle}>
        Detail Recipe : 10
      </Link>
      <Link href={'/recipe/99'} style={styles.fontStyle}>
        Detail Recipe : 99
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  fontStyle: {
    color: 'black',
    textDecorationLine: 'underline',
    textDecorationColor: 'red',
    fontWeight: 'bold',
    fontSize: 32,
  },
});
