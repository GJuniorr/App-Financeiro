import Icon from 'react-native-vector-icons/AntDesign';
import React, {useState} from "react"
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { FlatList } from 'react-native';



export default function Movements({data}) {
    const [showValue, setShowValue] = useState(false);

 return (
   <TouchableOpacity activeOpacity = {0.4} style = {styles.container} onPress = {() => setShowValue(!showValue)}>
    <Text style = {styles.date}>{data.date}</Text>

    <View style = {styles.content}>
        <Text style = {styles.label}>{data.label}</Text>

        {showValue ? (
            <Text
            style = {data.type === 1 ? styles.value : styles.expenses}>
             {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}</Text>
        ) : (
            <View style = {styles.skeleton}>

            </View>
        )}
    </View>
   </TouchableOpacity>
 );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA' 
    },
    content: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    date: {
        backgroundColor: '#FFF',
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    expenses: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8,
    }
});