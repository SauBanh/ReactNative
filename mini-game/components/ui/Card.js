import { View, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

function Card({ children }) {
    return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        color: "#fff",
        borderRadius: 8,
        elevation: 8, // hiệu ứng bóng trên android và không hoạt động trên ios để hoạt động trên ios làm bước dưới
        shadowColor: "black", // thêm bóng đổ vào ios
        shadowOffset: { width: 0, height: 2 }, // thêm bóng đổ vào ios
        shadowRadius: 6, // thêm bóng đổ vào ios
        shadowOpacity: 0.25, // thêm bóng đổ vào ios
    },
});
