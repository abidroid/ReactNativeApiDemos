
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import T20LandingScreen from "../screens/t20/T20LandingScreen";
import DashboardScreen from "../screens/DashboardScreen";
import DummyJSONLanding from "../screens/dummyJSON/DummyJSONLanding";
import MovieSearchScreen from "../screens/MovieSearchScreen";
import T20ScheduleScreen from "../screens/t20/T20SceduleScreen";
import T20VenueScreen from "../screens/t20/T20VenueScreen";
import T20HistoryScreen from "../screens/t20/T20HistoryScreen";
import T20TeamScreen from "../screens/t20/T20TeamScreen";

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
            name="T20Schedule"
            component={T20ScheduleScreen}

        />
        <Stack.Screen
            name="T20Venues"
            component={T20VenueScreen}

        />
        <Stack.Screen
            name="T20History"
            component={T20HistoryScreen}

        />
        <Stack.Screen
            name="T20Teams"
            component={T20TeamScreen}

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