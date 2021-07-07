import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InputError = ({error, center}) => {
    return (
        <View>
            <Text style={center ? styles.errorCenter : styles.error}>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        color: "red",
    },
    errorCenter: {
        color: "red",
        textAlign: "center",
        marginTop: 20,
    },
});

export default InputError;