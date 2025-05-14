
import { View , Text, Pressable} from "react-native";
const DashboardScreen = ({navigation}) => {

    return(
        <View>
            <Text>Welcome</Text>
            <Pressable onPress={()=> navigation.navigate("T20Landing")} >
                <Text>T20 World Cup</Text>
            </Pressable>
        </View>
    );
}

export default DashboardScreen;