import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './src/Components/Title';
import Form from './src/Components/Form';


export default function App() {
  return (
    <View style={styles.container}>
      <Title title="Meu Primeiro Formulário"></Title>
      <Form></Form>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
