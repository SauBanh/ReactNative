import { View, Text, StyleSheet } from "react-native";

function MealDetail({ duration, complexity, affordability, style, TextStyle }) {
    return (
        <View style={[styles.detail, style]}>
            <Text style={[styles.detailItem, TextStyle]}>{duration}m</Text>
            <Text style={[styles.detailItem, TextStyle]}>
                {complexity.toUpperCase()}
            </Text>
            <Text style={[styles.detailItem, TextStyle]}>
                {affordability.toUpperCase()}
            </Text>
        </View>
    );
}

export default MealDetail;

const styles = StyleSheet.create({
    detail: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});
