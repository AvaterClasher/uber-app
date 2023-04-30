import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"#ff0000",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:40,
  }
});
