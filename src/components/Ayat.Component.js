import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-web";

const Ayat = ({ ayatQuran }) => {
    return (
        <View style={styles.containerAyat}>
            {
                ayatQuran.map((ayat, index) => (
                    <View key={ayat.nomor} style={styles.cardAyat}>
                        <Text style={{ justifyContent: 'flex-end' }}>{ayat.nomor}</Text>
                        <Text style={styles.textAyat}>{ayat.ar}</Text>
                        <Text style={styles.textIndo}>{ayat.id}</Text>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    containerAyat: {
        backgroundColor: '#d99944',
    },
    cardAyat: {
        backgroundColor: '#f0e5dd',
        borderBottomColor: '#2a363b',
        borderBottomWidth: 2,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10

    },
    textAyat: {
        fontSize: 25
    },
    textIndo: {
        fontSize: 17
    }
})

export default Ayat;