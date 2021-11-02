import React from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from "react-native";


const Surat = ({ dataSuratList, navigation }) => {


    return (
        <View>

            {
                dataSuratList.map((surat, index) => (
                    <TouchableOpacity key={index} style={styles.cardsurat} onPress={() => navigation.navigate('Ayat', surat)}>
                        <Text style={styles.textStyle}>{surat.nama}</Text>
                        <Text style={styles.textStyle}>{surat.asma}</Text>
                        <Text>{surat.arti}</Text>
                        <Text>Turun di : {surat.type}</Text>
                    </TouchableOpacity>
                ))
            }

        </View>
    )
}


const styles = StyleSheet.create({
    cardsurat: {
        backgroundColor: '#f0e5dd',
        borderRadius: 8,
        marginBottom: 4,
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        marginHorizontal: 10,
        marginVertical: 2
    },
    textStyle: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Surat;