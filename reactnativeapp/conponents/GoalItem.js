import { StyleSheet } from "react-native";
import { Text, View, Button, Pressable } from "react-native";
const GoalItem = (props) => {
    return (
        // <Pressable onPress={() => props.onDeleteItem(props.id)}>
        <View style={styles.goalItem}>
            <Pressable
                onPress={props.onDeleteItem.bind(this, props.id)}
                android_ripple={{ color: "#210644" }} // để sử dụng chức năng này trong ios cần thêm style
                // style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        padding: 8,
        color: "#fff",
    },
});
