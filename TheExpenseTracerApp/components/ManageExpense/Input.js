import { View, Text, TextInput, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

const Input = ({ lable, invalid, style, textInputConfig }) => {
    const inputStyle = [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyle.push(styles.inputMultiline);
    }

    if (invalid) {
        inputStyle.push(styles.invalidInput);
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.lable, invalid && styles.invalidLabel]}>
                {lable}
            </Text>
            <TextInput style={inputStyle} {...textInputConfig} />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 16,
    },
    lable: {
        fontSize: 12,
        color: GlobalStyles.color.primary100,
        marginBottom: 4,
    },
    input: {
        backgroundColor: GlobalStyles.color.primary100,
        color: GlobalStyles.color.primary700,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: "top",
    },
    invalidLabel: {
        color: GlobalStyles.color.error500,
    },
    invalidInput: {
        backgroundColor: GlobalStyles.color.error50,
    },
});
