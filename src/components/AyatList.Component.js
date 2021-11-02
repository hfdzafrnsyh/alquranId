import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import server from "../server/server";
import Ayat from "./Ayat.Component";


const AyatList = ({ navigation }) => {

    const [ayatQuran, setAyatQuran] = useState([]);

    const nomor = navigation.getParam('nomor');
    const handleAyat = async () => {
        const { data } = await server.get(`/surah/${nomor}`);
        setAyatQuran(data.data)
    }

    useEffect(() => {
        handleAyat()
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Ayat ayatQuran={ayatQuran} />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    }
})

export default AyatList;