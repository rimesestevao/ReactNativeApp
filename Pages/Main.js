import { StyleSheet, Button, View, Text, Alert } from 'react-native'
import React from 'react'

const Main = () => {
  return (
    <View>
      <View>
            <Text style={styles.title}>Bom dia, !</Text>
            <Text style={styles.subtitle}>São  e faz  Graus.</Text>
        </View>
        <View style={styles.linha}>
            <Button onPress={()=>Alert.alert('Formulário')}title='Ir para o Formulário'/>
            <Button onPress={()=>Alert.alert('Importar PDF')}title='Importar PDF'/>
        </View>
        <View style={styles.linha}>
            <Button onPress={()=>Alert.alert('Lista')}title='Lista de Vendas'/>
            <Button onPress={()=>Alert.alert('Instagram')}title='Instagram'/>
        </View>
        <View>
            <Button onPress={()=>Alert.alert('Animação')}title='Animate'/>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    title : {
        fontSize: 24,
        textAlign: 'center',
    },
    subtitle : {
        fontSize : 15,
        textAlign: 'center',
    },
    linha : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        textAlign: 'center',
    },
  });

export default Main