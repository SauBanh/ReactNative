// import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

import MealList from "../components/MealsList/MealList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
    // const favoritesMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoritesMeals.ids);

    const favoritesMeals = MEALS.filter((meal) =>
        favoriteMealIds.includes(meal.id)
    );

    if (favoritesMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>
                    You have no favorites meals yet.
                </Text>
            </View>
        );
    }

    return <MealList items={favoritesMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
});
