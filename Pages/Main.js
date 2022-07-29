import {StyleSheet, View, Button, Alert} from 'react-native';
import styled from 'styled-components';
import React from 'react';

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-itens: center;
    width: 100%;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 24px;
    font-weight: 700px;
`
const Text = styled.div`
    font-size: 18px;
    font-weight: 400px;
`

const Main = ({usuario, horas, temp}) => {
  return (
    <View >
        <Container>
            <Column>
                <Title>Bom dia, {usuario}!</Title>
                <Text>São {horas} e está fazendo {temp} graus</Text>
            </Column>
            <Row>
                <Button onPress={()=>Alert.alert('teste')} title='form'/>
                <Button onPress={()=>Alert.alert('teste')} title='import pdf'/>
            </Row>
            <Row>
                <Button onPress={()=>Alert.alert('teste')} title='vendas'/>
                <Button onPress={()=>Alert.alert('teste')} title='insta'/>
            </Row>
            <Row>
                <Button style={{width:'100%'}} onPress={()=>Alert.alert('teste')} title='animate'/>
            </Row>
        </Container>
    </View>
  )
}


export default Main

