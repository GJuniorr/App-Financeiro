import React from "react"
import Icon from 'react-native-vector-icons/Feather';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    FlatList
} from 'react-native'




import Header from "../components/Header/header";
import Balance from "../components/Balance/balance";
import Actions from "../components/Actions/actions";
import Movements from "../components/Movements/movements";

const appBar = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64
const list = [
    {
        id: 5,
        label: 'Não há Compras efetuadas',
        value: 'Nulo'
    },
]

export default function Compras() {
 return (
  <View style = {styles.container}>
  <Header name = "Leonardo Silva"/>

  <Balance saldo = "9.700" gastos = "400,90"/>

  <Actions/>

  <Text style = {styles.title}>Últimas movimentações</Text>

 <FlatList 
  style = {styles.list}
  data = {list}
  keyExtractor = {( item ) => String(item.id)}
  showsVerticalScrollIndicator = {false}
  renderItem = { ({item}) => <Movements data = {item}/>} />

</View>
)
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#CDCDCD',
},
title: {
fontSize: 18,
fontWeight: 'bold',
margin: 14,
},
list: {
marginStart: 14,
marginEnd: 14
}
});