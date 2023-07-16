import { useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";

import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "./IconButton";

function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        console.log("Pressed!: " + mealId);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon="star"
                        color="white"
                        onPress={headerButtonPressHandler}
                    />
                );
            },
        });
    }, [navigation]);
    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                style={styles.image}
                source={{ uri: selectedMeal.imageUrl }}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetail
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                TextStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white",
    },
    detailText: {
        color: "white",
    },
    subTitleContainer: {
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
    },
    listOuterContainer: {
        alignItems: "center",
    },
    listContainer: {
        width: "80%",
    },
});
