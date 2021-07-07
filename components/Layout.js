import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const Layout = ({headerText, buttonText, linkText, form, linkAction, action, home, history}) => {
    if (!home) return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{headerText}</Text>
            </View>
            <View style={styles.section}>
                {form}
                <Pressable
                    style={styles.actionBtn}
                    onPress={action}
                >
                    <Text style={styles.actionBtnText}>{buttonText}</Text>
                </Pressable>
            </View>
            <View style={styles.footer}>
                <Pressable
                    style={styles.linkBtn}
                    onPress={linkAction}
                >
                    <Text style={styles.linkBtnText}>{linkText}</Text>
                </Pressable>
            </View>
        </View>
    )
    else return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{headerText}</Text>
            </View>
            <View style={styles.sectionHistory}>
                {history}
            </View>
            <View style={styles.footer}>
                <Pressable
                    style={styles.logoutBtn}
                    onPress={action}
                >
                    <Text style={styles.logoutBtnText}>{buttonText}</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
        flex: 1,
    },
    header: {
        padding: 20,
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    section: {
        paddingTop: 20,
        width: "100%",
        alignItems: "center",
    },
    sectionHistory: {
        paddingTop: 20,
        width: "100%",
    },
    form: {
        width: "100%",
    },
    input: {
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
        width: "100%",
    },
    actionBtn: {
        marginTop: 20,
        backgroundColor: "blue",
        width: "60%",
        padding: 10,
        borderRadius: 10,
    },
    actionBtnText: {
        fontSize: 24,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "white",
        textAlign: "center",
    },
    footer: {
        position: "absolute",
        bottom: 20,
        width: "100%",
        alignItems: "center",
    },
    linkBtnText: {
        color: "blue",
    },
    logoutBtn: {
        backgroundColor: "blue",
        width: "60%",
        padding: 10,
        borderRadius: 10,
    },
    logoutBtnText: {
        fontSize: 24,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "white",
        textAlign: "center",
    },
    historyText: {
        fontSize: 14,
        marginTop: 10,
    }
});

export default Layout;
export { styles };