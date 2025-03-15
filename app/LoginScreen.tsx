import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, SafeAreaView} from "react-native";
import {Stack, useRouter} from "expo-router";
import { COLORS, SIZES } from "../constants";
import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/FirebaseConfig";

const LoginScreen = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

 /*   const handleLogin = () => {
        if (email === "pavithrani" && password === "123456") {

        } else {
            Alert.alert("Invalid Credentials", "Please check your email and password.");
        }
    };*/

   /* const handleLogin = async () => {
        try {
           // const res = await axios.post('http:///192.168.110.76:3002/auth/login', { email, password });
            Alert.alert('Success', 'Logged in successfully');
            router.push("Home/HomeScreen");
        } catch (error) {
            Alert.alert('Error', error.response?.data?.message || 'Login failed');
        }
    };*/
    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert('Success', 'Login successful');
            router.push("Home/HomeScreen"); // Navigate to home screen
        } catch (error: any) {
            Alert.alert('Error', error.message || 'Login failed');
        }
    };

    return (


            <View style={styles.container}>
                <Stack.Screen  options={{ headerShown: false }} />
                <Text style={styles.title}>Welcome Back!</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={COLORS.gray}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Alert.alert("Forgot Password", "Reset your password.")}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("SignUpScreen")}>
                    <Text style={styles.forgotText}>Dont You have an account?  <Text style={styles.clickHere}>Click here to sign up</Text></Text>

                </TouchableOpacity>
            </View>


    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: SIZES.xLarge,
        fontWeight: "bold",
        color: COLORS.primary,
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: COLORS.white,
    },
    loginBtn: {
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        marginTop: 10,
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.medium,
        fontWeight: "bold",
    },
    forgotText: {
        color: COLORS.secondary,
        fontSize: SIZES.small,
        marginTop: 10,
    },
    clickHere: {
        color: COLORS.primary,
        fontSize: SIZES.medium,
        marginTop: 20,
    },
});
