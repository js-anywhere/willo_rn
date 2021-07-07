import React, { useState } from "react";
import Layout from "../components/Layout";
import SignUpForm from "../components/SignUpForm";

const SignUp = ({navigation}) => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        name: null,
        email: null,
        password: null,
    });
    const [check, setCheck] = useState(null);

    const goSignIn = () => {
        navigation.navigate("SignIn");
    };

    const handleSignUp = () => {
        setCheck(null);

        let nameError = null, emailError = null, passwordError = null;
        !data.name ? nameError = "Required" : nameError = null;
        !data.email ? emailError = "Required" : emailError = null;
        !data.password ? passwordError = "Required" : passwordError = null;

        setErrors({
            name: nameError,
            email: emailError,
            password: passwordError,
        });

        if (!nameError && !emailError && !passwordError) {
            fetch("https://reqres.in/api/register", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then((response) => response.json())
            .then((json) => {
                if ("error" in json) {
                    setCheck("Invalid credential");
                }
                else {
                    navigation.navigate("SignIn");
                }
            });
        }
    }

    return (
        <Layout
            headerText="Sign Up"
            buttonText="Sign Up"
            linkText="Already have an account? Sign In"
            form={<SignUpForm data={data} errors={errors} setData={setData} check={check} />}
            linkAction={goSignIn}
            action={handleSignUp}
        />
    );
};

export default SignUp;