import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import Layout, {styles as layoutStyles} from "../components/Layout";
import { generateHistory } from "../utils/common";

const History = () => {
    const [histories, setHistories] = useState([1, 2]);

    useEffect(() => {
        const data = generateHistory();
        setHistories(data);
    }, [])

    return (
        histories.map((history, index) => {
            return (
                <Text key={index} style={layoutStyles.historyText}>{history}</Text>
            )
        })
    )
}

const Home = ({navigation}) => {

    const handleLogout = () => {
        navigation.navigate("SignIn");
    };

    return (
        <Layout
            headerText="Home"
            home={true}
            buttonText="Logout"
            action={handleLogout}
            history={<History />}
        />
    );
};

export default Home;