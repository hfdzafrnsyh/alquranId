import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from 'react-navigation';
import HomeStack from "./stack/Home.Stack";


const RouteDrawer = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
})

export default createAppContainer(RouteDrawer);