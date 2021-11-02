import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import server from "../server/server";
import Surat from "./Surat.Component";

const SuratList = ({ navigation }) => {

    const [dataSuratList, setDataSuratList] = useState([]);

    const fetchSuratList = async () => {
        const { data } = await server.get('/surah');
        setDataSuratList(data.data);
        console.log(data.data)
    }

    useEffect(() => {
        fetchSuratList();
    }, [])

    return (
        <ScrollView>
            <Surat dataSuratList={dataSuratList} navigation={navigation} />
        </ScrollView>
    )
}


export default SuratList;