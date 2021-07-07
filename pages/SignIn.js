import React, { useState } from "react";
import Layout from "../components/Layout";
import SignInForm from "../components/SignInForm";

const SignIn = ({navigation}) => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: null,
        password: null,
    });
    const [check, setCheck] = useState(null);

    const goSignUp = () => {
        navigation.navigate("SignUp");
    };

    const handleSignIn = () => {
        setCheck(null);

        let emailError = null, passwordError = null;
        !data.email ? emailError = "Required" : emailError = null;
        !data.password ? passwordError = "Required" : passwordError = null;

        setErrors({
            email: emailError,
            password: passwordError,
        });

        if (!emailError && !passwordError) {
            fetch("https://reqres.in/api/login", {
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
                    navigation.navigate("Home");
                }
            });
        }
    }

    return (
        <Layout
            headerText="Sign In"
            buttonText="Login"
            linkText="Don't have an account? Sign Up"
            form={<SignInForm data={data} errors={errors} setData={setData} check={check} />}
            linkAction={goSignUp}
            action={handleSignIn}
        />
    );
};

export default SignIn;