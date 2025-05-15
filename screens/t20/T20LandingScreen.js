import { FlatList, View, Text, StyleSheet, ImageBackground, Pressable, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const T20LandingScreen = ({ navigation }) => {

    const DATA = [
        { id: '1', title: 'Schedule', iconName: "schedule", to: 'ScheduleScreen' },
        { id: '2', title: 'Venues', iconName: "home", to: 'VenueScreen' },
        { id: '3', title: 'History', iconName: "history", to: 'HistoryScreen' },
        { id: '4', title: 'Teams', iconName: "group", to: 'TeamScreen' },
        { id: '5', title: 'Live Score', iconName: "scoreboard", to: 'LiveScore' },
        { id: '6', title: 'Highlights', iconName: "tv", to: 'Highlights' },
    ];


    const Item = ({ item }) => {
        return (
            <Pressable style={styles.itemCard}
                onPress={() => { Alert.alert('good'); }}
            >

                <MaterialIcons name={item.iconName} size={78} color="purple" />
                <Text style={styles.itemText}>{item.title}</Text>

            </Pressable>
        );
    }
    const renderItem = ({ item }) => <Item item={item} />;


    return (
        <ImageBackground
            source={require('../../assets/t20/bg.jpeg')}
            style={styles.background}
            resizeMode="cover">

            <FlatList
                data={DATA}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={styles.container}

            />
        </ImageBackground>


    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: { padding: 16 },
    itemCard: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
        margin: 8,
        alignItems: 'center',
        height: 180,
        borderRadius: 16,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: 'purple',
        borderWidth: 1
    },
    itemText: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
});
export default T20LandingScreen;
