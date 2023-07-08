import { useState } from "react";
import {
    StyleSheet,
    // Text,
    View,
    // Button,
    // Alert,
    // TextInput,
    // ScrollView,
    FlatList, //tương tự như lazzy load khi các phần tử bên trong dài hơn bên ngoài sẽ tự động có thanh trượt
} from "react-native";
import GoalItem from "./conponents/GoalItem";
import GoalInput from "./conponents/GoalInput";

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState("");
    const [courseGloals, setCourseGloals] = useState([]);

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        setCourseGloals((currentCourseGoals) => [
            { text: enteredGoalText, id: Math.random().toString() },
            ...currentCourseGoals,
        ]);
        setEnteredGoalText("");
    }

    function deleteGoalHandler(index) {
        setCourseGloals((currentCourseGoals) =>
            currentCourseGoals.filter(
                (curentCourseGoal) => curentCourseGoal.id !== index
            )
        );
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput
                changeInput={goalInputHandler}
                enterInput={enteredGoalText}
                onAddGoal={addGoalHandler}
            />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGloals}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                id={itemData.item.id}
                                getIdHandle={deleteGoalHandler}
                            />
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    alwaysBounceVertical={true}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 5,
    },
});
