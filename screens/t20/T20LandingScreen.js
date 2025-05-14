import { FlatList, View, Text, StyleSheet } from "react-native";
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
            <View style={styles.itemCard}>
                <MaterialIcons name={item.iconName} size={78} color="purple" />
                <Text style={styles.itemText}>{item.title}</Text>
            </View>
        );
    }
    const renderItem = ({ item }) => <Item item={item} />;


    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            numColumns={2}
            contentContainerStyle={styles.container}

        />
    );
};

const styles = StyleSheet.create({
    container: { padding: 16 },
    itemCard: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
        margin: 8,
        alignItems: 'center',
        height: 150,
        borderRadius: 16,
        justifyContent: 'space-around'
    },
    itemText: { fontSize: 20 },
});
export default T20LandingScreen;
