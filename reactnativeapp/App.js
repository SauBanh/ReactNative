import { useState } from "react";
import {
    StyleSheet,
    // Text,
    View,
    Button,
    // Alert,
    // TextInput,
    // ScrollView,
    FlatList, //tương tự như lazzy load khi các phần tử bên trong dài hơn bên ngoài sẽ tự động có thanh trượt
} from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./conponents/GoalItem";
import GoalInput from "./conponents/GoalInput";

export default function App() {
    const [modalIsVisible, setModalVisible] = useState(false);
    const [courseGloals, setCourseGloals] = useState([]);

    function startAddGoalHandler() {
        setModalVisible(true);
    }

    function endAddGoalHandler() {
        setModalVisible(false);
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGloals((currentCourseGoals) => [
            { text: enteredGoalText, id: Math.random().toString() },
            ...currentCourseGoals,
        ]);
        setModalVisible(false);
    }

    function deleteGoalHandler(id) {
        setCourseGloals((currentCourseGoals) =>
            currentCourseGoals.filter((goal) => goal.id !== id)
        );
    }

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button
                    title="Thêm mới"
                    color="#5e0acc"
                    onPress={startAddGoalHandler}
                />
                {/* {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} />} */}
                <GoalInput
                    onAddGoal={addGoalHandler}
                    visible={modalIsVisible}
                    onCancel={endAddGoalHandler}
                />
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={courseGloals}
                        renderItem={(itemData) => {
                            return (
                                <GoalItem
                                    text={itemData.item.text}
                                    id={itemData.item.id}
                                    onDeleteItem={deleteGoalHandler}
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
        </>
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
