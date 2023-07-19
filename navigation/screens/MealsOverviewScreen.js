import { useLayoutEffect } from "react";
// import { useRoute } from "@react-navigation/native";

import MealList from "../components/MealsList/MealList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
    // const route = useRoute();
    // route.params
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);

    return <MealList items={displayedMeals} />;
}

export default MealsOverviewScreen;
