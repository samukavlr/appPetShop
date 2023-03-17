import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/pages/Login'
import Cadastrar from './src/pages/Cadastrar';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen/>
      {/* <Cadastrar></Cadastrar> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F3EAD5',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
