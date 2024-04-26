import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import React from "react"
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import Entradas from '../../screens/entradas';
import Compras from '../../screens/compras';
import Carteira from '../../screens/carteira';
import Boletos from '../../screens/boletos';
import Home from '../../pages/Home/home';


export default function Actions() {
    const {navigate} = useNavigation();   
 return (
    <ScrollView style = {styles.container} horizontal = {true} showsHorizontalScrollIndicator = {false}>

    <TouchableOpacity
             activeOpacity={0.4} 
             style = {styles.actionButton}
             onPress={() => {
                navigate(Entradas);
             }}>
    <View style = {styles.areaButton}>
        <Icon name = "addfolder" size = {26} color = "#000"/>
    </View> 
    <Text style = {styles.button}>Entradas</Text>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={0.4}
     style = {styles.actionButton}
     onPress={() => {
        navigate(Compras);
     }}>
    <View style = {styles.areaButton}>
        <Icon name = "tagso" size = {26} color = "#000"/>
    </View> 
    <Text style = {styles.button}>Compras</Text>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={0.4}
     style = {styles.actionButton}
     onPress={() => {
        navigate(Carteira);
     }}>
    <View style = {styles.areaButton}>
        <Icon name = "creditcard" size = {26} color = "#000"/>
    </View> 
    <Text style = {styles.button}>Carteira</Text>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={0.4}
     style = {styles.actionButton}
     onPress={() => {
        navigate(Boletos);
     }}>
    <View style = {styles.areaButton}>
        <Icon name = "barcode" size = {26} color = "#000"/>
    </View> 
    <Text style = {styles.button}>Boletos</Text>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={0.4}
     style = {styles.actionButton}
     onPress={() => {
        navigate(Home);
     }}>
    <View style = {styles.areaButton}>
        <Icon name = "setting" size = {26} color = "#000"/>
    </View> 
    <Text style = {styles.button}>Conta</Text>
    </TouchableOpacity>
    </ScrollView>
 );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 25,
    },
    areaButton: {
       backgroundColor: '#ecf0f1',
       height: 60,
       width: 60,
       justifyContent: 'center',
       alignItems: 'center',
    },
    button: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})