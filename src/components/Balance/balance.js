import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default function Balance({saldo, gastos}) {
    return(
        <View style = {styles.container}>

            <View style = {styles.item}>
                <Text style = {styles.itemTitleSaldo}>Saldo</Text>
                <View style = {styles.content}>
                    <Text style = {styles.currencySymbolSaldo}>R$</Text>
                    <Text style = {styles.saldo}>
                        {saldo}
                    </Text>
                </View>
            </View>

            <View style = {styles.item}>
                <Text style = {styles.itemTitleGastos}>Gastos</Text>
                <View style = {styles.content}>
                    <Text style = {styles.currencySymbolGastos}>R$</Text>
                    <Text style = {styles.gastos}>{gastos}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',

        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 8,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99
    },

    itemTitleSaldo: {
        fontSize: 20,
        color: '#2ecc71',
    },

    itemTitleGastos: {
        fontSize: 20,
        color: '#e74c3c',
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    currencySymbolSaldo: {
        color: '#2ecc71',
        marginRight: 6,

    },
    currencySymbolGastos: {
        color: '#e74c3c',
        marginRight: 6,
    },
   
    saldo: {
        fontSize: 22,
        color: '#2ecc71',
    },

    gastos: {
        fontSize: 22,
        color: '#e74c3c'
    },
})