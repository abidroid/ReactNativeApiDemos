
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
const DashboardScreen = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>

            <Pressable onPress={() => navigation.navigate("T20Landing")} >

                <View style={styles.rowItem}>

                    <View style={styles.circularItem}>
                        <Text>1</Text>
                    </View>

                    <View>
                        <Text style={styles.title}>T20 World Cup</Text>
                        <Text style={styles.subTitle}>T20 World Cup</Text>
                    </View>


                </View>

            </Pressable>


            <Pressable onPress={() => navigation.navigate("DummyJSON")} >

                <View style={styles.rowItem}>

                    <View style={styles.circularItem}>
                        <Text>2</Text>
                    </View>

                    <View>
                        <Text style={styles.title}>Dummy JSON</Text>
                        <Text style={styles.subTitle}>Products, Recipes, Auth</Text>
                    </View>


                </View>

            </Pressable>

            <Pressable onPress={() => navigation.navigate("MovieSearch")} >

                <View style={styles.rowItem}>

                    <View style={styles.circularItem}>
                        <Text>2</Text>
                    </View>

                    <View>
                        <Text style={styles.title}>OMDB API</Text>
                        <Text style={styles.subTitle}>Search Movie</Text>
                    </View>


                </View>

            </Pressable>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },

    rowItem: {
        flexDirection: 'row',
        gap: 16,

        backgroundColor: 'white',
        padding: 8,
        borderRadius: 8,
        elevation: 8,
        marginBottom: 16,

    },

    circularItem: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: "yellow",
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 16,
        fontStyle: 'italic'
    }
});

export default DashboardScreen;