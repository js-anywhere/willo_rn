import React from "react";
import { View, TextInput } from "react-native";
import { styles as layoutStyles } from "../components/Layout";
import InputError from "../components/InputError";

const SignUpForm = ({data, errors, setData, check}) => {

    const handleChangeField = (name, value) => {
        setData({
            ...data,
            [name]: value,
        });
    };

    return (
        <View style={layoutStyles.form}>
            <TextInput 
                placeholder="Name" 
                value={data.name}
                onChangeText={(value) => handleChangeField("name", value)}
                style={layoutStyles.input}
            />
            { errors.name && <InputError error={errors.name} />}
            <TextInput 
                placeholder="Email" 
                value={data.email}
                onChangeText={(value) => handleChangeField("email", value)}
                style={layoutStyles.input}
            />
            { errors.email && <InputError error={errors.email} />}
            <TextInput 
                placeholder="Password" 
                value={data.password}
                onChangeText={(value) => handleChangeField("password", value)}
                style={layoutStyles.input}
                secureTextEntry={true}
            />
            { errors.password && <InputError error={errors.password} />}
            { check && <InputError error={check} center={true} />}
        </View>
    );
};

export default SignUpForm;