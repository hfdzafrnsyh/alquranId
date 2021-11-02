import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SuratList from './SuratList.Component';


const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <SuratList navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Home;