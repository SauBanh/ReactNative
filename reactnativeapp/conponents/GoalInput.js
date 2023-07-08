import { useState } from "react";
import {
    StyleSheet,
    View,
    Button,
    TextInput,
    Modal,
    Image,
} from "react-native";

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredGoalText) {
        setEnteredGoalText(enteredGoalText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/images/avata.jpg")}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Việc cần làm"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Hủy"
                            onPress={props.onCancel}
                            color="#f31282"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Thêm việc"
                            onPress={addGoalHandler}
                            color="#5e0acc"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        // marginHorizontal: 8,
        flex: 1,
        // flexDirection: "column", mặc định của nó là column nên không cần phải thêm dòng này
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b",
    },
    image: {
        width: 100,
        height: 100,
        margin: 2,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: "100%",
        padding: 8,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});
