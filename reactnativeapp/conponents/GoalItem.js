import { StyleSheet } from "react-native";
import { Text, View, Button } from "react-native";
const GoalItem = (props) => {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
            <Button
                title="Xóa Việc"
                color={"red"}
                onPress={() => props.getIdHandle(props.id)}
            />
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    goalText: {
        color: "#fff",
    },
});
