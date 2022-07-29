import { View, Text, Button, Alert} from 'react-native'
import React from 'react'


const Main = ({Usuário, Horas, Temperatura}) => {
  return (
    <View>
        <div style={main.title}>
            <Text>Bom dia, {Usuário}!</Text>
            <Text>São {Horas} e faz {Temperatura} Graus.</Text>
        </div>
        <div>
            <Button onPress={()=>Alert.alert('Formulário')}title='Ir para o Formulário'/>
            <Button onPress={()=>Alert.alert('Importar PDF')}title='Importar PDF'/>
            <Button onPress={()=>Alert.alert('Lista')}title='Lista de Vendas'/>
            <Button onPress={()=>Alert.alert('Instagram')}title='Instagram'/>
        </div>
        <div>
            <Button onPress={()=>Alert.alert('Animação')}title='Animate'/>
        </div>
        
    </View>
  )
}

const main = StyleSheet.create({
    title:{
        flex: 1,
        
    }
})

export default Main