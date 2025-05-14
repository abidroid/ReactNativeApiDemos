
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import T20LandingScreen from "../screens/t20/T20LandingScreen";


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (<Stack.Navigator>
        <Stack.Screen 
        name="T20Landing"
        component={T20LandingScreen}
        
        />
    </Stack.Navigator>);
}

export default RootNavigator;