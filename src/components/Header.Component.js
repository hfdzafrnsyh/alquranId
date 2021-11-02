import React from "react";
import { View, StyleSheet, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ navigation, title }) => {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} style={styles.icon} onPress={openMenu} />
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    header: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        color: '#2a363b'
    }
})

export default Header;