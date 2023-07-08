import React from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

const GoalInput = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Việc cần làm"
                onChangeText={props.changeInput}
                value={props.enterInput}
            />
            <Button title="Thêm việc" onPress={props.onAddGoal} />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
});
