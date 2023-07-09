import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none" // tắt chế độ tự động chỉnh chữ viết hoa trên điện thoại
                autoCorrect={false} // tắt chế độ tự động chỉnh sửa chữ trên mobile
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Rest</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "#3b021f",
        color: "#fff",
        borderRadius: 8,
        elevation: 8, // hiệu ứng bóng trên android và không hoạt động trên ios để hoạt động trên ios làm bước dưới
        shadowColor: "black", // thêm bóng đổ vào ios
        shadowOffset: { width: 0, height: 2 }, // thêm bóng đổ vào ios
        shadowRadius: 6, // thêm bóng đổ vào ios
        shadowOpacity: 0.25, // thêm bóng đổ vào ios
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
});
