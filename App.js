import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Alert, View } from 'react-native';
import Main from './Pages/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main usuario='Maximus' horas='08:00' temp='18'/>
      {/* <Button onPress={()=>Alert.alert('Login')}title='Login'/>
      <Button onPress={()=>Alert.alert('Cadastro')}title='Cadastro'/>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
