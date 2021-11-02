import { createStackNavigator } from "react-navigation-stack";
import Home from "../../components/Home.Component";
import Header from "../../components/Header.Component";
import AyatList from "../../components/AyatList.Component";
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="QuranId" />
            };
        }
    },
    Ayat: {
        screen: AyatList
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#EEE',
        headerStyle: {
            backgroundColor: '#d99944'
        }
    }
})


export default HomeStack;