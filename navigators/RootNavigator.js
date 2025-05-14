
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import T20LandingScreen from "../screens/t20/T20LandingScreen";
import DashboardScreen from "../screens/DashboardScreen";
import DummyJSONLanding from "../screens/dummyJSON/DummyJSONLanding";
import MovieSearchScreen from "../screens/MovieSearchScreen";


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (<Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
        />


        <Stack.Screen
            name="T20Landing"
            component={T20LandingScreen}

        />
        <Stack.Screen
            name="DummyJSON"
            component={DummyJSONLanding}

        />
        <Stack.Screen
            name="MovieSearch"
            component={MovieSearchScreen}

        />
    </Stack.Navigator>);
};

export default RootNavigator;